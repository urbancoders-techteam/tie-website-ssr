// @ts-nocheck
"use client";

import NextLink from "next/link";
import {
  useParams as useNextParams,
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
} from "next/navigation";
import React, { forwardRef, useCallback, useEffect, useState } from "react";

const STATE_KEY = "portal:nav-state";

export function setNavState(state) {
  if (typeof window === "undefined") return;
  if (state == null) {
    sessionStorage.removeItem(STATE_KEY);
    return;
  }
  sessionStorage.setItem(STATE_KEY, JSON.stringify(state));
}

export function getNavState() {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(STATE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function resolveHref(pathname, to) {
  if (to == null) return pathname || "/";

  if (typeof to === "object") {
    const path = to.pathname || pathname || "/";
    const search = to.search
      ? to.search.startsWith("?")
        ? to.search
        : `?${to.search}`
      : "";
    return `${path}${search}${to.hash || ""}`;
  }

  const target = String(to);
  if (target.startsWith("/")) return target;
  if (target.startsWith("?") || target.startsWith("#")) {
    return `${pathname || "/"}${target}`;
  }

  const base = pathname?.endsWith("/") ? pathname : `${pathname || "/"}/`;
  const url = new URL(target, `http://portal.local${base}`);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function useNavigate() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (to, options) => {
      if (typeof to === "number") {
        if (to < 0) router.back();
        else router.forward();
        return;
      }

      if (options && Object.prototype.hasOwnProperty.call(options, "state")) {
        setNavState(options.state ?? null);
      } else {
        setNavState(null);
      }

      const href = resolveHref(pathname, to);
      if (options?.replace) router.replace(href);
      else router.push(href);
    },
    [pathname, router]
  );
}

export function useLocation() {
  const pathname = usePathname() || "/";
  const searchParams = useNextSearchParams();
  const search = searchParams?.toString() ? `?${searchParams.toString()}` : "";
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(getNavState());
  }, [pathname, search]);

  return { pathname, search, hash: "", state, key: "portal" };
}

export function useParams() {
  return useNextParams() || {};
}

export function useSearchParams() {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = (next) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (typeof next === "function") {
      const updated = next(params);
      router.push(`${pathname}?${updated.toString()}`);
      return;
    }
    if (next instanceof URLSearchParams) {
      router.push(`${pathname}?${next.toString()}`);
      return;
    }
    if (next && typeof next === "object") {
      Object.entries(next).forEach(([key, value]) => {
        params.set(key, String(value));
      });
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return [searchParams, setSearchParams];
}

export const Link = forwardRef(function PortalLink(
  { to, href, children, ...props },
  ref
) {
  return (
    <NextLink ref={ref} href={to ?? href ?? "#"} {...props}>
      {children}
    </NextLink>
  );
});

export function NavLink({ to, href, className, style, children, ...props }) {
  const pathname = usePathname();
  const target = to ?? href ?? "/";
  const isActive = pathname === target;
  const classValue =
    typeof className === "function" ? className({ isActive }) : className;
  const styleValue = typeof style === "function" ? style({ isActive }) : style;

  return (
    <NextLink href={target} className={classValue} style={styleValue} {...props}>
      {typeof children === "function" ? children({ isActive }) : children}
    </NextLink>
  );
}

export function Navigate({ to, replace = false }) {
  const router = useRouter();

  useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [replace, router, to]);

  return null;
}

export function Outlet() {
  return null;
}

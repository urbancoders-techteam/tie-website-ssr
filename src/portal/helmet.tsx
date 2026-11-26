// @ts-nocheck
"use client";

import React, { useEffect } from "react";

function textOf(node) {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (React.isValidElement(node)) return textOf(node.props?.children);
  return "";
}

export function Helmet({ children }) {
  useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;

      if (child.type === "title") {
        document.title = textOf(child.props.children).replace(/\s+/g, " ").trim();
      }

      if (child.type === "meta" && child.props?.name) {
        const name = child.props.name;
        let element = document.head.querySelector(`meta[name="${name}"]`);
        if (!element) {
          element = document.createElement("meta");
          element.setAttribute("name", name);
          document.head.appendChild(element);
        }
        if (child.props.content != null) {
          element.setAttribute("content", child.props.content);
        }
      }
    });
  }, [children]);

  return null;
}

export default Helmet;

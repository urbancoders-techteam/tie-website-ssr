"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest("#mobileMenu") &&
        !e.target.closest("#menuBtn")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="#">
          <Image
            src="/images/TIE_LOGO.png"
            alt="Logo"
            width={110}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "25px",
            margin: 0,
            padding: 0,
          }}
        >
          {["Home", "About", "Universities", "Dubai Top Universities", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  style={{
                    textDecoration: "none",
                    color: "#0A2463",
                    fontWeight: 500,
                    fontSize: "15px",
                  }}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "15px" }}>
          <a
            href="tel:+919831241212"
            style={{
              padding: "10px 18px",
              background: "#129ba0",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            Call Now
          </a>

          <a
            href="#home"
            style={{
              padding: "10px 18px",
              background: "#0A2463",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menuBtn"
          onClick={toggleMenu}
          style={{
            display: "none",
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        id="mobileMenu"
        style={{
          position: "fixed",
          top: 0,
          right: menuOpen ? "0" : "-100%",
          width: "260px",
          height: "100vh",
          background: "#fff",
          paddingTop: "80px",
          boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
          transition: "0.3s ease",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          paddingLeft: "20px",
        }}
      >
        {["Home", "About", "Universities", "Dubai Top Universities", "Contact"].map(
          (item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              onClick={closeMenu}
              style={{
                textDecoration: "none",
                color: "#0A2463",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {item}
            </Link>
          )
        )}
      </div>
    </header>
  );
}

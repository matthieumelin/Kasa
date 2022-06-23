import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo_white.png`}
          alt="Logo de Kasa"
          className="footer-content-logo"
        />
        <p className="footer-content-copyright">© 2022 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo_white.png`} alt="Logo de Kasa" className="footer-logo" />
        <p className="footer-copyright">© 2022 Kasa. All rights reserved</p>
    </footer>
  )
}

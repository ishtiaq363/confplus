'use client';
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function Navbar() {

  useEffect(() => {
    import("../../node_modules/bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              CONFPLUS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/schedule" className="nav-link" > Schedule</Link>
                </li>
                <li className="nav-item">
                  <Link href="/author" className="nav-link" > Submit Paper</Link>
                </li>

              </ul>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
        < />
  )
}

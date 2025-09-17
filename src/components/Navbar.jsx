import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Downloads', href: '/downloads' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            Data Gone
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar-nav">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={isActive(item.href) ? 'active' : ''}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isOpen ? 'show' : ''}`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={isActive(item.href) ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
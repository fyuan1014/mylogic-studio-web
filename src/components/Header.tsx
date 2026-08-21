import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const onProducts = location.pathname === '/products';
  const onLegal = location.pathname === '/privacy_policy' || location.pathname.includes('/legal') || location.pathname.includes('privacy-policy') || location.pathname.includes('terms-of-service');

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="brand" to="/" aria-label="MyLogix Studio home">
          <img className="brand-mark" src="/logo192.png" width="48" height="48" alt="" />
          <span className="brand-name"><span>MyLogix</span> Studio</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/#services">Services</Link>
          <Link to="/products" aria-current={onProducts ? 'page' : undefined}>Products</Link>
          <Link to="/#approach">Approach</Link>
          {onLegal && <Link to="/privacy_policy" aria-current="page">Legal</Link>}
        </nav>
        <div className="header-actions">
          <Link className="button button-small button-ink" to="/#contact">Discuss an Opportunity</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { PageLayout, NavList, Heading } from '@primer/react';
import logo from '../assets/logo.svg';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('');

  useEffect(() => {
    const getCurrentRoute = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;
      // For hash-based navigation, use the hash, otherwise use pathname
      return hash || pathname || '/';
    };

    // Set initial route
    setCurrentRoute(getCurrentRoute());

    // Listen for hash changes (for SPA navigation)
    const handleHashChange = () => {
      setCurrentRoute(getCurrentRoute());
    };

    // Listen for popstate events (for browser back/forward)
    const handlePopState = () => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <PageLayout>
      <PageLayout.Header>
        <div style={{ padding: '1rem', borderBottom: '1px solid #d1d9e0' }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src={logo} alt="Texalbuja Dev" style={{ height: '2rem', width: 'auto' }} />
            <Heading variant="medium">Tex Albuja</Heading>
          </a>
        </div>
      </PageLayout.Header>
      <PageLayout.Pane position="start" width="small">
        <div style={{ padding: '1rem' }}>
          <NavList>
            <NavList.Item href="#tld" aria-current={currentRoute === '#tld' ? 'page' : undefined}>
              Technical Leadership
            </NavList.Item>
            <NavList.Item href="#aws-academy" aria-current={currentRoute === '#aws-academy' ? 'page' : undefined}>
              AWS Academy
            </NavList.Item>
            <NavList.Item href="#about-me" aria-current={currentRoute === '#about-me' ? 'page' : undefined}>
              About Me
            </NavList.Item>
          </NavList>
        </div>
      </PageLayout.Pane>
      <PageLayout.Content>
        {children}
      </PageLayout.Content>
    </PageLayout>
  );
};

export default Layout;
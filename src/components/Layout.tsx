import React from 'react';
import { Header } from '@primer/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header>
        <Header.Item>
          <Header.Link href="/">
            <span>Texalbuja Dev</span>
          </Header.Link>
        </Header.Item>
        <Header.Item full>
          {/* Navigation items can go here */}
        </Header.Item>
        <Header.Item>
          <Header.Link href="#about">About</Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link href="#projects">Projects</Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link href="#contact">Contact</Header.Link>
        </Header.Item>
      </Header>
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
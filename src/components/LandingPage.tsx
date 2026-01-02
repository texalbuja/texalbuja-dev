import React from 'react';
import { Button, Heading } from '@primer/react';

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <Heading as="h1" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
        Welcome to Texalbuja Dev
      </Heading>
      <p style={{
        fontSize: '1.5rem',
        marginBottom: '2rem',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        Building innovative solutions with modern web technologies.
        Explore my projects and get in touch to collaborate.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size="large">
          View Projects
        </Button>
        <Button size="large">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
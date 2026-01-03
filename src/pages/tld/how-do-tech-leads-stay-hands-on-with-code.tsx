import React from 'react';
import { ShareIcon, MarkGithubIcon } from '@primer/octicons-react';

const BlogEntry: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px' }}>
      {/* Banner */}
      <div
        style={{
          height: '300px',
          backgroundColor: '#f6f8fa',
          backgroundImage: 'url(https://via.placeholder.com/800x300?text=Banner+Image)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      >
        <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Tech Leadership Insights</span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: '36px', marginBottom: '12px' }}>
        How Do Tech Leads Stay Hands-On with Code?
      </h1>

      {/* Author's Photo and Name */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <img
          src="https://github.com/octocat.png" // Replace with actual author's photo URL
          style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '12px' }}
          alt="Author's Photo"
        />
        <div>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Tex Albuja</span>
          <span style={{ color: '#586069' }}>Technical Leadership Expert</span>
        </div>
      </div>

      {/* Text */}
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        In the fast-paced world of technology, staying hands-on with code is crucial for tech leads. As leaders, we often find ourselves balancing strategic decisions with the need to remain technically proficient. This article explores practical strategies for tech leads to maintain coding skills while managing their responsibilities.
      </p>

      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        One effective approach is to dedicate time for personal projects or contribute to open-source initiatives. This not only keeps your coding skills sharp but also demonstrates your commitment to the craft. Additionally, participating in code reviews and pair programming sessions with your team can provide valuable opportunities to write and discuss code regularly.
      </p>

      {/* H2 Title */}
      <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>
        The Importance of Continuous Learning
      </h2>

      {/* Photo */}
      <img
        src="https://via.placeholder.com/600x400?text=Code+Collaboration"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          marginBottom: '12px',
        }}
        alt="Team collaborating on code"
      />

      {/* Photo's Quote */}
      <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#586069', marginBottom: '16px' }}>
        "The best way to predict the future is to create it." - Peter Drucker
      </p>

      {/* Share buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontWeight: 'bold' }}>Share this article:</span>
        <button style={{ padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', background: 'white', cursor: 'pointer' }}>
          <MarkGithubIcon size={16} />
          <span style={{ marginLeft: '4px' }}>GitHub</span>
        </button>
        <button style={{ padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', background: 'white', cursor: 'pointer' }}>
          <ShareIcon size={16} />
          <span style={{ marginLeft: '4px' }}>Share</span>
        </button>
      </div>
    </div>
  );
};

export default BlogEntry;

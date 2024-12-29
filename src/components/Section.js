import React from 'react';
import './component.css';

function Section({ title, content }) {
  return (
    <div className="about-section">
      <h2>{title}</h2>
      <div className="section-content">{content}</div>
    </div>
  );
}

export default Section;

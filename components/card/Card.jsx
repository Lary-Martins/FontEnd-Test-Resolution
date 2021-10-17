import React from 'react';
import { Panel } from 'rsuite';
import '../../styles/Card.css';

export default function Card({ content }) {
  return (
    <Panel className="turivius-card"
      shaded
      bordered
    >
      {content.map(c => 
       (<p key={c.title}>
         <b>{c.title}:</b> {c.content}
       </p>)
      )}
    </Panel>
)
}
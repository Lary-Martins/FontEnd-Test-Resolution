import React from 'react';
import { Panel } from 'rsuite';
import '../../styles/Card.css';

export default function Card({ card, entities }) {
  console.log({ card, entities })

  return (
    <Panel className="turivius-card"
      shaded
      bordered
    >
      {card.content.map(c => 
       (<p key={c.title}>
         <b>{c.title}:</b> {c.content}
       </p>)
      )}
    </Panel>
)
}
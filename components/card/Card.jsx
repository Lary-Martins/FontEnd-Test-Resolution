import React from 'react';
import { Panel } from 'rsuite';
import '../../styles/Card.css';

export default function Card({ card, entities }) {
  console.log({ card, entities })

  const delimitsNumberOfWords = (text) => {
    const arryOfWords = text.split(' ', 50);
    const delimetedText = arryOfWords.join(' ');

    return delimetedText;
  }

  return (
    <Panel className="turivius-card"
      shaded
      bordered
    >
      {card.content.map(c => 
       (<p key={c.title}>
         <b>{c.title}:</b>
         { `${delimitsNumberOfWords(c.content)} ...`}
       </p>)
      )}
    </Panel>
)
}
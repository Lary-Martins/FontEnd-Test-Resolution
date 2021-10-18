import React, { useState } from 'react';
import { Panel, Button, ButtonToolbar } from 'rsuite';
import '../../styles/Card.css';

export default function Card({ card, entities }) {
  console.log({ card, entities })
  const [showMore, setShowMore] = useState(false);

  const delimitsNumberOfWords = (text) => {
    const arryOfWords = text.split(' ', 50);
    const delimetedText = arryOfWords.join(' ');

    return delimetedText;
  }

  const handleClickShowMore = () => {
    setShowMore(!showMore);
  }

  return (
    <Panel
      className="turivius-card"
      shaded
      bordered
    >
      {card.content.map(c => 
       (<p key={c.title}>
         <b>{c.title}:</b>
         { showMore ? c.content : `${delimitsNumberOfWords(c.content)} ...`}
       </p>)
      )}
      <ButtonToolbar
       className="btn">
        <Button
          className="btn-show"
          appearance="ghost"
          onClick={ handleClickShowMore }
          >
            Ver mais
        </Button>
      </ButtonToolbar>
    </Panel>
)
}
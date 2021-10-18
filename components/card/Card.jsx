import React, { useState } from 'react';
import { Panel, Button, ButtonToolbar, Content } from 'rsuite';
import '../../styles/Card.css';

export default function Card({ card, entities }) {
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
    <Content
      className="turivius-card-container">

      <section className="turivius-card-header">
        <span className="initials">{ entities.initials }</span>
        <span className="name">
        {<a
          target="_blank"
          href={ card.url }
          rel="noreferrer"
          >{ entities.name }
        </a>}
        </span>
        <span className="datas">{`${card.data_pub} - ${card.data_jul}`}</span>
        <b className="title">{ card.nome }</b>
      </section>

      <section className="content" >
        {card.content.map(c => 
          (<p key={c.title}>
          <b>{c.title}: </b>
          { showMore ? c.content : `${delimitsNumberOfWords(c.content)} ...`}
        </p>)
      )}
      </section>

      </Content>

      <ButtonToolbar
       className="box-btns">
        <Button
          className="btn-show"
          appearance="ghost"
          color="orange"
          onClick={ handleClickShowMore }
        >
          Ver mais
        </Button>
      </ButtonToolbar>
    </Panel>
)
}

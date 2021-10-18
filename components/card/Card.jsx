import React, { useState } from 'react';
import { Panel, Button, ButtonToolbar, Content, IconButton } from 
'rsuite';
import { Icon } from '@rsuite/icons';
import { AiOutlineLike, AiTwotoneLike, AiOutlineCopy } from "react-icons/ai";
import '../../styles/Card.css';

export default function Card({ card, entities }) {
  const [showMore, setShowMore] = useState(false);
  const [like, setLike] = useState(false);

  const delimitsNumberOfWords = (text) => {
    const arryOfWords = text.split(' ', 50);
    const delimetedText = arryOfWords.join(' ');

    return delimetedText;
  }

  const handleClickShowMore = () => {
    setShowMore(!showMore);
  }

  const handleClickLike = () => {
    setLike(!like);
  };

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
      </section>

      <section className="content" >
        <b className="title">{ card.nome }</b>
        <div>
          {card.content.map(c => 
            (<p key={c.title}>
            <b>{c.title}: </b>
            { showMore ? c.content : `${delimitsNumberOfWords(c.content)} ...`}
          </p>)
          )}
        </div>
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
        <IconButton
          className="btn-like"
          onClick={ handleClickLike }
          icon={
          like ? <Icon as={ AiTwotoneLike } size="1.6rem"
            style={{ color: '#f37e00' }} /> :
          <Icon as={ AiOutlineLike }
            size="1.6rem" 
            style={{ color: '#f37e00' }} />
        }
        />
        <IconButton
          className="btn-copy"
          onClick={ handleClickCopy }
          icon={
            <Icon as={ AiOutlineCopy }
            size="1.6rem" 
            style={{ color: '#f37e00' }} /> }
        />
      </ButtonToolbar>
    </Panel>
)
}

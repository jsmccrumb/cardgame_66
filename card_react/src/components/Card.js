import React from 'react';
import cards from './cards/cards';

const card = ({suit, number}) => {
  return <img src={cards[`${suit}${number}`]} />
};

export default card;

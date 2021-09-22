import React, { Component, useState } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  console.log(cardList);
  return { cardList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};

const PuzzleCardsPage = (props) => {
  // let counter = 100;
  // const [cardList, setCardList] = useState([
  //   {
  //     id: 1,
  //     setup: 'Did you hear about the two silk worms in a race?',
  //     punchline: 'It ended in a tie',
  //   },
  //   {
  //     id: 2,
  //     setup: "What happens to a frog's car when it breaks down?",
  //     punchline: 'It gets toad away',
  //   },
  // ]);

  // const addNewCard = () => {
  //   setCardList((prev) => {
  //     console.log(prev);
  //     counter = prev.length + 1;
  //     const card = {
  //       id: counter,
  //       setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  //       punchline:
  //         'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     };
  //     return [...prev, card];
  //   });
  // };

  return (
    <div>
      {props.cardList.map((card) => {
        return (
          <Card key={card.id}>
            <div>Q: {card.setup}</div>
            <div>
              <strong>A: {card.punchline}</strong>
            </div>
          </Card>
        );
      })}
      <div>
        <Button
          onClick={() =>
            props.onClickAdd({
              setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              punchline: 'here we use dva',
            })
          }
        >
          {' '}
          添加卡片{' '}
        </Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCardsPage);

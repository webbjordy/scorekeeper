import React from 'react';
import FlipMove from 'react-flip-move';

import Player from './Player';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <Player key={player._id} player={player} />
  });
};

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
        return (
          <div className="item">
            <p className="item__message">Games are more fun with players. Try adding one!</p>
          </div>
        );
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player} />
    });
  }
};
  render() {
    return (
      <div>
        <FlipMove maintainContinerHeight={true}>
        {this.renderPlayers()}
      </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
players: React.PropTypes.array.isRequired

};

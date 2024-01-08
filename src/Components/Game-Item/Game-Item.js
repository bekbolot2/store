import React from "react";
import './Game-Item.css'
import GameCover from '../Game-Cover/Game-Cover'
import GameBuy from "../Game-Buy/Game-Buy";


const GameItem = ({ game }) => {
    return (
        <div className="game-item">
            <GameCover image={game.image}/>
            <div className="game-item__detalis">
                <div className="game-item__title">{game.title}</div>
                    <div className="game-item__genre">
                        {game.genres.map(genre => genre)}
                    </div>
            </div>
            <div className="gmae-item__buy">Купить</div>
            <GameBuy game={game}/>
        </div>
    );
}
export default GameItem;
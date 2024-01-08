import React from 'react'

const GameBuy = ({ game }) => {
  return (
    <div className='game=buy'>
        <span className='game-buy__price'>{game.price} сом.</span>
    </div>
  )
}

export default GameBuy;
import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main className='grid grid--home'>
      <div>
      <hgroup>
        <h1>Save Your Favorite Shows!</h1>
        <p>Keep track of your shows and anime with ease</p>
      </hgroup>
      <Link to='/auth'>
        <button><b>LET'S GO</b></button>
      </Link>  
      </div>

      <img src="https://picsum.photos/500" alt="" />
    </main>
  )
}

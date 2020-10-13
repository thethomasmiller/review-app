import React, { useState, useEffect } from 'react'
import axios from "axios"
import './Main.css'

export default function Main() {

  let [quote, updateQuote] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const data = await axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')

      updateQuote(data.data.quote)
    }
    callApi()
  }, [])

  return (
    <div className='page'>
      <div className='left-side'>
      <p className='title'>5star</p>
      <div className='inputs'>
        <input></input>
        <input></input>
      </div>
      </div>
      <div className='quote'>
        <p>{quote.quoteText}</p>
        <p>{quote.quoteAuthor}</p>
        <p>{quote.quoteGenre}</p>
      </div>
    </div>
  )
}

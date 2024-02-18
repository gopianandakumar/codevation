import React from 'react'

function Hero(props) {
    console.log("thissssssssssssssss")
    console.log(props.heroName)
    // if(props.heroName === 'joker'){
    //     throw new Error('Not a Hero!')
    // }
  return (
    <div>{props.heroName}</div>
  )
}

export default Hero 
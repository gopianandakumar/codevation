import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    const clsName = props.name ? 'primary':'secondary'
    console.log(clsName)
  return (
    <h1 className={`${clsName} font-xl`}>StyleSheet</h1>
  )
}

export default StyleSheet
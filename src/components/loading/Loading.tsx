'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import animationData from '../../../public/lottie/loading.json'

const Loading = () => {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 150, height: 150 }}
    />
  )
}

export default Loading

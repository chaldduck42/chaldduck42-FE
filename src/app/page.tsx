'use client'
import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    axios.get('http://localhost:9090/api/test').then((res) => console.log(res))
  }, [])
  return (
    <div>
      <a href="/input">내 사주 알아보기</a>
    </div>
  )
}

export default Home

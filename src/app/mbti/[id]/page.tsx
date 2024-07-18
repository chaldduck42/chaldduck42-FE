'use client'
import ProgressNavBar from '@/components/mbti/ProgressNavBar'
import SelectContent from '@/components/mbti/SelectContent'
import { QuestionList } from '@/types/mbti'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const params = useParams()
  const id = Number(params.id) - 1
  const [type, setType] = useState<string>()
  const [info, setInfo] = useState<QuestionList>()

  useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_BASE_URL}/mbti/questions`).then((res) => {
      const data = res?.data.data
      const category = Math.floor(id / 3)
      const question = Math.floor(id % 3)
      const types = data.mbti[category]?.type
      const infos = data.mbti[category]?.questions[question]
      // console.log(category, question)
      if (types && infos) {
        setType(types)
        setInfo(infos)
      }
    })
  }, [])
  return (
    <div className="w-full h-full bg-Beige1 relative ">
      <ProgressNavBar />
      {info && type && <SelectContent id={id + 1} info={info} type={type} />}
    </div>
  )
}

export default page

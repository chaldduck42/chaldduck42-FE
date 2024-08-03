import ProgressNavBar from '@/components/mbti/ProgressNavBar'
import SelectContent from '@/components/mbti/SelectContent'
import { QuestionList } from '@/types/mbti'
import axios from 'axios'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const id = params?.id
  const pageId = Number(id) - 1
  let info: QuestionList = {} as QuestionList
  let type: string = ''
  await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/mbti/questions`).then(
    (res) => {
      const data = res?.data
      // console.log(data)
      const category = Math.floor(pageId / 3)
      const question = Math.floor(pageId % 3)
      console.log(data)
      type = data[category]?.type
      info = data[category]?.questions[question]
      console.log(category, question)
    },
  )
  return (
    <div className="w-full h-full bg-Beige1 relative ">
      <ProgressNavBar />
      {info && type && (
        <SelectContent id={pageId + 1} info={info} type={type} />
      )}
    </div>
  )
}

export default page

import ProgressNavBar from '@/components/mbti/ProgressNavBar'
import SelectContent from '@/components/mbti/SelectContent'
import { QuestionList } from '@/types/mbti'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'

const page: GetServerSideProps = async (context) => {
  const { id } = context.params!
  const pageId = Number(id) - 1
  let info: QuestionList = {} as QuestionList
  let type: string = ''
  await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/mbti/questions`).then(
    (res) => {
      const data = res?.data.data
      const category = Math.floor(pageId / 3)
      const question = Math.floor(pageId % 3)
      type = data.mbti[category]?.type
      info = data.mbti[category]?.questions[question]
      // console.log(category, question)
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

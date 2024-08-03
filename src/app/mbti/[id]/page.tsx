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
  // const list: Questions[] = []
  await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/mbti/questions`).then(
    (res) => {
      const data = res?.data
      const category = Math.floor(pageId / 3)
      const question = Math.floor(pageId % 3)
      type = data[category]?.type
      info = data[category]?.questions[question]
      // data.forEach((datas: MbtiList) => {
      //   for (let i = 0; i < 3; i += 1) {
      //     list.push({ type: datas.type, question: datas.questions[i] })
      //   }
      // })
    },
  )
  // 0~11까지 랜덤으로 섞어서 배열 만드는 코드
  // const randomArray = Array.from({ length: 12 }, (_, i) => i).sort(
  //   () => Math.random() - 0.5,
  // )
  return (
    <div className="w-full h-full bg-Beige1 relative ">
      <ProgressNavBar />
      {info && type && <SelectContent id={pageId + 1} info={info} />}
    </div>
  )
}

export default page

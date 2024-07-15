'use client'
import ProgressNavBar from '@/components/mbti/ProgressNavBar'
import SelectContent from '@/components/mbti/SelectContent'
import { mbtiAtom } from '@/recoil/atom'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const page = () => {
  const params = useParams()
  const id = Number(params.id)
  const mbtiQuestion = useRecoilValue(mbtiAtom)
  const setMbtiQestion = useSetRecoilState(mbtiAtom)

  useEffect(() => {
    axios('').then((res) => {
      setMbtiQestion(res.data.mbti)
    })
  }, [mbtiQuestion])
  return (
    <div className="h-full">
      <ProgressNavBar />
      <SelectContent id={id} question={mbtiQuestion[id]} />
    </div>
  )
}

export default page

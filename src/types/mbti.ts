export interface IMbtiQuestionList {
  id: number
  question: string
  kind: string
}

export interface IMbtiAnswerList {
  ans_id: number
  ques_id: number
  answer: string
  score: number
}

export interface IMbtiPictureDescription {
  id: number
  mbti_1: string
  mbti_2: string
  image: string
  description: string
}

export interface MbtiList {
  type: string
  questions: QuestionList
}

export interface QuestionList {
  question: string
  answers: Answer[]
}

export interface Answer {
  option: string
  score: number
}

export interface MbtiList {
  type: string
  questions: QuestionList[]
}

export interface QuestionList {
  question: string
  answers: Answer[]
}

export interface Answer {
  option: string
  score: number
}

export interface Questions {
  type: string
  question: QuestionList
}

// [
//   { type: 'EI', questions: [ [Object], [Object], [Object] ] },
//   { type: 'SN', questions: [ [Object], [Object], [Object] ] },
//   { type: 'TF', questions: [ [Object], [Object], [Object] ] },
//   { type: 'JP', questions: [ [Object], [Object], [Object] ] }
// ]

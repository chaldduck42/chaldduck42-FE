import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/test', () => {
    return HttpResponse.json([
      {
        hello: 'hello',
      },
    ])
  }),

  http.get('/mbti/questions', () => {
    return HttpResponse.json({
      status: 200,
      message: '요청에 성공하였습니다.',
      data: {
        mbti: [
          {
            type: 'E/I',
            questions: [
              {
                question: '밖에 나가서 노는게 좋은가요?',
                answers: [
                  {
                    option: '좋다',
                    score: 1,
                  },
                  {
                    option: '싫다',
                    score: -1,
                  },
                ],
              },
              {
                question: '친구들을 자주 보는게 좋은가요?',
                answers: [
                  {
                    option: '좋다',
                    score: 1,
                  },
                  {
                    option: '싫다',
                    score: -1,
                  },
                ],
              },
              {
                question: '새로운 사람과 쉽게 친해지나요?',
                answers: [
                  {
                    option: '그렇다',
                    score: 1,
                  },
                  {
                    option: '아니다',
                    score: -1,
                  },
                ],
              },
            ],
          },
          {
            type: 'N/S',
            questions: [
              {
                question: '미래를 상상하며 계획하는 것을 좋아하나요?',
                answers: [
                  {
                    option: '좋다',
                    score: 1,
                  },
                  {
                    option: '싫다',
                    score: -1,
                  },
                ],
              },
              {
                question: '세부적인 것보다 큰 그림을 보는 편인가요?',
                answers: [
                  {
                    option: '그렇다',
                    score: 1,
                  },
                  {
                    option: '아니다',
                    score: -1,
                  },
                ],
              },
              {
                question: '직관적으로 행동하는 것을 선호하나요?',
                answers: [
                  {
                    option: '그렇다',
                    score: 1,
                  },
                  {
                    option: '아니다',
                    score: -1,
                  },
                ],
              },
            ],
          },
          {
            type: 'T/F',
            questions: [
              {
                question: '결정할 때 논리와 이성을 중시하나요?',
                answers: [
                  {
                    option: '그렇다',
                    score: 1,
                  },
                  {
                    option: '아니다',
                    score: -1,
                  },
                ],
              },
              {
                question: '감정보다 사실에 기반해 결정을 내리나요?',
                answers: [
                  {
                    option: '그렇다',
                    score: 1,
                  },
                  {
                    option: '아니다',
                    score: -1,
                  },
                ],
              },
              {
                question: '공감보다는 분석을 더 중요하게 생각하나요?',
                answers: [
                  {
                    option: '그렇다',
                    score: 1,
                  },
                  {
                    option: '아니다',
                    score: -1,
                  },
                ],
              },
            ],
          },
          {
            type: 'J/P',
            questions: [
              {
                question: '계획적으로 행동하는 것을 좋아하나요?',
                answers: [
                  {
                    option: '좋다',
                    score: 1,
                  },
                  {
                    option: '싫다',
                    score: -1,
                  },
                ],
              },
              {
                question: '일정을 미리 정해두는 것을 선호하나요?',
                answers: [
                  {
                    option: '그렇다',
                    score: 1,
                  },
                  {
                    option: '아니다',
                    score: -1,
                  },
                ],
              },
              {
                question: '마감 시간을 지키는 것을 중요하게 생각하나요?',
                answers: [
                  {
                    option: '그렇다',
                    score: 1,
                  },
                  {
                    option: '아니다',
                    score: -1,
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  }),
  http.post('/mbti/result', () => {
    return HttpResponse.json('전송이 완료되었습니다.')
  }),
]

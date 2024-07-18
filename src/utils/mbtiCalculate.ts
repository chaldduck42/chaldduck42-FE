const mbtiCaculate = () => {
  let EI = 0
  let SN = 0
  let TF = 0
  let JP = 0
  for (let i = 1; i < 13; i += 1) {
    if (i >= 1 && i <= 3) {
      const score = localStorage.getItem(String(i))
      EI += Number(score)
    } else if (i >= 4 && i <= 6) {
      const score = localStorage.getItem(String(i))
      SN += Number(score)
    } else if (i >= 7 && i <= 9) {
      const score = localStorage.getItem(String(i))
      TF += Number(score)
    } else if (i >= 10 && i <= 12) {
      const score = localStorage.getItem(String(i))
      JP += Number(score)
    }
  }

  return [
    { type: 'EI', score: EI },
    { type: 'SN', score: SN },
    { type: 'TF', score: TF },
    { type: 'JP', score: JP },
  ]
}

export default mbtiCaculate

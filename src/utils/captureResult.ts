import html2canvas from 'html2canvas'

export const captureResult = async () => {
  const element = document.getElementById('capture-area')

  if (!element) {
    return
  }
  const divs = element.querySelectorAll('div')

  // 모든 div 요소에 클래스 추가
  divs.forEach((div) => {
    div.classList.add('animation-appear-inView')
  })

  const canvas = await html2canvas(element)
  const imgData = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = imgData
  link.download = 'screenshot.png'
  link.click()
}

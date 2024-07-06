import { useInView } from 'react-intersection-observer'

const useObserver = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  const animationAppear = `animation-appear ${
    inView ? 'animation-appear-inView' : ''
  }`

  const animationLeft = `animation-left ${
    inView ? 'animation-left-inView' : ''
  }`
  const animationRight = `animation-right ${
    inView ? 'animation-right-inView' : ''
  }`

  const animationUp = `animation-up ${inView ? 'animation-up-inView' : ''}`

  return { ref, animationAppear, animationLeft, animationUp, animationRight }
}

export default useObserver

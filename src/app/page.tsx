import FirstRending from '@/components/rending/First_page'
import SecondRending from '@/components/rending/Second_page'

const Home = () => {
  return (
    <div className="  flex flex-col items-center justify-between ">
      <FirstRending />
      <SecondRending />
    </div>
  )
}

export default Home

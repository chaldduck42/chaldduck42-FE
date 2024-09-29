import MyResult from '../../components/result/MyResult'

export const generateMetadata = () => {
  return {
    title: '테스트타이틀',
    description: '테스트 내용',
    openGraph: {
      images: [
        {
          url: 'https://youngduck-devlog.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fposts%2Fcs-study%2Ffe-cover.png&w=1920&q=75',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
      ],
    },
  }
}

const Page = () => {
  return <MyResult />
}

export default Page

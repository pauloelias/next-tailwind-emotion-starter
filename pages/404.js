import Head from 'next/head'
import tw from 'twin.macro'

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

const Text = tw.p`
  text-xl text-gray-700
`

export default function Custom404() {
  return (
    <Wrapper>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Main>
        <Heading>Oops!</Heading>
        <Text>We can't find the page that you are looking for.</Text>
      </Main>
    </Wrapper>
  )
}

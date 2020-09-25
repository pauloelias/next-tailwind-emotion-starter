import Head from 'next/head'
import tw from 'twin.macro'

import githubLogo from '../assets/images/github.svg'

const logos = [
  {
    name: 'next.js',
    logo: require('../assets/images/nextjs.svg')
  },
  {
    name: 'tailwind',
    logo: require('../assets/images/tailwind.svg')
  },
  {
    name: 'emotion',
    logo: require('../assets/images/emotion.png')
  }
]

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

const Logos = tw.div`
  flex items-center justify-around mb-6 px-16
`

const Icon = tw.img`
  h-10
`

const Footer = tw.footer`
  mt-6 text-center
`

const SmallIcon = tw.img`
  inline-block h-6
`

export default function Index() {
  return (
    <Wrapper>
      <Head>
        <title>A Tailwind CSS ➕ Emotion Starter for Next.js</title>
      </Head>
      <Main>
        <Logos>
          {logos &&
            logos.map(({ name, logo }, index) => (
              <Icon src={logo} alt={`${name} Logo`} key={index} />
            ))}
        </Logos>
        <Heading>Hello, world!</Heading>
        <Text>
          Welcome to the Tailwind CSS{' '}
          <span role="img" aria-label="and">
            ➕
          </span>{' '}
          Emotion Starter for Next.js.
        </Text>
        <Footer>
          <a
            href="https://github.com/pauloelias/next-tailwind-emotion-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SmallIcon src={githubLogo} alt="Github Icon" />
          </a>
        </Footer>
      </Main>
    </Wrapper>
  )
}

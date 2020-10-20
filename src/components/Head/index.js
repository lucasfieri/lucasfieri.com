import NextHead from 'next/head'

const Head = ({ title }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />

  </NextHead>
)

export default Head

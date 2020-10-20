import NextHead from 'next/head'

const Head = ({ title }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;700;800;900&display=swap" rel="stylesheet" />
  </NextHead>
)

export default Head

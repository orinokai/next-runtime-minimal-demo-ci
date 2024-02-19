import Image from 'next/image'

const Show = () => (
  <div>
    <p>This page uses getStaticProps() to pre-fetch a TV</p>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  </div>
)

export default Show

const Show = ({ show, time }) => (
  <div>
    <img src="/vercel.svg" />
    <p>This page uses getStaticProps() to pre-fetch a TV show at {time}</p>
    <hr />
    <h1>Show {show}</h1>
  </div>
)

export async function getStaticProps(context) {
  const res = await fetch(`https://strangerthings-quotes.vercel.app/api/quotes`)
  const data = await res.json()

  return {
    props: {
      show: data[0].quote,
      time: new Date().toISOString(),
    },
    revalidate: 20,
  }
}

export default Show

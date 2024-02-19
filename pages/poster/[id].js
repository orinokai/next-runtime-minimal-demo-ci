const Show = ({ show, time }) => (
  <div>
    <img src="/vercel.svg" />
    <p>This page uses getStaticProps() to pre-fetch a TV show at {time}</p>
    <hr />
    <h1>Show #{show.id}</h1>
    <p>{show.name}</p>
  </div>
)

export async function getStaticProps({ params }) {
  const { id } = params

  const res = await fetch(`https://tvproxy.netlify.app/shows/${Number(id)}`)
  const data = await res.json()

  return {
    props: {
      show: data,
      time: new Date().toISOString(),
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '1' }, locale: 'fr' },
      { params: { id: '2' } },
    ],
    fallback: false,
  }
}

export default Show

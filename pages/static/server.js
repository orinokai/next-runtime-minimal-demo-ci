const Show = ({ show, time }) => {
  return (
    <div>
      <img src="/vercel.svg" />
      <p>This page uses getStaticProps() to pre-fetch a TV show at {time}</p>
      <hr />
      <h1>Show #{show.id}</h1>
      <p>{show.name}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://tvproxy.netlify.app/shows/71`)
  const data = await res.json()

  return {
    props: {
      show: data,
      time: new Date().toISOString(),
    },
  }
}

export default Show

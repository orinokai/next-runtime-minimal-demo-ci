async function getData() {
  const res = await fetch(`https://strangerthings-quotes.vercel.app/api/quotes`, {
    next: { revalidate: 300 },
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <h1>Hello, Statically Rendered Server Component</h1>
      <p>Revalidating every 20 seconds</p>
      <dl>
        <dt>Quote</dt>
        <dd>{data[0].quote}</dd>
        <dt>Time</dt>
        <dd>{Date.now()}</dd>
      </dl>
    </>
  );
}

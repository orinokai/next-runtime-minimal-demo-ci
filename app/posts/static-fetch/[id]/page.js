export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export const dynamicParams = false;

async function getData(params) {
  const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
  return res.json();
}

export default async function Page({ params }) {
  const data = await getData(params);

  return (
    <>
      <h1>Hello, Statically Rendered Server Component</h1>
      <p>Paths /1 and /2 prerendered; other paths not found</p>
      <dl>
        <dt>Show</dt>
        <dd>{data.name}</dd>
        <dt>Param</dt>
        <dd>{params.id}</dd>
        <dt>Time</dt>
        <dd>{Date.now()}</dd>
      </dl>
    </>
  );
}

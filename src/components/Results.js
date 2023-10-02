export default function Results({ data }) {
  return (
    <div>{data && data.map((i) => <h1 key={i.id}>{i.original_title}</h1>)}</div>
  );
}

export default function ServiceDetailPage({ params }) {
  const id = params.id;
  return (
    <div>
      <h1>ServiceDetailPage</h1>
      <p>Id: {id}</p>
    </div>
  );
}

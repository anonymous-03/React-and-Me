
export default function Panel({ title,children }) {
  return (
    <div className="panel">
        <h1>{title}</h1>
      <div className="panel-content">
        {children}
      </div>
    </div>
  );
}
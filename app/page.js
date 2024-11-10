// app/page.js
export default function Page({ title, children }) {
  return (
    <div className="page">
      {title && <h1>{title}</h1>}
      <div className="page-content">{children}</div>
    </div>
  );
}

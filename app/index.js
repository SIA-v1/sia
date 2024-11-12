// app/page.js
// page.js

export default function Page({ title = "Welcome to Robo App! Choose and interact with your robo avatar.", children }) {
  const [mainTitle, subtitle] = title.split("! ");

  return (
    <div className="page">
      {mainTitle && <h1>{mainTitle}!</h1>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <div className="page-content">{children}</div>
    </div>
  );
}


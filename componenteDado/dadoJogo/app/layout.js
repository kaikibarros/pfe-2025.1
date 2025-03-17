// app/layout.js
import "./styles/global.css";

export default function Layout({ children }) {
  return (
  <html>
    <body> 
      <div className="layout">
      <header>
        <h1>Jogo do Dado</h1>
      </header>
      <main>{children}</main>
    </div>

    </body>
 
  </html>
   
  );
}

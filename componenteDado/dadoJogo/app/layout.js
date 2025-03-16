// app/layout.js
import "./styles/global.css";

export default function Layout({ children }) {
  return (
  <html>
    <body> 
      <div className="layout">
      <header>
        <h1>Bem-vindo ao Jogo do Dado</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 - Kaiki Barros - Direitos Reservados</p>
      </footer>
    </div>

    </body>
 
  </html>
   
  );
}

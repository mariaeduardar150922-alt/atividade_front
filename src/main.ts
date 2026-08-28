import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <main class="container">
      <h1>Atividade CI/CD</h1>
      <p>
        Aplicação front-end desenvolvida com
        <strong>TypeScript</strong>, <strong>Vite</strong> e <strong>Vitest</strong>.
      </p>

      <section class="card">
        <h2>Pipeline de CI/CD</h2>

        <ol>
          <li>Instalação das dependências</li>
          <li>Execução dos testes</li>
          <li>Build da aplicação</li>
          <li>Deploy no GitHub Pages</li>
        </ol>
      </section>
    </main>
  `
}
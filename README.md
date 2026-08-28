# Atividade CI/CD

Aplicação front-end desenvolvida para a atividade de configuração de um pipeline de **CI/CD utilizando GitHub Actions**.

## Tecnologias

- TypeScript
- Vite
- Vitest

## Scripts disponíveis

Instalar as dependências:

```bash
npm install
```

Executar a aplicação em ambiente de desenvolvimento:

```bash
npm run dev
```

Executar os testes:

```bash
npm test run
```

Gerar o build da aplicação:

```bash
npm run build
```

## Estrutura do projeto

```text
src/
├── main.ts
├── style.css
└── sum.ts

tests/
└── sum.test.ts
```

Os arquivos da pasta `src/` contêm o código da aplicação, enquanto a pasta `tests/` contém os testes automatizados executados pelo Vitest.

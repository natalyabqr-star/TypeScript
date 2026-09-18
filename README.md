# 🚀 Setup de Projeto TypeScript — Guia Passo a Passo

Este README documenta, de forma didática, todo o processo de configuração de um projeto Node.js com TypeScript, desde a criação da pasta até a configuração de testes automatizados e validação de dados.

---

## 📁 1. Criando o repositório

Primeiro, criamos uma pasta local já integrada com um repositório no GitHub. Essa pasta será a raiz de todo o nosso projeto.

---

## 📦 2. Inicializando o projeto com npm

Antes de tudo, verificamos se o `npm` está instalado corretamente:

```bash
npm -v
```

Em seguida, inicializamos o projeto:

```bash
npm init -y
```

> 💡 **O que isso faz?** Esse comando cria o arquivo `package.json`, que funciona como a **certidão de nascimento** do projeto — ele guarda o nome, a versão, as dependências e os scripts (comandos atalho) que vamos usar ao longo do desenvolvimento.

---

## 🔷 3. Instalando o TypeScript

```bash
npm install typescript -D
```

> 💡 O `-D` (ou `--save-dev`) instala o TypeScript como uma **dependência de desenvolvimento** — ou seja, ela só é necessária enquanto estamos programando, não quando a aplicação já está pronta e rodando em produção.

O TypeScript é o que nos permite escrever código com **tipagem estática**, adicionando arquivos `.ts` ao projeto.

### Configurando o `tsconfig.json`

Depois de instalado, geramos o arquivo de configuração:

```bash
npx tsc --init
```

Dentro dele, ajustamos o `target` para:

```json
"target": "es2020"
```

> 💡 Isso define para qual versão do JavaScript nosso código TypeScript será convertido. Usar `es2020` garante que o projeto tenha acesso a recursos mais modernos da linguagem.

---

## 🗂️ 4. Criando a pasta `src`

Criamos uma pasta chamada **`src`** (de *source*, "código-fonte" em inglês). É nela que ficarão todos os arquivos do nosso projeto.

---

## ⚡ 5. Instalando o `tsx` (executar TypeScript diretamente)

```bash
npm i tsx -D
```

> 💡 O `tsx` é uma ferramenta que usa o **esbuild** por baixo dos panos para executar arquivos `.ts` diretamente, sem precisarmos compilar manualmente para `.js` toda vez que formos testar o código.

### Criando o script de início

No `package.json`, dentro do bloco `"scripts"`, substituímos a linha padrão `"test"` (que vem por padrão do `npm init`) por:

```json
"scripts": {
  "start": "tsx src/server.ts"
}
```

Assim, ao rodar `npm start`, o Node executa nosso servidor.

### Modo de desenvolvimento (com atualização automática)

Para visualizar as alterações no código **em tempo real**, sem precisar reiniciar manualmente, adicionamos:

```json
"scripts": {
  "start": "tsx src/server.ts",
  "start:dev": "tsx watch src/server.ts"
}
```

E executamos com:

```bash
npm run start:dev
```

> 💡 O `watch` fica "observando" o arquivo — toda vez que salvamos uma alteração, ele reinicia o servidor automaticamente.

---

## 🏗️ 6. Preparando o projeto para produção com `tsup`

```bash
npm i tsup -D
```

> 💡 O `tsup` cuida do processo de **build** da aplicação. Quando colocamos o projeto em produção, precisamos que ele rode em **JavaScript puro**, e não em TypeScript — afinal, o Node.js não executa `.ts` nativamente. O `tsup` é responsável por converter (compilar) nosso código TypeScript em JavaScript pronto para produção.

Adicionamos mais uma linha ao `scripts`:

```json
"scripts": {
  "start": "tsx src/server.ts",
  "start:dev": "tsx watch src/server.ts",
  "build": "tsup src"
}
```

Ao rodar:

```bash
npm run build
```

Uma pasta **`dist`** é criada automaticamente, contendo o arquivo JavaScript já compilado — pronto para ser executado em produção.

---

## ✅ 7. Testes automatizados com `vitest`

```bash
npm i vitest -D
```

> 💡 O `vitest` nos ajuda a escrever **testes automatizados**, com suporte nativo para código escrito em TypeScript. Testes automatizados garantem que o código continua funcionando como esperado mesmo depois de alterações futuras.

---

## 🛡️ 8. Validação de dados com `zod`

```bash
npm i zod -D
```

> 💡 O `zod` é uma biblioteca de **validação e transformação de dados**, com uma integração muito próxima ao TypeScript — ele consegue, inclusive, gerar automaticamente um *type* a partir do schema de validação que criamos.

---

## 📋 Resumo dos comandos

| Etapa | Comando |
|---|---|
| Verificar npm | `npm -v` |
| Iniciar projeto | `npm init -y` |
| Instalar TypeScript | `npm install typescript -D` |
| Gerar tsconfig | `npx tsc --init` |
| Instalar tsx | `npm i tsx -D` |
| Rodar em desenvolvimento | `npm run start:dev` |
| Instalar tsup | `npm i tsup -D` |
| Gerar build de produção | `npm run build` |
| Instalar vitest | `npm i vitest -D` |
| Instalar zod | `npm i zod -D` |

---

## 📦 `package.json` final (trecho de scripts)

```json
"scripts": {
  "start": "tsx src/server.ts",
  "start:dev": "tsx watch src/server.ts",
  "build": "tsup src"
}
```

---

*Documentação criada para fins de estudo e organização do projeto.*

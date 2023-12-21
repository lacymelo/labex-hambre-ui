<div align="center">
  <h1>
    🤖 Design System Hambre
  </h1>

  > Bem-vindo ao repositório de código-fonte do Design System do Hambre Delivery, neste projeto estão documentados os componentes React e ferramentas que ajudaram desde a implementação do Design System até a publicação, como Storybook, changesets e muito mais.
</div>

---

##  :rocket:  Componentes

---

- [X] Avatar
- [X] Box
- [X] Button
- [X] Checkbox
- [X] Heading
- [X] Loading
- [X] MessageIcon
- [X] MultiStep
- [X] Radio
- [X] Select
- [X] Switch
- [X] Text
- [X] TextArea
- [X] TextInput
- [X] Transition

## :rocket: Se você quiser criar o seu próprio design system.
> Siga esse conjunto de configurações

## 🔖 Configurações do Pacote de Tokens
✨ crie os seguintes diretórios `packages/tokens`, no diretório tokens, inicialize o projeto com o comando
```bash
npm init -y
```
🛠️ No diretório `tokens`, instale o typescript
```bash
npm i -D typescript
```
🛠️ crie no pacote de `tokens` o arquivo de configuração tsconfig
```bash
npx tsc --init
```
🛠️ Instale no pacote de `tokens` o tsup
```bash
npm i tsup -D
```
🛠️ No diretório `tokens`, configure o script build no arquivo `package.json`
```bash
"scripts": {
  "build": "tsup src/index.ts --format esm, cjs --dts",
  "dev": "tsup src/index.ts --format esm, cjs --dts --watch",
  "lint": "eslint src/**/*.ts* --fix"
},
```
✨ Faça a build do pacote de `tokens` executando o comando.
```bash
npm run build
```
## 🔖 Configurações do Pacote React
🛠️ No diretório packages crie um diretório react `packages/react`

✨ No diretório react inicialize o projeto com o comando
```bash
npm init -y
```
🛠️ instalar no pacote `react` o typescript
```bash
npm i -D typescript
```
🛠️ instale a lib tsup
```bash
npm i tsup -D
```
🛠️ Configure os scripts em `package.json`
```bash
"scripts": {
  "build": "tsup src/index.tsx --format esm, cjs --dts",
  "dev": "tsup src/index.tsx --format esm, cjs --dts --watch",
  "lint": "eslint src/**/*.ts* --fix"
},
```
✨ Crie um diretório src e dentro dele um arquivo index.ts. `react/src/index.ts`

✨ escreva nele este comando para teste.
```bash
console.log(ok)
```
✨ no diretório `react`, execute o comando de build
```bash
npm run build
```
✨ Volte para a raiz do projeto e execute
```bash
npm init -y
```
🛠️ No diretório raiz configure o `package.json`, adicionando essa configuração.
```bash
{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```
✨ delete a pasta `node_modules` e o arquivo `package-lock.json` dos diretórios `tokens` e `react`.
🛠️ No diretório `react/package.json` adicione a seguinte dependência.
```bash
"devDependencies": {
  "@labex-hambre-ui/tokens": "*",
}
```
✨ Volte na raiz do projeto e execute.
```bash
npm i
```
🛠️ Nos arquivos `package.json` dos diretórios `tokens` e `react`, adicione as seguintes configurações
```bash
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
}
```
✨ Volte na raiz do projeto e execute.
```bash
npm i
```
✨ No diretório tokens, execute o comando de build
```bash
npm run build
```

## 🔖 Configurações do ts-config
✨ Crie dentro dentro do diretório packages um diretório `packages/ts-config` ts-config.

✨ Dentro do diretório `ts-config`, execute o comando
```bash
npm init -y
```
🛠️ No `package.json` gerado, adicione a seguinte configuração
```bash
{
  "name": "@labex-hambre-ui/ts-config",
  "version": "1.0.0",
  "license": "MIT",
  "private": true
}
```
✨ Crie um arquivo de configuração `base.json`

🛠️ Escreva nesse arquivo as seguintes configurações:
```bash
{
  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "node",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true
  },
  "exclude": ["node_modules"]
}
```
✨ Crie um arquivo de configuração `react.json`

🛠️ Escreva nesse arquivo as seguintes configurações:
```bash
{
    "extends": "./base.json",
    "compilerOptions": {
        "jsx": "react-jsx",
        "lib": ["dom", "ES2015"],
        "module": "ESNext",
        "target": "es6"
    } 
}
```
🛠️ Nos arquivos `package.json` dos diretórios `tokens` e `react`, adicione as seguintes configurações
```bash
"devDependencies": {
  "@labex-hambre-ui/ts-config": "*",
}
```
✨ Volte na raiz do projeto e execute.
```bash
npm i
```
🛠️ No diretório `tokens`, entre em `tsconfig.json` e adicione essa configuração.
```bash
{
  "extends": "@labex-hambre-ui/ts-config/base.json",
  "include": [
    "src"
  ],
}
```
🛠️ No diretório `react`, entre em `tsconfig.json` e adicione essa configuração.
```bash
{
  "extends": "@labex-hambre-ui/ts-config/react.json",
  "include": [
    "src"
  ],
}
```
✨ Volte na raiz do projeto e execute.
```bash
npm i
```
✨ Nos pacotes de `tokens` e `react` execute o comando, de build para cada um.
```bash
npm run build
```
## 🔖 Configurações do eslint-config
✨ Crie dentro dentro do diretório `packages` um diretório eslint-config `packages/eslint-config`.

✨ inicialize o diretório `eslint-config`, executando o comando.
```bash
npm init -y
```
🛠️ No `package.json` gerado adicione essa configuração.
```bash
{
  "name": "@labex-hambre-ui/eslint-config",
  "version": "3.0.0",
  "license": "MIT",
  "private": true,
  "main": "index.js"
}
```
🛠️ Faça a instalação da lib eslint, executando o comando.
```bash
npm i -D eslint @rocketseat/eslint-config
```
🛠️ crie um arquivo `index.js`, e adicione a seguinte configuração.
```bash
module.exports = {
    extends: ['@rocketseat/eslint-config/react']
}
```
🛠️ Nos `package.json` dos diretórios react e tokens, adicione essa configuração
```bash
"devDependencies": {
  "@labex-hambre-ui/eslint-config": "*",
}
```
🛠️ Nos diretórios `react` e `tokens` crie um arquivo e adicione a seguinte configuração.
```bash
{
    "extends": "@labex-hambre-ui/eslint-config"
}
```
🛠️ Entrando nos diretórios `tokens` e `react`, execute o comando.
```bash
npm run lint
```
🛠️ Entre do diretório `react` instale as libs, react e react-dom.
```bash
npm i -D @types/react @types/react-dom
```
🛠️ No diretório `react` instale a lib stitches de estilização.
```bash
npm i @stitches/react
```
✨ No diretório `react` crie um diretório styles, estando nele, crie um arquivo index.ts. `react/styles.index.ts`

🛠️ No arquivo `index.ts` adicione estas configurações.
```bash
import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from '@labex-hambre-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },

    theme: {
        colors: colors,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        fonts: fonts,
        lineHeights: lineHeights,
        radii: radii,
        space: space
    }
})
```
## 🔖 Configurações do Storybook
✨ Dentro do diretório packages crie, um diretório docs. `packages/docs` 

✨ inicialize o pacote docs
```bash
npm init -y
```
🛠️ Em `docs` instale a lib storybook.
```bash
npx storybook@latest init
```
✨ obs.: Na instalação, responda yes para o projeto em `react`, e yes para a builder em `webpack 5`

🛠️ instale na raiz do diretório `docs`, as libs react e react-dom
```bash
npm i react react-dom
```
✨ Para validar todas as configurações feitas, e organizar o diretório de cache do vite, prossiga com os seguintes passos, apague a pasta `node_modeles` no diretório `docs` e do `diretório raiz` do projeto, por fim, execute o comando a seguir para validar tudo.
```bash
npm i
```
✨ Para executar o storybook, no diretório docs organize a configuração do `package.json` configurando esses comandos.
✨ altere o nome do projeto para 
```bash
"name": "@labex-hambre-ui/docs",
```
🛠️ Configure os scripts de execução.
```bash
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "storybook dev -p 6006",
  "build": "storybook build"
},
```
🛠️ Altere a licença para 
```bash
"license": "MIT",
```
✨ Estando no diretório `docs`, execute o storybook, com o comando a seguir.
```bash
npm run dev
```
✨ Para criar seus próprios stories, apague a pasta `stories` que vem por padrão, crie um diretório src, e dentro crie o diretório stories. `packages/docs/src/stories`

✨ Dentro de `.storybook` que vem por padrão, tem um arquivo main.js. `packages/docs/.storybook/main.js`

🛠️ Neste arquivo adicione a seguinte, configuração.
```bash
stories: [
  "../src/stories/**/*.mdx",
  "../src/stories/**/*.stories.tsx",
],
```
🛠️ No arquivo `package.json` de `docs`, adicione essas dependências.
```bash
"dependencies": {
  "@labex-hambre-ui/react": "*",
  "@labex-hambre-ui/tokens": "*",
  "@labex-hambre-ui/eslint-config": "*"
}
```
✨ Em docs, escute esse comando para fazer a referência desses pacotes internos.
```bash
npm i
```
🛠️ Na raiz de docs, um arquivo `eslintrc.json`, com a seguinte configuração.
```bash
{
    "extends": "@labex-hambre-ui/eslint-config"
}
```
✨ Entre no diretório react/src/components
```bash
react/src/components
```
✨ Crie um components, componente inicial, text.ts
```bash
react/src/components/Text.ts
```
🛠️ Este é um exemplo, que pode ser adicionando no arquivo `Text.ts`
```bash
import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Text = styled('p', {
    fontFamily: '$default',
    lineHeight: '$base',
    margin: 0,
    color: '$gray600',
    zIndex: '1',

    variants: {
        size: {
            xxs: { fontSize: '$xxs' },
            xs: { fontSize: '$xs' },
            sm: { fontSize: '$sm' },
            md: { fontSize: '$md' },
            lg: { fontSize: '$lg' },
            xl: { fontSize: '$xl' },
            '2xl': { fontSize: '$2xl' },
            '4xl': { fontSize: '$4xl' },
            '5xl': { fontSize: '$5xl' },
            '6xl': { fontSize: '$6xl' },
            '7xl': { fontSize: '$7xl' },
            '8xl': { fontSize: '$8xl' },
            '9xl': { fontSize: '$9xl' },
        }
    },

    defaultVariants: {
        size: 'md'
    }
})

export interface TextProps extends ComponentProps<typeof Text> {
    as?: ElementType
}

Text.displayName = 'Text'
```
✨ depois no index.tsx localizado na raiz de src `react/src/index.tsx`, adicione Faça a importação do componente Text.ts, desse jeito.
```bash
export * from './components/Text'
```
✨ Abra um segunda aba no terminal, entre no diretório `react` e execute o comando
```bash
npm run dev
```
✨ Isso vai gerar a build e observar qualquer alteração no pacote react
🛠️ Opcional: para configurar o tema dark entre .storybook crie um arquivo `manager.js`, e adicione essa configuração.
```bash
import {
    addons
} from '@storybook/addons'
import {
    themes
} from '@storybook/theming'

addons.setConfig({
    theme: themes.dark
})
```
🛠️ Para configurar as fontes do designer system em .storybook crie um arquivo `preview-head.html`, e adicione as fontes que você quiser, como no exemplo abaixo.
```bash
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

<script>
    window.global = window;
</script>
```
✨ No diretório docs/src crie um diretório pages. `docs/src/pages`

🛠️ Em `docs/.storybook/main.js`, altere essa configuração.
```bash
stories: [
  "../src/pages/**/*.mdx",
  "../src/stories/**/*.stories.tsx",
],
```
🛠️ Agora dentro de pages crie um arquivo `home.stories.mdx` `docs/src/pages/home.stories.mdx`, e configure como você quiser.
```bash
import { Meta } from '@storybook/addon-docs'

<Meta title="Home" />

# Labex Hambre UI

Design System do Hambre.
```
🛠️ Em `.storybook/preview.js`, adicione essa configuração.
```bash
import {
  themes
} from '@storybook/theming'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
```
✨ Em docs/src crie um diretório components. `docs/src/components`

🛠️ ATENÇÃO.: `Nos arquivos .tsx` em `docs`, é necessário adicionar a importação nativa react
```bash
import React from 'react'
```
✨ Em docs/src/pages crie um diretório de tokens. `docs/src/pages/tokens`

✨ Neste diretório estarão configurados os tokens do projeto
🛠️ instale essa lib que permite fazer cálculos com cores em `packages/docs`.
```bash
npm i polished
```
🛠️ Para não dar erro no html, em `docs` adicione no `package.json`, essa configuração
```bash
"dependencies": {
  "@labex-hambre-ui/ts-config": "*",
}
```
✨ Em seguida execute em docs.
```bash
npm i
```
🛠️  Em packages/docs crie o arquivo `tsconfig.json` `packages/docs/tsconfig.json`, e adicione essa configuração.
```bash
{
  "extends": "@labex-hambre-ui/ts-config/base.json",
  "compilerOptions": {
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}
```
✨ docs/src crie um diretório styles, `docs/tokens/styles`

✨ Neste estarão as configurações de estilo css, crie um arquivo `tokens-grid.css`
```bash
docs/tokens/styles/tokens-grid.css
```
🛠️  Em `docs/.storybook/main.js`, altere essa configuração.
```bash
stories: [
  "../src/pages/**/*.stories.mdx",
],
```
🛠️  crie o `.gitignore`, para ignorar a pasta `node_module`s, no diretório raiz do projeto e no diretório docs

## 🔖 Configurações do Turbo Repo
🛠️  O turbo repo é uma biblioteca que Permite executar os scripts em todos os pacotes ao mesmo tempo, acelerando o build, instale ela no diretório raiz, usando o comando.
```bash
npm i turbo@latest -D
```
✨ Obs: usando o turbo repo, não é necessário executar de forma separada o pacote `react` e `docs`
🛠️ no diretório raiz crie um arquivo `turbo.json`, e adicione a seguinte configuração.
```bash
{
    "$schema": "https://turborepo.org/schema.json",
    "pipeline": {
        "dev": {
            "cache": false
        },
        "build": {
            "outputs": [
                "dist/**",
                "storybook-static/**"
            ],
            "dependsOn": [
                "^build"
            ]
        }
    }
}
```
🛠️  No `package.json` da raiz do projeto adicione esses scripts.
```bash
"scripts": {
  "dev": "turbo run dev --parallel",
  "build": "turbo run build",
  "changeset": "changeset",
  "version-packages": "changeset version",
  "release": "turbo run build --filter=!docs && changeset publish"
},
```
✨ Em seguida na raiz do projeto, para executar todos os scripts, execute o comando.
```bash
npm run dev
```
✨ Com as principais configurações feitas, você pode criar os componentes em `react`, e em `docs`.

## 🔖 Configurações de componentes
🛠️  Instale a biblioteca de ícones nos diretórios `react` e `docs`
```bash
npm i phosphor-react
```
🛠️  Para manipular componente de avatar, dentro do diretório `react` instale o componente avatar de radix-ui.
```bash
npm i @radix-ui/react-avatar
```
🛠️  Instale a lib checkbox do radix em `packages/react`.
```bash
npm i @radix-ui/react-checkbox
```
🛠️  Instale a lib react-select do radix em `packages/react`
```bash
npm i @radix-ui/react-select
```
🛠️  Instale a lib react-radio-group do radix em `packages/react`
```bash
npm i @radix-ui/react-radio-group
```
🛠️ Instale a lib react-switch do radix em `packages/react`
```bash
npm i @radix-ui/react-switch
```
🛠️ instale a lib de acessibilidade addon-a11y do storybook em `packages/docs`
```bash
npm i @storybook/addon-a11y
```
🛠️ Para ver o código dos componentes instale a lib addon-docs do storybook em `packages/docs`
```bash
npm i @storybook/addon-docs
```
## 🔖 Publicação do Storybook no GitHub
🛠️ Instale a lib storybook-deployer no diretório `packages/docs`, para fazer o deploy do designer system
```bash
npm i @storybook/storybook-deployer --save-dev
```
🛠️  No diretório docs, acesse o `package.json` e adicione em script esta configuração.
```bash
"scripts": {
  "deploy-storybook": "storybook-to-ghpages",
},
```
✨ Obs: é importante que o projeto esteja no github
✨ Na raiz do projeto, crie os diretórios `.github/workflows`

✨ Crie o arquivo deploy-docs.yml `.github/workflows/deploy-docs.yml`

🛠️ No arquivo escreva as seguintes configurações, e esteja atento as versões dos serviços utilizados.
```bash
name: Deploy docs

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js # setup do node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          cache-dependency-path: '**/package-lock.json'

      - run: npm ci # para instalar somente a s dependências de produção

      - run: npm run build # executa a build que foi configurada no turbo

      - name: Deploy storybook
        working-directory: ./packages/docs
        run: npm run deploy-storybook -- --ci --existing-output-dir=storybook-static
        env:
          GH_TOKEN: ${{ github.actor }}:${{ secrets.GITHUB_TOKEN }}
```
✨ No seu github, entre em `settings/actions/general`

✨ Encontre o tópico `Workflow permissions`, e marque essa permissão
- [X] Read and write permissions

✨ salve e faça o push do seu projeto
✨ Se tudo deu certo, no repositório do projeto no github, entre neste caminho. `settings/pages/`

✨ No GitHub Pages altere branch selecione a branch `gh-pages` e salve.

✨ faça o push da aplicação novamente, se tudo deu certo, no actions do projeto, vai haver um grafo, com um nó raiz build, seguidos de dois nós filhos, o segundo nó filho é o deploy do docs, com o link de acesso online do storybook.

## 🔖 Publicação dos Tokens e React Components no NPM
🛠️  Para controle de versão instale a lib changesets, na raiz do projeto.
```bash
npm i @changesets/cli -D
```
🛠️  Depois de instalar, execute o changesets
```bash
npx changeset init
```
✨  Acesse o arquivo `config.json`
```bash
.changeset/config.json
```
🛠️  Altere no arquivo essas configurações
```bash
{
  "access": "public",
  "ignore": ["@labex-hambre-ui/docs"]
}
```
🛠️  no `package.json` na raiz do projeto, adicione esse scripts.
```bash
"scripts": {
  "changeset": "changeset",
  "version-packages": "changeset version",
    "release": "turbo run build --filter=!docs && changeset publish"
}
```
✨  Se não tiver um conta no npm, crie uma conta, caso tenha faça login executado no terminal.
```bash
npm login
```
✨  Entre no painel online do npm e crie uma organização, no caso deste projeto o nome é.
```bash
labex-hambre-ui
```
🛠️  Quando houver alterações no repositório, você pode mapear usando o seguinte comando.
```bash
npm run changeset
```
🛠️  Agora para realizar o controle versão execute o seguinte comando.
```bash
npm run version-packages
```
🛠️  Depois de mapear as versões, basta publicar os pacotes no npm usando o comando.
```bash
npm run release
```
## 🔖 Gerando Token na Vercel e NPM
✨  Para acelerar o processo de deploy no git hub vamos usar o CI/CD da vercel, para isso é necessário criar um `access token da vercel`, para isso entre na sua conta da vercel, e siga os seguintes passos, `Settings/Tokens/`.

✨  Estando na aba Tokens crie o token de acesso, crie o nome conforme o seu projeto, para este projeto o nome será.
```bash
Labex Hambre UI CI/CD
```
✨  Selecione o SCOPE, e a data de expiração, selecione que o token não expira, clique no botão create.
✨  O token é exibido na tela, após isso basta copiar, ele não será exibido novamente então não perca.
✨  Agora entre no seu repositório no github, seguindo este fluxo, `Settings/Secrets and variables/actions`

✨  Cria uma chave secreta, onde o nome será.
```bash
VERCEL_TOKEN
```
✨  no campo onde está Secret, cole a chave que você criou e salve.
✨  Agora entre na sua conta no `NPM` crie o token de acesso, seguindo o fluxo `packages/Access Tokens` 

✨  Clique no botão `Generate New Token`.

✨  Estando na aba Tokens crie o token de acesso, crie o nome conforme o seu projeto, para este projeto o nome será.
```bash
Labex Hambre UI CI/CD
```
✨  Selecione a opção. 
- [X] Automation

✨  Agora clique em gerar token, copie o token gerado.
✨  Agora entre no seu repositório no github, seguindo este fluxo. `Settings/Secrets and variables/actions`

✨  Cria uma chave secreta, onde o nome será.
```bash
NPM_TOKEN
```
✨  No campo onde está `Secret`, cole a chave que você criou e salve.
🛠️  No workflow arquivo `deploy-docs.yml` do seu projeto adicione essas configurações.
```bash
- run: npm run build
  env: 
    TURBO_TOKEN: ${{secrets.VERCEL_TOKEN}}
    TURBO_TEAM: lacymelo
```
✨  Agora faça o push do projeto no github.

## 🔖 Publicação automatizada com o TURBOREPO
>  A criação do arquivo de release deixa automatizado o processo de deploy no npm, assim quando for realizado o deploy no github ao mesmo tempo ocorre a publicação no npm.

✨  Crie um workflow release.yml, `.github/workflows/release.yml`

🛠️  adicione no arquivo `release.yml` as seguintes informações.
```bash
name: Release

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

        # setup do node
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          cache-dependency-path: '**/package-lock.json'

        # para instalar somente a s dependências de produção
      - run: npm ci

        # executa a build que foi configurada no turbo
      - run: npm run build

      - name: Publish to NPM
        id: changesets
        uses: changesets/action@v1
        with:
          # This expects you to have a script called release which does a build for your packages and calls changeset publish
          publish: npm run release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
          TURBO_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          TURBO_TEAM: lacymelo
```
# 🔖 Como fazer o deploy do projeto quando houver atualização?
✨  Quando houver alterações no repositório, você pode mapear usando o seguinte comando
```bash
npm run changeset
```
✨  Agora para realizar o controle versão execute o seguinte comando.
```bash
npm run version-packages
```
✨ Agora não precisa executar o comando `npm run release`, porque o workflow release.yml é o responsável por publicar no npm, então apenas faça o push da atualização.
# :man_student: Autores
---

Feito com ♥ by Laciene Melo :wave: [#lacymelo](https://github.com/lacymelo)
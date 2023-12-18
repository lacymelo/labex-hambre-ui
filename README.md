<div align="center">
  <h1>
    🤖 Design System Hambre
  </h1>

  > Bem-vindo ao repositório de código-fonte do Design System do Hambre Delivery, neste projeto estão documentados os componentes React e ferramentas que ajudaram desde a implementação do Design System até a publicação, como Storybook, changesets e muito mais.

  <img src="./packages/assets/logo-hambre-readme.png" width="40%" />
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
- [X] Toast
- [X] Transition

> Se você quiser somente utilizar o design system, instale utilizando o comando seguinte.

```bash
npm i @labex-hambre-ui/react@latest
```

## :rocket: Se você quiser criar o seu próprio um design system.
> Siga esse conjunto de configurações

## 🔖 Configurações do Pacote de Tokens
```bash
# crie os seguintes diretórios packages/tokens

# no diretório tokens, inicialize o projeto com o comando
npm init -y

packages/tokens

# 🛠️ instalar no pacote de tokens o typescript
npm i -D typescript

# 🛠️ crie no pacote de tokens o arquivo de configuração tsconfig

npx tsc --init

# 🛠️ instale no pacote de tokens o tsup
npm i tsup -D

# no diretório tokens, configure o script build no arquivo package.json

"scripts": {
  "build": "tsup src/index.ts --format esm, cjs --dts",
  "dev": "tsup src/index.ts --format esm, cjs --dts --watch",
  "lint": "eslint src/**/*.ts* --fix"
},

# 🛠️ Faça a build do pacote de tokens executando o comando.
npm run build

```

## 🔖 Configurações do Pacote React


```bash
# no diretório packages crie um diretório react

packages/react

# no diretório react inicialize o projeto com o comando
npm init -y

# 🛠️ instalar no pacote react o typescript
npm i -D typescript

# 🛠️ instale a lib tsup
npm i tsup -D

# 🛠️ Configure os scripts em package.json

"scripts": {
  "build": "tsup src/index.tsx --format esm, cjs --dts",
  "dev": "tsup src/index.tsx --format esm, cjs --dts --watch",
  "lint": "eslint src/**/*.ts* --fix"
},

# crie um diretório src e dentro dele um arquivo index.ts,
react/src/index.ts

# escreva no arquivo um 
console.log(ok)

# no diretório react, execute o comando de build
npm run build

# volte a raiz do projeto e execute
npm init -y

# Configure o package.json do diretório raiz, adicionando essa configuração

{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}

# delete a pasta node_modules e o arquivo package-lock.json dos diretórios tokens e react

# No diretório react/package.json adicione a seguinte dependência.
"devDependencies": {
  "@labex-hambre-ui/tokens": "*",
}

# volte na raiz do projeto e execute
npm i

# nos arquivos package.json dos diretórios tokens e react, adicione as seguintes configurações
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
}

# volte ao diretório raiz e execute
npm i

# No pacote de tokens execute o comando
npm run build


```

## 🔖 Configurações do ts-config

```bash
# Crie dentro de packages um diretório ts-config.
packages/ts-config

# 🛠️ estando em ts-config, execute o comando
npm init -y

# No package.json gerado, adicione a seguinte configuração
{
  "name": "@labex-hambre-ui/ts-config",
  "version": "1.0.0",
  "license": "MIT",
  "private": true
}

# crie um arquivo de configuração base.json
base.json

# escreva nesse arquivo as seguintes configurações:
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

# crie um arquivo de configuração react.json
react.json

# escreva nesse arquivo as seguintes configurações:
{
    "extends": "./base.json",
    "compilerOptions": {
        "jsx": "react-jsx",
        "lib": ["dom", "ES2015"],
        "module": "ESNext",
        "target": "es6"
    } 
}

# Nos arquivos package.json dos diretórios tokens e react, adicione as seguintes configurações

"devDependencies": {
  "@labex-hambre-ui/ts-config": "*",
}

# volte ao diretório raiz e execute
npm i

# No diretório tokens, entre em tsconfig.json e adicione essa configuração.
{
  "extends": "@labex-hambre-ui/ts-config/base.json",
  "include": [
    "src"
  ],
}

# No diretório react, entre em tsconfig.json e adicione essa configuração.
{
  "extends": "@labex-hambre-ui/ts-config/react.json",
  "include": [
    "src"
  ],
}

# no diretório raiz execute o comando
npm i

# Nos pacotes de tokens e react execute o comando, de build para cada um.
npm run build

```
## 🔖 Configurações do eslint-config

```bash
# 🛠️ No diretório packages, crie um diretório eslint-config
packages/eslint-config

# inicialize o diretório eslint-config, executando o comando
npm init -y

# no package.json gerado adicione essa configuração
{
  "name": "@labex-hambre-ui/eslint-config",
  "version": "3.0.0",
  "license": "MIT",
  "private": true,
  "main": "index.js"
}

# 🛠️ faça a instalação da lib eslint, executando o comando
npm i -D eslint @rocketseat/eslint-config

# crie um arquivo index.js, e adicione a seguinte configuração.
module.exports = {
    extends: ['@rocketseat/eslint-config/react']
}

# Nos package.json dos diretórios react e tokens, adicione essa configuração
"devDependencies": {
  "@labex-hambre-ui/eslint-config": "*",
}

# Nos diretórios react e tokens crie um arquivo e adicione a seguinte configuração.
{
    "extends": "@labex-hambre-ui/eslint-config"
}

# 🛠️ Entrando nos diretórios tokens e react, execute o comando.
npm run lint

# 🛠️ Entre do diretório react instale as libs, react e react-dom
npm i -D @types/react @types/react-dom

# 🛠️ No diretório react instale a lib stitches de estilização
npm i @stitches/react

# No diretório react crie um diretório styles, estando nele, crie um arquivo index.ts.
react/styles.index.ts

# No arquivo index.ts adicione estas configurações.
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
## 🔖 Configurações Docs

```bash
# Dentro do diretório packages crie, um diretório docs
packages/docs

# inicialize o projeto docs
npm init -y

# 🛠️ Em docs instale a lib storybook
npx storybook@latest init

# obs.: Na instalação, responda yes para o projeto em react, e yes para a builder em webpack 5

# 🛠️ instale na raiz de docs, as libs react e react-dom
npm i react react-dom

# 🛠️ para validar todas as configurações feitas, e organizar o diretório de cache do vite, prossiga com os seguintes passos, apague a pasta node_modeles no diretório docs e do diretório raiz do projeto, por fim, execute o comando a seguir para validar tudo.
npm i

# Para executar o storybook, no diretório docs organize a configuração do package.json configurando esses comandos.
# altere o nome do projeto para 
"name": "@labex-hambre-ui/docs",

# configure os scripts de execução.
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "storybook dev -p 6006",
  "build": "storybook build"
},

# altere a licença para 
"license": "MIT",

# Estando no diretório docs, execute o storybook, com o comando a seguir
npm run dev

# Para criar seus próprios stories, apague a pasta stories que vem por padrão, crie um diretório src, e dentro crie o diretório stories.
packages/docs/src/stories

# dentro de .storybook que vem por padrão, tem um arquivo main.js.
packages/docs/.storybook/main.js

# Neste arquivo adicione a seguinte, configuração.
stories: [
  "../src/stories/**/*.mdx",
  "../src/stories/**/*.stories.tsx",
],

# No arquivo package.json de docs, adicione essas dependências.
"dependencies": {
  "@labex-hambre-ui/react": "*",
  "@labex-hambre-ui/tokens": "*",
  "@labex-hambre-ui/eslint-config": "*"
}

# Em docs, escute esse comando para fazer a referência desses pacotes internos.
npm i

# Na raiz de docs, um arquivo eslintrc.json, com a seguinte configuração.
{
    "extends": "@labex-hambre-ui/eslint-config"
}

# Entre no diretório react/src/components
react/src/components

# Crie um components, componente inicial, text.ts
react/src/components/Text.ts

# Este é um exemplo, que pode ser adicionando no arquivo text.ts
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

# depois no index.tsx localizado na raiz de src, adicione
react/src/index.tsx

# faça a importação do componente Text.ts, desse jeito.
export * from './components/Text'

# abra um segunda aba no terminal, entre no diretório react e execute o comando
npm run dev

# isso vai gerar a build e observar qualquer alteração no pacote react

# opcional: para configurar o tema dark entre .storybook crie um arquivo manager.js, e adicione essa configuração.
import {
    addons
} from '@storybook/addons'
import {
    themes
} from '@storybook/theming'

addons.setConfig({
    theme: themes.dark
})

# Para configurar as fontes do designer system em .storybook crie um arquivo preview-head.html, e adicione as fontes que você quiser, como no exemplo abaixo.
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

<script>
    window.global = window;
</script>

# No diretório docs/src crie um diretório pages
docs/src/pages

# em docs/.storybook/main.js, altere essa configuração
stories: [
  "../src/pages/**/*.mdx",
  "../src/stories/**/*.stories.tsx",
],

# Agora dentro de pages crie um arquivo home.stories.mdx, e configure como você quiser.
docs/src/pages/home.stories.mdx

# Configure esse arquivo de acordo com o seu projeto
import { Meta } from '@storybook/addon-docs'

<Meta title="Home" />

# Labex Hambre UI

Design System do Hambre.

# em .storybook/preview.js, adicione essa configuração
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

# Em docs/src crie um diretório components
docs/src/components

# ATENÇÃO.: Nos arquivos .tsx em docs, é necessário adicionar a importação nativa react
import React from 'react'

# Em docs/src/pages crie um diretório de tokens
docs/src/pages/tokens

# Neste diretório estarão configurados os tokens do projeto

# 🛠️  instale essa lib que permite fazer cálculos com cores em packages/docs
npm i polished

# para não dar erro no html, em docs adicione no package.json, essa configuração
"dependencies": {
  "@labex-hambre-ui/ts-config": "*",
}

# em seguida execute em docs
npm i

# em packages/docs crie o arquivo tsconfig.json, e adicione essa configuração.
{
  "extends": "@labex-hambre-ui/ts-config/base.json",
  "compilerOptions": {
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}


# docs/src crie um diretório styles
docs/tokens/styles

# Neste estarão as configurações de estilo css, crie um arquivo tokens-grid.css
docs/tokens/styles/tokens-grid.css

# em docs/.storybook/main.js, altere essa configuração
stories: [
  "../src/pages/**/*.stories.mdx",
],

# crie o .gitignore, para ignorar a pasta node_modules, no diretório raiz do projeto e no diretório docs
.gitignore

```

## 🔖 Configurações do Turbo Repo

```bash
# O turbo repo é uma biblioteca que Permite executar os scripts em todos os pacotes ao mesmo tempo, acelerando o build, instale ela no diretório raiz, usando o comando.
npm i turbo@latest -D

# Obs: usando o turbo repo, não é necessário executar de forma separada o pacote react e docs

# no diretório raiz crie um arquivo turbo.json, e adicione a seguinte configuração.
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

# no package.json da raiz do projeto adicione esses scripts.

"scripts": {
  "dev": "turbo run dev --parallel",
  "build": "turbo run build",
  "changeset": "changeset",
  "version-packages": "changeset version",
  "release": "turbo run build --filter=!docs && changeset publish"
},

# em seguida na raiz do projeto, para executar todos os scripts, execute o comando.
npm run dev

# com as principais configurações feitas, você pode criar os componentes em react, e em docs.
```

## 🔖 Configurações de componentes

```bash
# 🛠️ Instale a biblioteca de ícones nos diretórios react e docs
 npm i phosphor-react

# 🛠️ Para manipular componente de avatar, dentro do diretório react instale o componente avatar de radix-ui
npm i @radix-ui/react-avatar

# 🛠️ instale a lib checkbox do radix em packages/react
npm i @radix-ui/react-checkbox

# 🛠️ instale a lib react-select do radix em packages/react
npm i @radix-ui/react-select

# 🛠️ instale a lib react-radio-group do radix em packages/react
npm i @radix-ui/react-radio-group

# 🛠️ instale a lib react-switch do radix em packages/react
npm i @radix-ui/react-switch

# 🛠️ instale a lib react-toast do radix em packages/react
npm i @radix-ui/react-toast

# 🛠️ instale a lib de acessibilidade addon-a11y do storybook em packages/docs
npm i @storybook/addon-a11y

# 🛠️ Para ver o código dos componentes instale a lib addon-docs do storybook em packages/docs
npm i @storybook/addon-docs


```
## 🔖 Publicação e Manutenção

 ```bash
# 🛠️ Biblioteca para faze o deploy em packages/docs
```
 - [X] npm i @storybook/storybook-deployer --save-dev

 ```bash
# 🛠️ Biblioteca para gerenciar o versionamentos dos pacotes
```
 - [X] npm i @changesets/cli -D

 ```bash
# 🛠️ Comando para inicializar o changesets
```
 - [X] npx changeset init

 ```bash
# 🛠️ Executar esse comando para validar no npm, qualquer atualização no repositório
```
 - [X] npm run changeset

 ```bash
# 🛠️ Executar o comando para mudar a versão no caso de uma alteração
```
 - [X] npm run version-packages

 ```bash
# 🛠️ Executar o comando para fazer o deploy no npm
```
 - [X] npm run release

## :man_student: Autores

---

Feito com ♥ by Laciene Melo :wave: [#lacymelo](https://github.com/lacymelo)


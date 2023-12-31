<div align="center">
  <h1>
    🤖 @labex-hambre-ui/react
  </h1>

  > Esta biblioteca fornece um conjunto de componentes React para a construção de interfaces de usuário, sendo compatível com as versões mais recentes do NextJS 13 e 14 🚀, seguindo as diretrizes dos três pilares.
</div>

## :rocket: Abordagem dos três pilares
- [X] Server Components 👉  Para não usar Javascript no lado do cliente.
- [X] Client Components 👉  Enviando somente o javascript necessário para o navegador (cliente).
- [X] Streaming SSR 👉  Ler/escrever dados de forma parcial + Server-Side Rendering

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

## :rocket: Compatibilidade
> A biblioteca @labex-hambre-ui/react é compatível com as seguintes versões de dependências:

- [X] NextJS 12
- [X] NextJS 13
- [X] NextJS 14
- [X] @radix-ui

##  📥 Instalações e configurações 
> Para instalar o @labex-hambre-ui/react, utilize o seguinte comando npm:
```bash
npm i @labex-hambre-ui/react@latest
```
🛠️ Para ativar o Intellisense da biblioteca na criação de um styled component, entre em `tsconfig.json` e altere o moduleResolution para 'Node', dessa forma.
```bash
"moduleResolution": "Node",
```

🛠️ o arquivo `styles.js` que você criar, seja para uma página o componente, deve ter a configuração `use client` antes de tudo, pois os estilos devem ser renderizados no lado do cliente, como neste exemplo a seguir.
```bash
'use client'
import { Text, styled } from "@labex-hambre-ui/react";

export const LinkRedirect = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$2',
    cursor: 'pointer',
    color: '$hambre600',
    fontSize: '$sm',
    textDecoration: 'none',

    '&:hover': {
        color: '$hambre300',
        transition: 'all ease .36s'
    },
})
```

## :eyes: Visite o Storybook da Biblioteca
👉 [Storybook](http://lacymelo.github.io/labex-hambre-ui/?path=/docs/home--documentation)

# :closed_book: License

Released in 2023 :closed_book: License
Made with ♥ by  :man_student: Laciene Melo :wave: [#lacymelo](https://github.com/lacymelo) 🚀.
This project is under the [MIT license](./LICENSE).
Give a ⭐️ if this project helped you!

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

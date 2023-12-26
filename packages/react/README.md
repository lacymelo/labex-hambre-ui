<div align="center">
  <h1>
    🤖 @labex-hambre-ui/react
  </h1>

  > Esta biblioteca fornece um conjunto de componentes React para a construção de interfaces de usuário com o sistema de design Labex Hambre. Inclui componentes como diálogos, avatares, caixas de seleção, grupos de rádio, seleções, switches, entre outros. A biblioteca foi projetada para funcionar perfeitamente com os tokens Labex Hambre e segue as diretrizes estabelecidas no sistema de design Labex Hambre.
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

## :rocket: Compatibilidade
> A biblioteca @labex-hambre-ui/react é compatível com as seguintes versões de dependências:

- [X] @labex-hambre-ui/tokens: Qualquer versão
- [X] @radix-ui/react-alert-dialog: ^1.0.5
- [X] @radix-ui/react-avatar: ^1.0.4
- [X] @radix-ui/react-checkbox: ^1.0.4
- [X] @radix-ui/react-radio-group: ^1.1.3
- [X] @radix-ui/react-select: ^2.0.0
- [X] @radix-ui/react-switch: ^1.0.3
- [X] @stitches/react: ^1.2.8
- [X] phosphor-react: ^1.4.1

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
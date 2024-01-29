import { styled } from "../../styles"

export const UploadInputContainer = styled('div', {
    backgroundColor: '$white',
    padding: '$1',
    borderRadius: '$lg',
    boxSizing: 'border-box',
    border: '2px dashed $hambre300',
    width: '$40',
    height: '$40',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    img: {
        display: 'flex',
        width: '100%',
        height: '100%',
        borderRadius: '$lg',
    },

    svg: {
        width: '$5',
        height: '$5',
        color: '$yellow600'
    },

    defaultVariants: {
        size: 'md'
    }
})

export const Input = styled('input', {
    all: 'unset',
    display: 'none'
})


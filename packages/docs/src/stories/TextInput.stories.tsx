import React from 'react'
import { Box, Text, TextInput, TextInputProps } from '@labex-hambre-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { Lock, MagnifyingGlass } from 'phosphor-react'

export default {
    title: 'Form/Text Input',
    component: TextInput,
    tags: ['autodocs'],
    args: {
        name: 'email'
    },
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '$2'
                    }}>
                    <Text
                        size="sm"
                    >Email address</Text>
                    {Story()}
                </Box>
            )
        },
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'type your name',
        type: 'text'
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'lacymelo/',
        placeholder: 'your-username'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}

export const Icon: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'search...',
        icon: (
            <>
                <MagnifyingGlass />
            </>
        )
    }
}

export const Password: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'password',
        icon: (<Lock />),
        type: 'password'
    }
}


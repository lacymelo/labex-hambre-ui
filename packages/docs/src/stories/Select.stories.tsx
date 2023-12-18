import React from "react"
import { Box, Select, SelectProps, Text } from "@labex-hambre-ui/react"
import { Meta, StoryObj } from "@storybook/react"

export default {
    title: 'Form/Select',
    component: Select,
    tags: ['autodocs'],
    args: {
        placeholder: 'Selecione ..',
        items: [
            {
                value: 'france',
                text: 'France'
            },
            {
                value: 'brazil',
                text: 'Brazil'
            },
        ]
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
                    <Text size="sm">
                        Select Country
                    </Text>
                    {Story()}
                </Box>
            )
        },
    ]
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {
    args: {
        name: 'country'
    }
}
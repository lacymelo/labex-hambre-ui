import React from "react";
import { Box, Text, TextArea, TextAreaProps } from "@labex-hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Form/ Text Area',
    component: TextArea,
    tags: ['autodocs'],
    args: {
    },
    decorators: [
        (Story) => {
            return (
                <Box
                    as="form"
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '$2'
                    }}>
                    <Text
                        size="sm"
                    >Observations</Text>
                    {Story()}
                </Box>
            )
        },
    ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        name: 'observation',
        placeholder: 'add any observations...',
        typeof: 'text'
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'type your description',
        disabled: true,
        typeof: 'text'
    }
}
import React from "react";
import { Box, Switch, SwitchProps, Text } from "@labex-hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Form/Switch',
    component: Switch,
    tags: ['autodocs'],
    args: {
        typeof: 'checkbox',
        name: 'accept',
    },
    argTypes: {
        checked: {
            control: {
                type: 'boolean'
            }
        },
    },
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '$2'
                    }}
                >
                    {Story()}

                    <Text
                        size="sm"
                    >
                        Accept terms of use
                    </Text>
                </Box>
            )
        }
    ]
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {
}

export const Disabled: StoryObj<SwitchProps> = {
    args: {
        checked: true
    }
}
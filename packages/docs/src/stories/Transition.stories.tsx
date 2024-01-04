import React from "react";
import { Box, Text, Transition, TransitionProps } from "@labex-hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Effect/Transition',
    component: Transition,
    tags: ['autodocs'],
    args: {
        currentWidth: '50%',
        currentHeight: '100%',

        children: (
            <Text>
                Item
            </Text>
        )
    },
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '$2',
                        border: 'none',
                        backgroundImage: 'linear-gradient(133deg, $colors$yellow100, $colors$orange100)',
                    }}
                >
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<TransitionProps>

export const Primary: StoryObj<TransitionProps> = {
    args: {
        currentWidth: '50%',
        currentHeight: '100%',
    }
}

export const Secondary: StoryObj<TransitionProps> = {
    args: {
        currentWidth: '100%',
        currentHeight: '50%',
    }
}
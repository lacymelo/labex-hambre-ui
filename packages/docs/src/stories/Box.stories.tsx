import React from "react";
import { Box, BoxProps, Text } from "@labex-hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Surfaces/Box',
    component: Box,
    tags: ['autodocs'],
    args: {
        children: (
            <Text>Box</Text>
        )
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
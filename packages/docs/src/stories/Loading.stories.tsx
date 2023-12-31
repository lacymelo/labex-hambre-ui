import { Loading, LoadingProps } from "@labex-hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Effect/Loading',
    component: Loading,
    tags: ['autodocs'],
    args: {

    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
            control: {
                type: 'inline-radio'
            }
        },
        variant: {
            options: ["gray", "yellow", "red", "blue", "green", "orange"],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<LoadingProps>

export const Primary: StoryObj<LoadingProps> = {
    args: {

    }
}

export const Secondary: StoryObj<LoadingProps> = {
    args: {
        size: 'md',
        variant: 'gray'
    }
}
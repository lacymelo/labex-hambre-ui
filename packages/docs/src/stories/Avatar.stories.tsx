import { Avatar, AvatarProps } from "@labex-hambre-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: 'https://avatars.githubusercontent.com/u/89089202?s=400&u=d6817e5659321e49a5532ab9f267bf668647863a&v=4',
        alt: 'Laciene Melo'
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}
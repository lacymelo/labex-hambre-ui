import React from 'react'
import { Box, Text, UploadInputProps, UploadInput } from '@labex-hambre-ui/react'
import { Meta } from '@storybook/react'

export default {
    title: 'Form/Upload Input',
    component: UploadInput,
    tags: ['autodocs'],
    args: {
        onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log('File changed:', event.target.files)
        }
    },
    argTypes: {
        imageUrl: {
            control: {
                type: 'text'
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
                        flexDirection: 'column',
                        gap: '$2'
                    }}>
                    <Text
                        size="sm"
                    >Foto</Text>
                    {Story()}
                </Box>
            )
        },
    ]
} as Meta<UploadInputProps>

export const Primary: React.FC<UploadInputProps> = (args) => (
    <UploadInput
        {...args}
        onFileChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            console.log('File changed:', event.target.files)
        }
    />
)
export const Secondary: React.FC<UploadInputProps> = (args) => (
    <UploadInput
        {...args}
        imageUrl="https://avatars.githubusercontent.com/u/89089202?s=400&u=d6817e5659321e49a5532ab9f267bf668647863a&v=4"
        onFileChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            console.log('File changed:', event.target.files)
        }
    />
)

import { ChangeEvent, ComponentProps, ElementRef, forwardRef } from "react"
import { Input, UploadInputContainer } from "./styles"
import { Camera } from "phosphor-react"

export interface UploadInputProps extends ComponentProps<typeof Input> {
    imageUrl?: string | null;
    onFileChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const UploadInput = forwardRef<ElementRef<typeof Input>, UploadInputProps>(
    ({ imageUrl, onFileChange, ...props }: UploadInputProps, ref) => {

        return (
            <UploadInputContainer>
                {imageUrl ? (
                    <img src={imageUrl} alt="Uploaded File" />
                ) : (
                    <Camera />
                )}
                <Input ref={ref} {...props} type="file" onChange={onFileChange} />
            </UploadInputContainer>
        )
    },
)

UploadInput.displayName = 'UploadInput'
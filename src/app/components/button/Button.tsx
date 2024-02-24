import { ButtonProps, VariantType } from '../schemas'
import { FC, HTMLAttributes } from 'react'

export const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
    className,
    text = '',
    variant = 'primary',
    onClick,
}) => {
    return (
        <div>
            <button
                className={`${variantStyle(variant)} ${className}`}
                onClick={onClick}>
                <span> {text} </span>
            </button>
        </div>
    )
}

const variantStyle = (type: VariantType) => {
    switch (type) {
        case 'primary':
            return 'btn btn-primary'
        case 'secondary':
            return 'btn btn-secondary'
        case 'outline':
            return 'btn btn-outline'
        case 'link':
            return 'btn btn-link'
        case 'ghost':
            return 'btn btn-ghost'
        default:
            return 'btn btn-primary'
    }
}

import { getIconSize, IconProps } from "./iconsUtils"

export const Ellipsis = (props: IconProps) => {
    return (
        <svg fill="none" width={getIconSize(props.size)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  {...props}>
            <circle cx="17.5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="6.5" cy="12" r="1.5" />
        </svg>
    )
}
import { getIconSize, IconProps } from "./iconsUtils"

export const ArrowLeft = (props: IconProps) => {
    return (
        <svg
            width={getIconSize(props.size)}
            viewBox="0 0 26 26"
            fill="none"
            {...props}
        >
            <path d="m8.57 13.078 10.21-10.4c.18-.18.29-.44.29-.7 0-.26-.1-.51-.29-.7-.37-.37-1.02-.37-1.4 0L6.29 12.397a.995.995 0 0 0-.29.69.995.995 0 0 0 .29.69l11.07 11.07c.18.17.42.26.67.26h.02c.26 0 .5-.11.68-.29.18-.18.28-.42.29-.68 0-.26-.09-.5-.27-.7L8.57 13.057v.02Z" />
        </svg>
    )
}
import { getIconSize, IconProps } from "./iconsUtils"

export const ArrowRight = (props: IconProps) => {
    return (
        <svg
            width={getIconSize(props.size)}
            viewBox="0 0 26 26"
            fill="none"
            {...props}
        >
            <path d="M18.99 12.65a.945.945 0 0 0-.21-.31L7.71 1.27A.98.98 0 0 0 7.04 1h-.02c-.26 0-.5.11-.68.29-.18.18-.29.42-.29.68 0 .26.09.5.27.7L16.5 13.05 6.29 23.45c-.19.19-.29.43-.29.7 0 .27.1.51.29.7.19.19.43.29.7.29.27 0 .51-.11.7-.29l11.09-11.12a.995.995 0 0 0 .29-.69c0-.13-.03-.26-.08-.38v-.01Z" />
        </svg>
    )
}
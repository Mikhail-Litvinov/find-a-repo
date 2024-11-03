type IconSize = 'large' | 'small' | `${number}rem` | `${number}em`

const iconSize: Record<IconSize, string | undefined> = {
    large: '24px',
    small: '16px',
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: IconSize
}

export const getIconSize = (size: IconSize = 'small') => iconSize[size] ?? size
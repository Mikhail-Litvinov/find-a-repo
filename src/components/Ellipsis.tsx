import * as Icon from "../imagery/icons"

export const Ellipsis = () => {
    return (
        <span className="h-full flex items-center justify-center">
            {<Icon.Ellipsis
                size="large"
                className="fill-gray-500"
            />}
        </span>
    )
}
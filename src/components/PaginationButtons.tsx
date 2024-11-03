import classNames from 'classnames';
import React from 'react';

type Props = {
    isActive?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PaginationButtons = ({ isActive, ...rest }: Props) => {
    return (
        <button
            className={classNames("disabled:text-gray-400 disabled:border-transparent disabled:bg-gray-300 bg-gray-200 px-4 py-2 rounded-lg hover:bg-slate-100 border hover:border-gray-400 flex items-center justify-center",
                isActive && "font-bold bg-slate-100 border-gray-400"
            )} {...rest}>
            {rest.children}
        </button>
    );
};
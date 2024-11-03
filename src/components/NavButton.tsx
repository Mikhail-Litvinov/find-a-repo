import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const NavButton: React.FC<Props> = (props) => {
    return (
        <button className="disabled:text-gray-400 disabled:border-transparent disabled:bg-gray-300 bg-gray-200 px-4 py-2 rounded-lg hover:bg-slate-100 border hover:border-gray-400 flex items-center justify-center" {...props}>
            {props.children}
        </button>
    );
};
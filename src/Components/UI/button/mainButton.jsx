import React from 'react';
import style from './mainButton.module.scss'

const MainButton = ({children, ...props}) => {
    return (
        <button
            className={style.button + ' ' + (props.version ? style[props.version] : '')}
            {...props}
        >
            {children}
        </button>
    );
};

export default MainButton;
import React from 'react';
import './Nav.css';

interface NavProps {
    options: string[]
    currentTab: number
    handleSetTab: Function
}

export function Nav(props: NavProps) {
    const handleSetTab = (tabIndex: number) => {
        props.handleSetTab(tabIndex);
    }

    const buttons = props.options.map((txt, index) => (
        <button className={ index === props.currentTab ? 'nav-button-selected' : 'nav-button' }
            key={index}
            onClick={() => handleSetTab(index)}>
            {txt}
        </button>
    ))

    return (
        <div className='nav-menu'>
            {buttons}
        </div>
    );
}
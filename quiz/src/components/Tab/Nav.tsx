import React from 'react';
import './Nav.css';

interface NavProps {
    options: string[]
    currentTab: number
    onSetTab?: (n: number) => void
}

export function Nav(props: NavProps) {
    const handleSetTab = (tabIndex: number) => {
        props.onSetTab && props.onSetTab(tabIndex)
    }

    const buttons = props.options.map((txt, index) => (
        <button className={ index === props.currentTab ? 'nav-button-selected' : 'nav-button' }
            key={index}
            onClick={() => props.onSetTab && props.onSetTab(index)}>
            {txt}
        </button>
    ))

    return (
        <div>
            {buttons}
        </div>
    );
}
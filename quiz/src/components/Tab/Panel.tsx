import React from 'react';

import './Panel.css';

interface PanelProps {
    text: string
}

export function Panel(props: PanelProps) {
    return (
        <div className='panel-text'>
            <h3> {props.text} </h3>
        </div>
    );
}
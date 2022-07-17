import React from 'react';

import './Panel.css';

interface PanelProps {
    text: string
}

export function Panel(props: PanelProps) {
    return (
        <div className='panel-text'>
            {props.text}
        </div>
    );
}
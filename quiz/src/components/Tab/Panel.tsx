import React from 'react';

interface PanelProps {
    text: string
}

export function Panel(props: PanelProps) {
    return (
        <div>
            <h3> {props.text} </h3>
        </div>
    );
}
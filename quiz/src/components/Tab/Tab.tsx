import React, { useState } from 'react';

import { Nav } from './Nav';
import { Panel } from './Panel';
import './Tab.css';

interface TabProps {
    options: string[],
    texts: string[]
}

export function Tab(props: TabProps) {
    const [currentTab, setTab] = useState(0);
    const handleCurrentTab = (tabIndex: number) => {
        setTab(tabIndex);
    }

    return (
        <div className="tab">
            <Nav options={ props.options } currentTab={currentTab} handleSetTab={ handleCurrentTab } />
            <Panel text={ props.texts[currentTab] } />
        </div>
    );
}
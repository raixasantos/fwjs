import React, { useState } from 'react';

import { Nav } from './Nav';
import { Panel } from './Panel';
import './Tab.css';

// interface TabProps {
//     options: string[]
// }

export function Tab() {
    const buttonsOptions = [
        {
            options: ["Tab1", "Tab2", "Tab3", "Tab4"],
            texts: ["Texto do Tab1",
                "Texto do Tab2",
                "Texto do Tab3",
                "Texto do Tab4"]
        }
    ];

    const [currentTab, setTab] = useState(0);
    const handleCurrentTab = (tabIndex: number) => {
        setTab(tabIndex);
    }

    return (
        <div className="tab">
            <Nav options={ buttonsOptions[0].options } currentTab={currentTab} handleSetTab={ handleCurrentTab } />
            <Panel text={ buttonsOptions[0].texts[currentTab] } />
        </div>
    );
}
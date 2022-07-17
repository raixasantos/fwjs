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
        <div className="container-tab">
            <h2>Conteúdo</h2>
            {props.options.length > 0 ?
                <div className="container-tabcontent">
                    <Nav options={ props.options } 
                        currentTab={currentTab} 
                        onSetTab={ handleCurrentTab } />
                    <Panel text={ props.texts[currentTab] } />
                </div>
            :   
                <div className="container-tabcontent">
                    <Nav options={ ['Tab'] } 
                        currentTab={currentTab} 
                        onSetTab={ handleCurrentTab } />
                    <Panel text={ 'Sem conteúdo' } />
                </div>
            }
        </div>
    );
}
import React, { useState } from 'react';
import './App.css';
import { Tab } from './components/Tab/Tab';
import { TabsForm } from './components/Tab/TabsForm';

function App() {  
    const tabInfos = {options: ["Título1", "Título2"], texts: ["Conteúdo1", "Conteúdo2"]};

    return (
        <div className="container-page">
            <div className="container-tabs">
                <TabsForm />
            </div>
            <div className="container-content">
                <Tab options={tabInfos.options}
                    texts={tabInfos.texts} />
            </div>
        </div>
    );
}

export default App;
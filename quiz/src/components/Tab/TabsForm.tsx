import React, { useState } from 'react';
import Cleave from 'cleave.js/react';

import './TabsForm.css';

export function TabsForm() {
    const [ numberTabs, setNumberTabs ] = useState<number>(1);
    const [ title, setTitle ] = useState<string>('');
    const [ content, setContent ] = useState<string>('');

    const changeNumberTabs = (value: string) => {
        setNumberTabs(Number(value))
    }

    return (
        <div className="container-form">
            <h2>Tabs</h2>
            <form>
                <div className="section-input">
                    <h5>Núm. de tabs</h5>
                    <Cleave options={{numericOnly: true}} 
                        value={numberTabs}
                        onChange={e => changeNumberTabs(e.target.value)} />
                </div>  
                <div className="section-input">            
                    <h5>Título</h5>
                    <input type="text"/>
                </div>
                <div className="section-input">
                    <h5>Conteúdo</h5>
                    <textarea/>
                </div>
                <div className="section-buttons">
                    <div className="buttons">
                        <input type="submit" value="Salvar" />
                    </div>
                </div>
            </form>
        </div>
    );
}
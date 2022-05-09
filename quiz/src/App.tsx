import React from 'react';
import './App.css';
// import { Quiz } from './components/Quiz';
import { Tab } from './components/Tab/Tab';

function App() {  
    const buttonsOptions = [
        {
            options: ["Tab1", "Tab2", "Tab3", "Tab4"],
            texts: ["Texto do Tab1",
                "Texto do Tab2",
                "Texto do Tab3",
                "Texto do Tab4"]
        }
    ];

    // return <Quiz/>;
    return <Tab options={buttonsOptions[0].options}
                texts={buttonsOptions[0].texts} />;
}

export default App;
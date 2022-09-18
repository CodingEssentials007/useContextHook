import { useState, createContext } from 'react';
import './App.css';
import FirstLevel from './Component/FirstLevel';


export const AppContext=createContext();

function App() {
    const [name,setName]=useState('Ahsen');
    
    return (
        <AppContext.Provider value={{name, setName}}>           
        <div>
            
               <FirstLevel  />
 
        </div>
        </AppContext.Provider>
     );
}

export default  App;
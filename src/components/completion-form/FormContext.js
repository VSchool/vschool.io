import React, {useState} from 'react';
const Context = React.createContext();

const FormContext = ({children}) => {
    const [allData, setAllData] = useState({})

    const addStepData = (data, step) => setAllData(prev => ({...prev, [step]: data}))

    return (
        <Context.Provider value={{allData, addStepData}}>
            {children}
        </Context.Provider>
    );
};

export {FormContext, Context};
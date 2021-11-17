import React, {useState, useEffect} from 'react';
const Context = React.createContext();

const FormContext = ({children}) => {
    const [allData, setAllData] = useState({})

    const addStepData = (data, step) => setAllData(prev => ({...prev, [step]: data}))

    useEffect(() => {
        localStorage.setItem('completion form', JSON.stringify(allData))
    }, [allData])

    return (
        <Context.Provider value={{allData, addStepData}}>
            {children}
        </Context.Provider>
    );
};

export {FormContext, Context};
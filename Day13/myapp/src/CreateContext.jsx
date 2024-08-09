import React,{useState} from 'react';
import { createContext } from 'react';
import Z from './Z';

const empID = createContext();
const empPAN = createContext();

const CreateContext = () => {
    const [empid,setempId] = useState(1234);
  return (
    <div>
        <h1>create context functional component</h1>
        <empID.Provider value={empid}>
            <empPAN.Provider value = "ABCD1234F">
                <Z/>
            </empPAN.Provider>
        </empID.Provider>

    </div>
  )
}

export default CreateContext

export {empID,empPAN}
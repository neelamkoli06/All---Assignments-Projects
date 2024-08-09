import React from 'react';
import { useContext } from 'react';
import {empID,empPAN} from './CreateContext';

const Z = () => {
     var employeeID = useContext(empID);
     var employeePAN = useContext(empPAN);
  return (
    <div>
        <h1>component z</h1>
        <h1>Hello Your Emp id is <mark>{employeeID}</mark></h1>
        <h1>Hello Your Emp PAN is <mark>{employeePAN}</mark></h1>
    </div>
  )
}

export default Z
import React from 'react'
import C from './C';


const B = (props) => {
    console.log(props);
    const { empId, empRole } = props;
  return (
    <div>
      <center>
        {/* <h1>component B data - </h1> */}
        <h1>
          Id = {empId} Role={empRole}
        </h1>
        <C empId={props.empId} empRole={props.empRole} />
      </center>
    </div>
  );
}

export default B
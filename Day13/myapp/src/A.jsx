import React from 'react'
import B from './B';

const A = (props) => {

    console.log(props);
    const{empId,empRole} = props;
    
  return (
    <>
      <center>
        {/* <h1>component A data - </h1> */}
        <h1>
          Id = {empId} Role={empRole}
        </h1>
        <B empId={props.empId} empRole={props.empRole} />
      </center>
    </>
  );
}

export default A
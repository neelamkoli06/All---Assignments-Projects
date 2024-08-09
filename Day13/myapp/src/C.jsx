import React from 'react'
import D from './D'

const C = (props) => {

    console.log(props);
    const { empId, empRole } = props;
  return (
    <div>
      <center>
        {/* <h1>component C data - </h1> */}
        <h1>
          Id = {empId} Role={empRole}
        </h1>
        <D empId={empId} empRole={empRole} />
      </center>
    </div>
  );
}

export default C
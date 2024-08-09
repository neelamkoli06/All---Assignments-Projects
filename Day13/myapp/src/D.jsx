import React from 'react'

const D = (props) => {
  return (
    <div>
      <center>
        <h1>
          {/* component D data - */}
          id = {props.empId}
          Role = {props.empRole}
        </h1>
      </center>
    </div>
  );
}

export default D
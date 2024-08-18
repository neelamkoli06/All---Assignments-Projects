import React, { useEffect, useState } from "react";

const App = () => {
  //2 state defined
  const [data, setData] = useState([]);

  // API calling
  //1
  useEffect(() => {
    fetch("http://localhost:3000/data").then((result) =>
      result.json().then((res) => {
        console.log(res);

        // state update
        //set data
        setData(res);
      })
    );
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className="bg-dark p-4 text-warning mb-4 text-center">
        API Data using functional component
      </h1>

      <table className="table table-bordered table-hover table-striped text-center">
        <thead>
          <tr>
            <th className="text-center">Id</th>
            <th className="text-center">Email</th>
            <th className="text-center">First-Name</th>
            <th className="text-center">Last-Name</th>
            <th className="text-center">Avatar</th>
          </tr>
        </thead>

        <tbody>
          {data.map((val, index, arr) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.email}</td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td><img src={val.avatar}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;

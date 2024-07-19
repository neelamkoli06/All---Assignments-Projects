import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  // Function to update date and time
  function updateDateTime() {
    const now = new Date().toLocaleString();
    document.getElementById("date").textContent = `Date :- ${
      now.split(",")[0]
    }`;
    document.getElementById("time").textContent = `Time :- ${
      now.split(",")[1]
    }`;
  }

  // Call updateDateTime immediately and set an interval to update every second
  setTimeout(() => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
  }, 0); // Ensure it's executed after the initial render

  return (
    <React.StrictMode>
      <h1 style={{ color: "orange", textAlign: "center" }}>React Js</h1>
      <img
        src="Assest/image.webp"
        style={{ height: "400px", marginLeft: "30%" }}
        alt="Description"
      />
      <br />
      <h2>Description :- </h2>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum."
      </p>
      <h3 id="date">Date :- </h3>
      <h3 id="time">Time :- </h3>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

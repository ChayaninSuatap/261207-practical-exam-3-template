import PersonTable from "./PersonTable";
import { useState, useEffect } from "react";

function App() {

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">

        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Male"
          ></input>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Age"
          ></input>
        </div>

        <button
          className="button is-primary is-fullwidth"
        >
          Submit
          </button>

        <div className="mb-4"></div>

        <p className="is-4 title has-text-centered">Person List</p>
        <PersonTable name={'Bob'} gender={'Male'} age={'50'}/>
      </div>
    </div>
  );
}

export default App;

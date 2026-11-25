import { useState } from "react";

import Header from "./components/header";
import BirthdayCard from "./components/birthdayCard";
import Footer from "./components/footer";

import "./App.css";

function App() {

  const [birthdays, setBirthdays] = useState([
    { id: 1, name: "Arun", date: "January 15" },
    { id: 2, name: "Priya", date: "March 20" },
    { id: 3, name: "Rahul", date: "June 10" }
  ]);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function addBirthday() {
    if (name === "" || date === "") {
      alert("Please enter all details");
      return;
    }

    const newBirthday = {
      id: Date.now(),
      name: name,
      date: date
    };

    setBirthdays([...birthdays, newBirthday]);

    setName("");
    setDate("");
  }

  return (
    <div className="container">

      <Header />

      <div className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addBirthday}>
          Add Birthday
        </button>
      </div>

      <div className="birthday-list">
        {birthdays.map((person) => (
          <BirthdayCard
            key={person.id}
            name={person.name}
            date={person.date}
          />
        ))}
      </div>

      <Footer />

    </div>
  );
}

export default App;
import BirthdayCard from "./birthdayCard";

function BirthdayList() {

  const birthdays = [
    { id: 1, name: "Arun", date: "January 15" },
    { id: 2, name: "Priya", date: "March 20" },
    { id: 3, name: "Rahul", date: "June 10" },
    { id: 4, name: "Divya", date: "December 5" }
  ];

  return (
    <div className="birthday-list">
      {birthdays.map((person) => (
        <BirthdayCard
          key={person.id}
          name={person.name}
          date={person.date}
        />
      ))}
    </div>
  );
}

export default BirthdayList;
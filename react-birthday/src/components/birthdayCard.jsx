function BirthdayCard(props) {
  return (
    <div className="birthday-card">
      <h2>🎉 {props.name}</h2>
      <p>Birthday: {props.date}</p>
    </div>
  );
}

export default BirthdayCard;
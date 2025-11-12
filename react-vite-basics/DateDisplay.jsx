function DateDisplay() {
  const currentDate = new Date();

  return (
    <div align="left">
      <h1 style={{ textDecoration: 'underline', color: 'yellow', fontFamily: 'monospace' }}>
        # Date Object
      </h1>
      <p>Date: {currentDate.toDateString()}</p>
    </div>
  );
}

export default DateDisplay;

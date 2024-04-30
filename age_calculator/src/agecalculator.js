import React, { useState } from "react";

function Agecalculator() {
  const [dob, setDob] = useState("");
  const [isReset, setIsReset] = useState(null);
  const [age, setAge] = useState({
    years: null,
    months: null,
    days: null,
  });
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!dob) {
      setError("Please select a date of birth.");
      return;
    }
    const today = new Date();
    const birthDate = new Date(dob);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    console.log(years, months, days);

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months = 12 - birthDate.getMonth() + today.getMonth();
    }

    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days = prevMonth.getDate() - birthDate.getDate() + today.getDate();
      months--;
    }

    setAge({ years, months, days });
    setIsReset(false);
    setError("");
  };

  console.log(age);

  const Reset = () => {
    setDob("");
    setIsReset(true);
    setError("");
  };

  return (
    <div className="main-container">
      <div className="image-div">
        <img src="/bg-image.png" alt="Background" />
      </div>
      <div className="calculator-div">
        <h2>Age Calculator</h2>
        <div>
          <label htmlFor="dob">Date of Birth: </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {error && <p className="error-msg">{error}</p>}
        </div>

        <div className="calculator-btns">
          <button className="calculate-btn" onClick={calculateAge}>
            Calculate Age
          </button>
          <button className="reset-btn" onClick={Reset}>
            Reset
          </button>
        </div>
        <div className="result">
          {!isReset && age.years >= 0 && (
            <p>
              Your age is:
              <span>
                {age.years} years, {age.months} months, and {age.days} days
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Agecalculator;

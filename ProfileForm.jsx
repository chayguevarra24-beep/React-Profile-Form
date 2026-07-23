import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function ProfileForm() {
  // Requirement 01 & 02: Controlled Form State
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");

  // State to store and display submitted profile data
  const [submittedProfile, setSubmittedProfile] = useState(null);

  // Requirement 03: Document Title Side Effect
  useDocumentTitle(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedProfile({
      name,
      age,
      language,
    });
  };

  return (
    <div className="container">
      <h1>React Profile Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <br />
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="age">Age</label>
          <br />
          <input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="language">Favorite Programming Language</label>
          <br />
          <input
            id="language"
            type="text"
            placeholder="Example: Java"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Requirement 02: Render output info below the form on submit */}
      {submittedProfile && (
        <div className="output-container">
          <h2>Submitted Information</h2>

          <p>
            <strong>Full Name:</strong> {submittedProfile.name}
          </p>

          <p>
            <strong>Age:</strong> {submittedProfile.age}
          </p>

          <p>
            <strong>Favorite Programming Language:</strong>{" "}
            {submittedProfile.language}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProfileForm;
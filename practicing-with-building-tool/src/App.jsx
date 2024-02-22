import { useState } from "react";
import Header from "./components/Header";

function App() {
  const students = ["Pa Dhika", "Erik", "Dody Ferdiansyah"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header />
      <Header author="Pa Dhika" />
      <header>
        <ul>
          {students.map((student) => (
            <li key={student}>{student}</li>
          ))}
        </ul>
      </header>
      <button onClick={handleClick}>Like {likes}</button>
    </>
  );
}

export default App;

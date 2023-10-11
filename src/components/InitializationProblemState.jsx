import { useState } from "react";

const InitializationProblemState = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "khouloud",
    email: "khld@gmail.com",
  });

  const changeUser = () => {
    // setUser((user.name = input)); ===> dont work
    // setUser((prev) => (prev.name = input)); ===> this too
    setUser((prev) => ({ ...prev, name: input })); // updating only the name with using spread operator
  };
  console.log(user);
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name ..."
        onChange={(e) => setInput(e.target.value)}
      />
      <br></br>
      <button onClick={changeUser}>Change your name </button>
      <br></br>
      <span>Username is : {user.name}</span>
      <br></br>
    </div>
  );
};

export default InitializationProblemState;
// the ? : insteade of user && user.name

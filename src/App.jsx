import React, { useState } from "react";

const App = () => {

  // Todos ka array
  // har todo me id, title aur completed status hai
  const [todos, settodos] = useState([
    { id: 1, title: "kaam karle bhai", isCompleted: false },
  ]);

  // Text input ki value store karega
  const [title, settitle] = useState("");

  // Checkbox checked hai ya nahi uske liye
  const [completed, setcompleted] = useState(false);

  // Radio button ki selected value store karega
  const [gender, setgender] = useState("male");

  // Select dropdown ki selected city
  const [city, setcity] = useState("mumbai");

  return (
    <div>
      <h1>Create Tasks</h1>

      <form>

        {/* 
          Two Way Binding:
          value state se input ko control karta hai
          onChange user ka data state me save karta hai
        */}

        <input
          type="text"
          placeholder="title"

          // input me jo likha jayega wo state me save hoga
          onChange={(e) => settitle(e.target.value)}

          // state ki value input me show hogi
          value={title}
        />

        <br />
        <br />

        {/* 
          Checkbox me checked use hota hai
          e.target.checked true ya false deta hai
        */}

        <input
          type="checkbox"

          // checkbox checked/unchecked state me save hoga
          onChange={(e) => setcompleted(e.target.checked)}

          // checkbox ki current state
          checked={completed}
        />

        Completed

        <br />
        <br />

        {/* 
          Radio button:
          sirf ek option select hoga
        */}

        <input
          type="radio"
          value="male"

          // selected value state me jayegi
          onChange={(e) => setgender(e.target.value)}

          // agar gender male hai toh ye selected rahega
          checked={gender == "male" && true}
        />
        male

        <input
          type="radio"
          value="female"

          // selected value state me jayegi
          onChange={(e) => setgender(e.target.value)}

          // agar gender female hai toh ye selected rahega
          checked={gender == "female" && true}
        />
        female

        <br />
        <br />

        {/* 
          Select dropdown bhi state se control ho raha hai
        */}

        <select
          value={city}

          // selected city state me save hogi
          onChange={(e) => setcity(e.target.value)}
        >
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="up">Uttar Pradesh</option>
        </select>

        <br />
        <br />

        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;


// Important Notes:

// Function Component:
// React me function component JSX return karta hai

// JSX:
// HTML jaisa syntax jo React use karta hai

// Hooks:
// React ke special functions jo functional components me features use karne dete hain

// useState:
// State create karta hai
// state change hone par component dobara render hota hai

// State:
// Dynamic data jo change ho sakta hai

// Two Way Binding:
// Input ki value state se control hoti hai
// aur user jo type/select karta hai wo state me save hota hai
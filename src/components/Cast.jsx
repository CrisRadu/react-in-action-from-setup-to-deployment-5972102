// din cauza refactoringului nu mai e nevoie nici de linia de mai jos

// import { useState, useEffect } from "react";

function Cast({ casting, onChoice }) {
  // si nici de linia de mai jos nu mai e nevoie (geeeeee)

  // const [casting, setCasting] = useState([]);

  // refactoring the below part

  // async function fetchCasting() {
  //   const response = await fetch('cast.json');
  //   setCasting(await response.json());
  // }

  // useEffect(() => {
  //   fetchCasting();
  // });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
      gap: "1rem",
      marginBottom: "1rem"
    }}>
      {casting.map(member => (
        <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
          <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        </a>
      ))}
    </div>
  )
}

export default Cast;
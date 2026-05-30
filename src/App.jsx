import { useEffect, useState } from "react";

<<<<<<< HEAD
import Nav from "./components/Nav"
import ListCast from "./components/ListCast"
=======
import Nav from "./components/Nav";
import Counter from "./components/Counter";
import Cast from "./components/Cast";
>>>>>>> 01_01b
import Modals from "./components/Modals";

import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";
<<<<<<< HEAD
import "./App.css";

function App() {
  const name = 'Stargazers';
  let [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div className="container">
      <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <img src="images/group.svg" alt="StarGazers Group" />
      <hgroup>
        <h1>Meet the {name}</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      </hgroup>
      {memberInfo &&
        <Modals
          member={memberInfo}
          handleClose={() => { setMemberInfo(null) }}
          handleChange={(info) => { setMemberInfo(cast[info]) }}
        />
      }
      <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
=======


function App() {
  const name = "testConst";
  let [casting, setCasting] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);


  async function fetchCasting() {
    const response = await fetch('cast.json');
    setCasting(await response.json());
  }

  useEffect(() => {
    fetchCasting();
  });


  return (
    <div className="container">
      <Nav casting={casting} onChoice={(info) => { setMemberInfo(info) }} />
      <img src="images/group.svg" alt="alt text" width='640px' />
      <h1>Some H1 text goes here, just for testing purpose. So <i style={{ color: "SteelBlue", fontSize: "2rem" }}>{name}</i>, constanta aia de mai sus apare aici </h1>
      <p>OK, a paragraph goes here which holds some text and that's pretty much it!</p>
      <Counter />
      <br /><br /><br /><br /><br />
      {memberInfo &&
        // asa l-am facut initial, mai jos e varianta 2
        // <article>
        //   <hgroup>
        //     <div>
        //       <hgroup>
        //         <img style={{ height: `160px` }} src={`images/${memberInfo.slug}.svg`} alt={memberInfo.name} />
        //         <h1>{memberInfo.name}</h1>
        //         <p style={{ color: `red`, height: `100px` }}>{memberInfo.bio}</p>
        //       </hgroup>
        //     </div>
        //   </hgroup>
        // </article>}

        // varianta 2: Am pus codul asta ^^^ in Modals.jsx
        <Modals
          member={memberInfo}
          handleClose={() => { setMemberInfo(null) }}
          handleChange={(info) => { setMemberInfo(casting[info]) }}
        />
      }
      <Cast casting={casting} onChoice={(info) => { setMemberInfo(info) }} />
>>>>>>> 01_01b
    </div>
  )
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 01_01b

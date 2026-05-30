<<<<<<< HEAD
import ToggleTheme from './ToggleTheme';

function Nav({ cast, onChoice }) {
  return (
    <nav className="container">
      <ul>
        <li><a href="#"><img style={{ height: '50px' }} src="images/logo_bug_stargazers.svg" alt="Stargazers Logo" /></a></li>
        <li><strong>Stargazers</strong></li>
=======
import ToggleTheme from "./ToggleTheme";

function Nav({ casting, onChoice }) {
  return (
    <nav className="container">
      <ul>
        <li><a href="#"><img style={{ height: '50px' }} src="images/charmaine.svg" alt="ceva alt text" /></a></li>
        <li><strong>ceva teste de React</strong></li>
>>>>>>> 01_01b
      </ul>
      <ul>
        <li><ToggleTheme /></li>
        <li>
          <details className="dropdown">
            <summary>Cast</summary>
            <ul dir="rtl">
<<<<<<< HEAD
              {cast.map(member => (
                <li key={member.id}>
                  <a href="#" onClick={() => { onChoice(member) }}>{member.name}</a>
                </li>
              ))}
=======
              {
                // asta e varianta cu RETURN statement, dar poate fi si fara, daca nu avem nevoie de altceva in afara de return
                /* {casting.map(member => {
                  return (
                    <li key={member.id}>
                      <a href="#" onClick={() => { onChoice(member) }}>{member.name}</a>
                    </li>
                  )
                })} */

                // asta e varianta fara RETURN dar folosesc parantezele pe post de RETURN statement
                casting.map(member => (
                  <li key={member.id}>
                    <a href="#" onClick={() => { onChoice(member) }}>{member.name}</a>
                  </li>
                ))
              }
>>>>>>> 01_01b
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
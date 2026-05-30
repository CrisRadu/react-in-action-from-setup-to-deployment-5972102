<<<<<<< HEAD
import Arrow from './icons/Arrow';
import { buttonStyle } from './InterfaceStyles';
=======
>>>>>>> 01_01b
function Modals({ member, handleClose, handleChange }) {
  return (
    (member &&
      <dialog open>
        <article>
<<<<<<< HEAD
          <header style={{ height: '2.4rem' }}>
=======
          <header>
>>>>>>> 01_01b
            <button
              aria-label="close"
              rel="prev"
              onClick={handleClose}
<<<<<<< HEAD
=======
              style={{
                backgroundColor: "red",
                color: "black",
                border: "none",
                padding: "20px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                height: "2.4rem",
                width: "2.4rem",
              }}
>>>>>>> 01_01b
            ></button>
          </header>
          <hgroup>
            <div style={{
<<<<<<< HEAD
              display: 'flex',
              gap: '1rem'
            }}>
              <img style={{ width: '200px' }} src={`images/${member.slug}.svg`} alt={member.name} />
              <hgroup>
                <h1>{member.name}</h1>
                <p>{member.bio}</p>
              </hgroup>
            </div>
          </hgroup>
          <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a href="#" style={buttonStyle} role="button"
              onClick={() => { handleChange(Number(member.id) - 1) }}
            ><Arrow /></a>
            <a href="#" style={buttonStyle} role="button"
              onClick={() => { handleChange(Number(member.id) + 1) }}
            ><Arrow flip={true} /></a>
=======
              display: "flex",
              gap: "1rem",
            }}>
              <img style={{ height: `260px` }} src={`images/${member.slug}.svg`} alt={member.name} />
              <hgroup>
                <h1>{member.name}</h1>
                <p style={{ color: `red`, height: `300px` }}>{member.bio}</p>
              </hgroup>
            </div>
          </hgroup>
          <footer style={{display: "flex", justifyContent: "space-between", gap: "1rem"}}>
            <a href="#" role="button"
              onClick={() => { handleChange(Number(member.id) - 1) }}
            >Prev</a>
            <a href="#" role="button"
              onClick={() => { handleChange(Number(member.id) + 1) }}
            >Next</a>
>>>>>>> 01_01b
          </footer>
        </article>
      </dialog>
    )
  )
}

export default Modals;
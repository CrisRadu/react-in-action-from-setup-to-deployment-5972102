import { useEffect, useState } from "react";
const pageTitle = document.title;

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    count && (document.title = `${pageTitle} | ${count}`)
  })

  return (
    // <button onClick={() => alert('testing!')}>Click the button you must!</button>
    <button onClick={() => setCount(count + 1)}
    >Clicked the butttttON <br /> {count === 0 ? ``:`${count}`} <br /> for so many times! </button>
  )
}

export default Counter;
// bimport { useState } from "react"
import { Link, Outlet } from "react-router-dom";
import EmailList from "./components/emails/Emails"
import Registration from "./components/registration/Registration"
// import Buttons from "./components/button/Button"
// import Home from "./pages/home/Home"

const App = () => {
  // const [bookCount, setBookCount] = useState(0); // State Hook

  return (
    <>
      {/* 
        <>
          <p>Du hast {bookCount} mal geklickt.</p>
          <button 
            onClick={() => setBookCount(bookCount + 1)}
          >Click</button>
        </>
        <Buttons />
        <Home />
      */} 
     <Registration />
     <EmailList />
     
    </>
  )
}

export default App

import React,{useState} from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {

  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if(window.scrollY >= 47) {
  //     setNavbar(true)
  //   } else {
  //     setNavbar(false)
  //   }
      
  // }

  // window.addEventListener('scroll', changeBackground);

  return (
    <div className="section">
      <div className="container" id="home">
        <div className='navbar-wrapper'>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#home")}>Home</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#skills")}>Stack</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

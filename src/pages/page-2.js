import React, {useRef} from "react"
import Modal from "../components/modal"

// import SEO from "../components/seo"

const SecondPage = () => {
  const about_modal = useRef()

  const event_about_open = (e)=>{ 
    e.preventDefault();
    about_modal.current.style.display = "block"
  }

  return(
    <>
      <button onClick={event_about_open}>show</button>
      <Modal ref={about_modal}>
        <p>Test page</p>
      </Modal>
    </>
  )
}


export default SecondPage

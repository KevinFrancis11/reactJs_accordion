// import '../app.css'

import { useState } from "react";

const Accordions = ({ accordionData }) => {
  //component states
  const [isOpen, setIsOpen] = useState(false);


  //handler functions 
  const handlerAccordion = () => {
    setIsOpen(!isOpen);
  }

  console.log(isOpen)


  return (
    <div className="accordions">
      {
        // accordionData && 
        accordionData?.map(({ id, title, desc }) => ( //optional chaining
          <div className="accordion" key={id}>
            <div className="accordion-title" onClick={handlerAccordion}>
              <h3>{title}</h3>
            </div>
            {isOpen && (
              <div className="accordion-des">
                <p>{desc}</p>
              </div>
            )}
          </div>
        ))
      }
    </div>
  )
}

export default Accordions
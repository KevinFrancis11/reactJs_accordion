// import '../app.css'

import { useState } from "react";

const Accordions = ({ accordionData }) => {
  //component states
  const [accordionIds, setAccordionIds] = useState([])


  //handler functions 
  const handlerAccordion = (id) => {
    setAccordionIds([id]);
  }

  console.log(accordionIds);





  return (
    <div className="accordions">
      {
        // accordionData && 
        accordionData?.map(({ id, title, desc }) => ( //optional chaining
          <div className="accordion" key={id}>
            <div className="accordion-title" onClick={() => handlerAccordion(id)}>
              <h3>{title}</h3>
            </div>

            {
              accordionIds?.map((acc_id, index) => (
                acc_id === id && (
                  <div className="accordion-des" key={index}>
                    <p>{desc}</p>
                  </div>
                )
              ))
            }

          </div>
        ))
      }
    </div>
  )
}

export default Accordions
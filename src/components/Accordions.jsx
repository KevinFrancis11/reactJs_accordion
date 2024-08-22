// import '../app.css'

import { useState } from "react";

const Accordions = ({ accordionData }) => {
  //component states
  const [accordionIds, setAccordionIds] = useState([]);


  //handler functions 
  const handlerAccordion = (newId) => {
    setAccordionIds((prevAccID) => {
      return accordionIds.includes(newId) ? accordionIds.filter((acc_id) => acc_id !== newId) : [...prevAccID, newId];
    });//the filter method creates a new array and return that array.
       //the includes method checks if the newId is already exist in the accordionIds array.
  }   //this logic is helpfull in making cart logic in ecommerce projects , for ex:- we dont want to 
      //again and again add the same pair of jeans into the cart we only need to increment the quantity of the jeans. 

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
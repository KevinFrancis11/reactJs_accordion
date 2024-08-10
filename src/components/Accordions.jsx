// import '../app.css'

const Accordions = ({ accordionData }) => {
  console.log(accordionData);

  return (
    <div className="accordions">
      {
        accordionData && accordionData.map(({id, title, desc}) => (
          <div className="accordion" key={id}>
            <div className="accordion-title">
              <h3>{title}</h3>
            </div>
            <div className="accordion-des">
              <p>{desc}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Accordions
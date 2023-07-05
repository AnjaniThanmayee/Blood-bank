import './listitem.css'
import 'bootstrap/dist/css/bootstrap.css';


const HospitalListItem = props => {
    const {hospitalDetails} = props
    const {imag, name, address} = hospitalDetails
    return (
      <div className="place-card">
        <h2>{name}</h2>
          <p >{address}</p>
        <img src={imag} alt={name} className="place-image" />
      </div>
    )
    
  }
  
  export default HospitalListItem
  
import './DriverCards.css';

const DriverCard = (props) => {
  const rounded = Math.round(props.rating)
  const whiteStar = (5 - rounded) 

  return(
    <div className="driver_license_container">
      <img src={props.img} alt="IDcard"/>
      <div className="driver_license_content">
      <h4>{props.name}</h4>
      <p className="rating">{"☆".repeat(whiteStar)} {"★".repeat(rounded)} </p> 
      <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;
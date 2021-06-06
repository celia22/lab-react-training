import './idCards.css';


const IdCard = (props) => {
  
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return(
    <div className="idCard">
           <img src={props.picture} alt="IDcard"/>
           <div className="data_container">
            <p><strong>First name: </strong>{props.firstName}</p>
            <p><strong>Last name:</strong> {props.lastName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height: </strong>{props.height/100}m</p>
            <p><strong>Birth:</strong> {day[props.birth.getDay()]} {month[props.birth.getMonth()]} {props.birth.getDate()} {props.birth.getFullYear()}</p>
            </div> 
        </div>
    )  
}

export default IdCard;



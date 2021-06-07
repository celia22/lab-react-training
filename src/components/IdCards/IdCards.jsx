import './idCards.css';

const IdCard = (props) => {
  
const birth2String = x => x.toDateString();
  
  return(
    <div className="idCard">
           <img src={props.picture} alt="IDcard"/>
           <div className="data_container">
            <p><b>First name: </b>{props.firstName}</p>
            <p><b>Last name:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height: </b>{props.height/100}m</p>
            <p><b>Birth</b>: {birth2String(props.birth)}</p>
            </div> 
        </div>
    )  
}

export default IdCard;



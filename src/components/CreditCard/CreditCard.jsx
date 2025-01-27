import "./CreditCard.css"

const CreditCard = (props) => {

const visibleNumbers = props.number.replace(/.(?=.{4,}$)/g, "•")

let logo = " ";
props.type === "Visa" ? logo= "/img/visa.png" : logo= "/img/master-card.svg";

  return(
    <div className="credit_card" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
      <img className="credit_card_logo" src={logo} alt="IDcard"/>
      <p className="credit_card_numbers">{visibleNumbers}</p>
      <div className="credit_card_content">
      <p>Expires {props.expirationMonth}/{props.expirationYear}</p> 
      <p>{props.bank}</p>
      <p>{props.owner}</p>
      </div>
    </div>
  )
}

export default CreditCard;
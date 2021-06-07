import './Random.css';

const Random = (props) => {
   const randomNumber = Math.floor(Math.random() * props.max) + props.min
  return(
    <div className="random">
      <h4>Random value between {props.min} and {props.max} => {randomNumber} </h4>
    </div>
  )
}

export default Random;
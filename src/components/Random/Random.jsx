import './Random.css';

const Random = (props) => {
  let min = props.min;
  let max = props.max;
  const randomNumber = Math.floor(Math.random() * max) + min
  return(
    <div className="random">
      <h4>Random value between {props.min} and {props.max} => {randomNumber} </h4>
    </div>
  )
}

export default Random;
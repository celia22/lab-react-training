const Rating = (props) => {
  const rounded = Math.round(props.children)
  const whiteStar = (5 - rounded) 
  const blackStar = rounded 
  
  return(
    <div>
      <p>{"☆".repeat(whiteStar)} {"★".repeat(blackStar)} </p>     
    </div>
  )
}

export default Rating;


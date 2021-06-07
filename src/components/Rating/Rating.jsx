const Rating = (props) => {
  const rounded = Math.round(props.children)
  const whiteStar = (5 - rounded) 
    
  return(
    <div>
      <p className="rating">{"☆".repeat(whiteStar)} {"★".repeat(rounded)} </p>     
    </div>
  )
}

export default Rating;


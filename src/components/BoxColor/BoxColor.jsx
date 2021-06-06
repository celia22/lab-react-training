import './BoxColor.css';

const BoxColor = (props) => {
  let r= props.r;
  let g= props.g;
  let b= props.b;

  const divStyle = {
  backgroundColor: `rgb(${r},${g},${b})`   
  };
 
  return(
   <div className="color_box" style={divStyle}> rgb({r},{g},{b}) </div>
   
  )
}

export default BoxColor;


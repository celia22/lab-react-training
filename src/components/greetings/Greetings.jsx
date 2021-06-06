import './Greetings.css';

const Greeting = (props) => {
  let hello = '';
  switch (props.lang) {
      case 'de': 
          hello = 'Hallo';
          break;
      case 'es': 
          hello = 'Hola';
          break;
      case 'fr': 
          hello = 'Bonjour';
          break;
      case 'en':
          hello = 'Hello';
          break;
      default:
          hello = "No language provided"    
  }

  return (
      <h3 className="hello">{hello} {props.children}</h3>
  )
}

export default Greeting;


import "./NumbersTable.css"

const NumbersTable = (props) => {

  let array = []
  
  for (let i = 1; i <= props.limit; i++){
      array.push(i)
  }
  
    return (
      <div>
        <div className="square_container">
          {array.map((item, index) =>
            index % 2 === 0 ? (
              <div className="square">
                <h3 >{index + 1}</h3>
              </div>
            ) : (
              <div className="square" style={{ backgroundColor: 'red' }}>
                <h3 >{index + 1}</h3>
              </div>
            )
          )}
        </div>
      </div>
    );  
}


export default NumbersTable;
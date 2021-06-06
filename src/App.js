import React from 'react';
import IdCard from './components/IdCards/IdCards';
import Greetings from './components/greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';

function App() {
  return (
    <div className="App">
      <div className="id_cards">
        <h2>IdCard</h2>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className="greetings_container">
        <h2>Greetings</h2>
        <Greetings lang="de"> Ludwig </Greetings>
        <Greetings lang="fr"> François </Greetings>
      </div>

      <div className="random_container">
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div className="boxcolor_container">
        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </div>
  );
}

export default App;

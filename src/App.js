import './App.scss';
import Header from './components/header/Header'
import Zones from './components/main/Zones'
import MealsInput from './components/meals/MealsInput'

const App = () => {
  return (
    <div className="app">
      <Header 
        className="header"
      />
      <Zones
        className="zones"
      />
      <MealsInput 
        className="meals-input"
      />
    </div>
  );
}

export default App;


import './App.css';
import Axiosexample from './components/Axiosexample';
import Users from './components/FetchExample.jsx'
import Yeniden from './components/Yeniden';
function App() {
  return (
    <div className="App">
      <h1>yeniden</h1>
      <Yeniden/>
      <h1>fetch data çekme</h1>
      <Users/>
      <h1>axios data çekme</h1>
     <Axiosexample/>
    </div>
  );
}

export default App;

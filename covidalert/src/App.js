import './App.css';
import AlertsCenter from './components/Pages/AlertsCenter/AlertsCenter.js';
import Login from './components/Pages/Login/Login';
import Header from './components/Template/Header/Header.js'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AlertsCenter></AlertsCenter>
    </div>
    
  );
}

export default App;

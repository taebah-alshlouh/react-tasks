import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Links } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (

    <div className="App">


    <BrowserRouter>
    <Routes>

    <Route path="/" component={Home}/>
    <Route path="/about" component={About} />        

    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;

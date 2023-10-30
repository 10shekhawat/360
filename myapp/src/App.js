// import logo from './logo.svg';
import './App.css';
import CreateMain from './componenets/createpaper/CreateMain';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateMain/>} />
    </Routes>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Welcome from './Components/Welcome';
import Friends from './Components/Friends';
import NewFriend from './Components/NewFriend';
import NavBar from './Components/NavBar';
import GiftsPage from './Components/GiftsPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/gifts" element={<GiftsPage/>}/>
        <Route path="/add_friend" element={<NewFriend/>}/>
        <Route path="*" element={<Welcome/>}/>
      </Routes>
    </div>
  );
}

export default App;

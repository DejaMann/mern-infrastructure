import {useState}  from "react";
import {Routes, Route} from 'react-router-dom';
import {getUser} from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ? (
        <>
          <Navbar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders/' element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
      <AuthPage setUser={setUser}/>
      )}
    </main> 
  );
}

export default App;

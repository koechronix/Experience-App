import './App.css';
import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import AccountPage from './AccountPage';
import Header from './Header';
import Search from './Search';
import PostContainer from './PostContainer';
import Login from "./Login";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Header />
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/home">
          <PostContainer user={user}/>
        </Route>
        <Route path="/account">
          <AccountPage user={user} name="account"/>
        </Route>
        <Route path="/search">
          <Search user={user}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

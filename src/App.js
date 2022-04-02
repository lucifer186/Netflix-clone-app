import React, { useEffect } from "react";
import Login from "./User/Login";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./Home-Page/HomePage";
import { auth } from "./User/firebase";
import { login, logout, selectUser } from "./store/userSlice";
import Profile from "./ProfileApplication/Profile";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        // console.log(userAuth);
      } else {
        //logout
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
        )}
       
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
//pages
import HomePage from './pages/homePage/homePage.component';
import Shop from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp';
//components
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>

    </div>
  );
}

export default App;

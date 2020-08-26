import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
//pages
import HomePage from './pages/homePage/homePage.component';
import Shop from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp';
//components
import Header from './components/header/header';
//firebase
import { createUserProfileDocument, auth  } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
  
            console.log(this.state);
          });
        }
  
        this.setState({ currentUser: userAuth });
      });
  }

  componentWillUnmount(){
      this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
  
      </div>
    );
  }
 
}

export default App;

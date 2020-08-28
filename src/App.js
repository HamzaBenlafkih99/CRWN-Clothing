import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
//pages
import HomePage from './pages/homePage/homePage.component';
import Shop from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp';
//components
import Header from './components/header/header';
//firebase
import { createUserProfileDocument, auth  } from './firebase/firebase.utils';
//redux actions
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.reselect';

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount(){
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
  
            console.log(this.state);
          });
        }
  
        setCurrentUser(userAuth);
      });
  }

  componentWillUnmount(){
      this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signin' render={
            ()=>this.props.currentUser ? 
            <Redirect to='/' />:
            <SignInAndSignUpPage />
           } 
          />
        </Switch>
  
      </div>
    );
  }
 
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);

import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import Products from './Component/Products';
import AddingProduct from './Component/AddingProduct';
import LogIn from './Component/LogIn';
import SignIn from './Component/SignIn';
import Cart from './Component/Cart';

class App extends React.Component{
  onLogOut = () =>{
    document.getElementById("logIn").style.display="block";
    document.getElementById("signIn").style.display="block";
    document.getElementById("logOut").style.display="none";
    document.getElementById("userMail").style.display="none";
    document.getElementById('userMail').innerHTML='';
    document.getElementById("cart").style.display='none';
  }
  render(){
//<li><a href="https://aravinth-thunder.github.io/Shopping-App/#/homepage"id="homePage"><button>Home Page</button></a></li>
//<li><a href="http://localhost:3000/Shopping-App#/homepage"id="homePage"><button>Home Page</button></a></li>
      return (
      <div className="App" id="app">
        <nav className="App-header">
          <ul>
            <li><a href="http://localhost:3000/Shopping-App#/homepage"id="homePage"><button>Home Page</button></a></li>
            <li><button id="userMail"></button></li>
            <li><a href="http://localhost:3000/Shopping-App#/signin" id="signIn"><button>Sign In</button></a></li>
            <li><a href="http://localhost:3000/Shopping-App#/cart"><button id='cart'>Cart</button></a></li>
            <li><a href="http://localhost:3000/Shopping-App#/login" id="logIn"><button>Log In</button></a></li>
            <li id="logOut" onClick={this.onLogOut}><button>Log Out</button></li>
            <li><a href="http://localhost:3000/Shopping-App#/admin" id="admin"><button>Admin</button></a></li>
          </ul>
        </nav>
        <HashRouter basename='/'>
        <Route path="/homepage" component={Products}></Route>
        <Route path="/admin" component={AddingProduct}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/login" component={LogIn}></Route>
        <Route path="/cart" component={Cart}></Route>
        </HashRouter>
      </div>
    );
  }
}

export default App;

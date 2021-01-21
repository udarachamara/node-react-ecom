import './App.css';
import { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './scene/login';
import Home from './scene/home';
import About from './scene/about';
import Contact from './scene/contact';
import NavBar from './component/nav-bar';
import Footer from './component/footer';

function App() {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <Provider store = {store} >
    <div className="App">
      {
        isLogin ?
          <Fragment>
            <Router>

              <NavBar />

              <Route path="/" exact component={ Home }/>
              <Route path="/about" exact component={ About }/>
              <Route path="/contact" exact component={ Contact }/>

              <Footer />
            </Router>
          </Fragment>
          :
          <Login />
      }
    </div>
    </Provider>
  );
}

export default App;

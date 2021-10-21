
import './App.css';
import Header from "./Components/Header/Header"
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import VerticalLayout from './Components/VerticalLayout/VerticalLayout';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


// fetch("http://localhost:3000/user/12")
// .then((res) => res.json())
// .then((result) => console.log(result))



function App() {
  return (
    <div className="App">
          <Router>
              <Header />
              <main>
                <VerticalLayout />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/user" component={Dashboard} />
                </Switch>

              </main>


          </Router>



    
    </div>
  );
}

export default App;

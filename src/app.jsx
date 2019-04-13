import React from "react"
import NavBar from "./components/nav-bar/nav-bar.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Greetings from "./components/greeting/index.jsx"
import ToDo from "./components/to-do/index.jsx"

const App = () => {
    return <Router>
        <NavBar></NavBar>
            <Switch>
                <Route exact path='/' render = {() => <h1>This is home.</h1>} />
                <Route path='/greetings' component={Greetings}/>
                <Route path='/to-do-list' component={ToDo}/>
            </Switch>
    </Router>
}

export default App;
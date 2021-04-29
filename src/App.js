import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Components/Header"
import Poll from "./Components/Poll"
import SignIn from "./Components/SignIn"
import Home from "./Components/Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from "./utils/AuthContext"
import { useEffect, useState } from 'react';

function App() {

  const [user, updateUser] = useState({ loginState: false, voteType: '', hasVoted: false, isAdmin: false })

  useEffect(() => {
    console.log('Inside useEffect', user)
  }, [user])

  return (
    <AuthProvider value={{ user, updateUser }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/poll" component={Poll} />
          </Switch>
        </Router>
        {/* <Poll /> */}
      </div>
    </AuthProvider>
  );
}

export default App;

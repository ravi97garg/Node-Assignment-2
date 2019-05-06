import React from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar';
import About from "./components/About";
import AddUser from "./components/AddUser";
import Home from "./components/Home";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  getUsers = () => {
      axios.get('http://127.0.0.1:8080/')
          .then((response) => {
              console.log(response);
              this.setState({
                  userList: response.data
              },console.log("done"))
          })
  };

  deleteUser = (id) => {
      axios.delete('http://127.0.0.1:8080/', {data: {id: id}})
          .then((response) => {
              console.log("After delete",response);
              this.setState({
                  userList: response.data
              })
          })
  };

  render() {
      console.log("userlist",this.state.userList);
      return (

          <div>
              <Router>
                  <Navbar/>
                  <Switch>
                      <Route exact path={'/'} component={(props)=><Home userList={this.state.userList} deleteUserCB={this.deleteUser} {...props}/>
                      }/>
                      <Route exact path={'/about'} component={(props)=><About userList={this.state.userList} {...props}/>}/>
                      <Route exact path={'/add'} component={AddUser}/>
                  </Switch>
              </Router>
          </div>
    );
  }

  componentDidMount() {
      this.getUsers();
  }
}

export default App;

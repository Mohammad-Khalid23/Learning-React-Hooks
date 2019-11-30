import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Greeting, Form } from './components'
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from './actions';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};


const addTheme = (type) => {
  const ThemeContext = React.createContext(themes[type]); //context always create by React.createContext
  return ThemeContext;
}

function App(props) {
  console.log("---------Props---------",props);

  // const { id, content } = props.comment;
  const { updateComment, deleteComment } = props.actions;


  const [heading, setHeading] = useState('Khalid');
  const [themeType, setTheme] = useState('light');

/* React Hooks userContext*/
  const theme = useContext(addTheme(themeType));
  
  
  
/* React Hooks userEffect start*/
  //Use effect is work as a componentDidMount , componentDidUpdate and componentWillUnMount
  useEffect(()=>{
    //worked as componentDidMount
    console.log("Component Did Mount");
    return ()=>{
      //worked as componentDidUpdate
      console.log("Component Did Update or componentWillUnMount");
    }
  });
/* React Hooks userEffect end*/


  /* React Hooks userReducer start*/
  const reducer = (state, action) => {
    //we can send payload in action also to set any data using reducer
    switch (action.type) {
      case 'light':
        setTheme('dark');
        return 'dark';
      case 'dark':
        setTheme('light');
        return 'light';
      default:
        setTheme('light');
        return 'light';
    }
  }
  
  //useReducer is almost work as redux reducer
  const [state,dispatch] = useReducer(reducer,themeType);

  const changeTheme = (_Type) => {
    console.log('theme _Type onClick',_Type);
    dispatch({ type: _Type });
  }
  /* React Hooks userReducer end*/
  


  const editComment = () => props.actions.updateComment();
  const removeComment = () => props.actions.deleteComment();

  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <Form />
        <button type="button" onClick={editComment}>Edit Comment</button>
        <button type="button" onClick={removeComment}>Remove Comment</button>
      </header>
    </div>
  );
}

const mapStateToProps = function(state) {
  console.log("redux store",state);
  return {
    profile: state,
    loggedIn: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(commentActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

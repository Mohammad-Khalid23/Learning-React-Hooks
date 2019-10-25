import React, { useState, useEffect, useContext, useReducer } from 'react';
import './App.css';


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

function App() {

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
  




  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React Hooks</h1>
        <h2>My name is {heading}</h2>
        <input placeholder="Enter your name" onChange={(e) => setHeading(e.target.value)} />

        <button onClick={()=>changeTheme(state)} style={{ marginTop:'20px', background: theme.background, color: theme.foreground }}>
          I am styled by Hooks {state} theme context!
        </button>
      </header>
    </div>
  );
}

export default App;

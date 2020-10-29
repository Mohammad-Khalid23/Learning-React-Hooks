import React, { useState, useEffect } from 'react';

function Form() {

  const [heading, setHeading] = useState('Khalid');

  /* React Hooks userEffect start*/
  //Use effect is work as a componentDidMount , componentDidUpdate and componentWillUnMount
  useEffect(() => {
    //worked as componentDidMount
    console.log("Component Did Mount");
    return () => {
      //worked as componentDidUpdate
      console.log("Component Did Update or componentWillUnMount");
    }
  }, []);

  return (
    <div className="App">
      <h2>My name is {heading}</h2>
      <input placeholder="Enter your name" onChange={(e) => setHeading(e.target.value)} />
    </div>
  );
}

export default Form;

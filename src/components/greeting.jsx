import React, { useEffect } from 'react';


function Greeting() {
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
  /* React Hooks userEffect end*/




  return (
    <div className="App">
      <h1>Learning React Hooks</h1>
    </div>
  );
}

export default Greeting;

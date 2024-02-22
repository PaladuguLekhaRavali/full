// 


// import React, { Component, useState } from 'react';

// const MyFunctionalComponent = () => {
//   const [color, setColor] = useState('red');

//   const changeColor = () => {
//     setColor('blue');
//   };

//   return (
//     <div>
//       <h2>{color}</h2>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   );
// };

// class Welcome extends Component {
//   constructor() {
//     super();
//     this.state = { color: 'red' };
//   }

//   render() {
//     return (
//       <div>
//         <h1>hihello</h1>
//         <h2>{this.state.color}</h2>
//         <MyFunctionalComponent /> {/* Using the functional component here */}
//       </div>
//     );
//   }
// }

// export default Welcome;

//
import React, { useState } from 'react'; 

function Elements() {
  const [name, setname] = useState('');
  const [id, setid] = useState('');
  const [branch, setbranch] = useState(''); 
  const [hobbies, sethob] = useState('');
  const [address, setaddress] = useState('');
  const [gen, setgen] = useState('');

  function handle(event) {
    event.preventDefault();
    setsubmitted(true);
  }

  const [submitted, setsubmitted] = useState(false);
  let submittedContent = null;
  if (submitted) {
    submittedContent = (
      <div>
       
        <p>name:, {name}</p>
        <p>password: {id}</p>
        <p>branch: {branch}</p>
        <p>Gender: {gen}</p>
        <p>Hobbies: {hobbies}</p>
        <p>Address: {address}</p>
      </div>
    );
  }


  const branches = ['CSE', 'ECE', 'IT', 'EE', 'Mech'];

  return (
    <div>
      <form onSubmit={handle}>
        <label>Entername</label>
        <input type="text" name="name" onChange={(e) => setname(e.target.value)} /><br />
        <label>enterpassword</label>
        <input type="password" name="pass" onChange={(e) => setid(e.target.value)} /><br />
        <label>Select branch</label> 
        <select name="branch" value={branch} onChange={(e) => setbranch(e.target.value)}> 
          <option value="">Select Branch</option>
          {branches.map((branchItem, index) => (
            <option key={index} value={branchItem}>{branchItem}</option>
          ))}
        </select><br />
        <label>Enter hobbies</label>
        <input type="textarea" name="hobb" onChange={(e) => sethob(e.target.value)} /><br />
        <label>Enter address</label>
        <input type="text" name="address" onChange={(e) => setaddress(e.target.value)} /><br />
        <label>Select gender</label><br />
        <label>Male</label>
        <input type="radio" name="gender" value="Male" onChange={(e) => setgen(e.target.value)} /> 
        <label>Female</label>
        <input type="radio" name="gender" value="Female" onChange={(e) => setgen(e.target.value)} /><br /> 
        <button type="submit">Submit</button>
      </form>
      {submittedContent}
    </div>
  );
}

export default Elements;
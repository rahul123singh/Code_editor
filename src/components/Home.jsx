// import React from 'react'
// import Header from './Header';
// import Code from './Code';
// import Result from './Result';

// function Home() {
//   return (
//     <>
//       <Header/>
//       <Code/>
//       <Result/>
//     </>
//   )
// }

// export default Home;

// Home.js
import React from 'react';
import Header from './Header';
import Code from './Code';
import Result from './Result';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <>
      <Header />
      <div className="code-container">
        <Code />
      </div>
      <Result />
    </>
  );
}

export default Home;


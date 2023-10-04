// // import React from 'react';
// // import {useContext} from 'react';
// // import Editor from './Editor'
// // import {Box,styled} from '@mui/material';
// // import { DataContext } from '../context/DataProvider';

// // const Container=styled(Box)`
// // display:flex;
// // background-color:#060606;
// // height:55vh;
// // `

// // const Code = () => {

// //   const {html,setHtml,css,setCss,js,setJs }=useContext(DataContext);
// //   return (
// //     <Container>
// //         <Editor
// //         heading="HTML"
// //         icon="/"
// //         colors="#FF3C41"
// //         value={html}
// //         onChange={setHtml}
// //         />
// //         <Editor
        
// //         heading="CSS"
// //         icon="*"
// //         colors="#0EBEFF"
// //         value={css}
// //         onChange={setCss}
// //         />
// //         <Editor
// //         heading="Javascript"
// //         icon="{}"
// //         colors="#FCD000"
// //         value={js}
// //         onChange={setJs}
// //         />
// //     </Container>
// //   )
// // }

// // export default Code

// import React from 'react';
// import { useContext } from 'react';
// import Editor from './Editor';
// import { Box, styled } from '@mui/material';
// import { DataContext } from '../context/DataProvider';

// const Container = styled(Box)`
//   display: flex;
//   background-color: #060606;
//   height: 55vh;

//   /* Media query for screens smaller than 600px */
//   @media only screen and (max-width: 600px) {
//     flex-direction: column; /* Change to a column layout */
//     height: auto; /* Allow the container to grow based on content */
//   }
// `;

// const Code = () => {
//   const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

//   return (
//     <Container>
//       <Editor
//         heading="HTML"
//         icon="/"
//         colors="#FF3C41"
//         value={html}
//         onChange={setHtml}
//       />
//       <Editor
//         heading="CSS"
//         icon="*"
//         colors="#0EBEFF"
//         value={css}
//         onChange={setCss}
//       />
//       <Editor
//         heading="Javascript"
//         icon="{}"
//         colors="#FCD000"
//         value={js}
//         onChange={setJs}
//       />
//     </Container>
//   );
// };

// export default Code;

import React from 'react';
import { useContext } from 'react';
import Editor from './Editor';
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 55vh;

  /* Media query for screens smaller than 600px */
  @media only screen and (max-width: 600px) {
    flex-direction: column; /* Change to a column layout */
    height: auto; /* Allow the container to grow based on content */
  }

  /* Media query for screens between 601px and 900px */
  @media only screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: row; /* Revert to a row layout */
    height: 45vh; /* Adjust the height to fit within the smaller screen */
  }
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        colors="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        colors="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="Javascript"
        icon="{}"
        colors="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;

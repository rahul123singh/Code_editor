// import React, { useContext, useEffect, useState } from 'react';
// import { DataContext } from '../context/DataProvider';
// import { Box, styled } from '@mui/material';

// const Container = styled(Box)`
//   height: 41vh;
// `;

// const Result = () => {
//   const [src, setSrc] = useState('');
//   const { html, css, js } = useContext(DataContext);

//   useEffect(() => {
//     const srcCode = `
//       <html>
//         <body>${html}</body>
//         <style>${css}</style>
//         <script>${js}</script>
//       </html>
//     `;
//     setSrc(srcCode);

//     localStorage.setItem('html', html);
//     localStorage.setItem('css', css);
//     localStorage.setItem('js', js);
//   }, [html, css, js]);

//   useEffect(() => {
//     const savedHtml = JSON.stringify(localStorage.getItem('html'));
//     const savedCss = JSON.stringify(localStorage.getItem('css'));
//     const savedJs = JSON.stringify(localStorage.getItem('js'));

//     if (savedHtml && savedCss && savedJs) {
//       const srcCode = `
//         <html>
//           <body>${savedHtml}</body>
//           <style>${savedCss}</style>
//           <script>${savedJs}</script>
//         </html>
//       `;
//       setSrc(srcCode);
//     }
//   }, [html,css,js]);

//   return (
//     <Container style={html || css || js ? null : { background: '#444857' }}>
//       <iframe
//         srcDoc={src}
//         title="output"
//         sandbox="allow-scripts"
//         frameBorder="0"
//         width="100%"
//         height="100%"
//       />
//     </Container>
//   );
// };

// export default Result;

import React, { useContext,useEffect } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box, styled } from '@mui/material';
import useLocalStorage from './LocalStorage'

const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [src, setSrc] = useLocalStorage('srcCode', '');
  const { html, css, js } = useContext(DataContext);

  const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js, setSrc, srcCode]);

  return (
    <Container style={html || css || js ? null : { background: '#444857' }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;

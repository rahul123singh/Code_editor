import React from 'react';
import {useContext} from 'react';
import Editor from './Editor'
import {Box,styled} from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container=styled(Box)`
display:flex;
background-color:#060606;
height:55vh;
`

const Code = () => {

  const {html,setHtml,css,setCss,js,setJs }=useContext(DataContext);
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
  )
}

export default Code
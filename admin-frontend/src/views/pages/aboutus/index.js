import React, { useState,useRef } from 'react';

import Grid from '@mui/material/Grid';
// project import
import MainCard from 'ui-component/cards/MainCard';
import JoditEditor from 'jodit-react';

export default function  AboutUs ()  {
    const editor = useRef(null);
    const [content, setContent] = useState();
return (
  <MainCard>
   <Grid>
   <JoditEditor ref={editor} value="AboutUs" onChange={(newContent) => setContent(newContent)} /> 
  </Grid>
  </MainCard>
)
}
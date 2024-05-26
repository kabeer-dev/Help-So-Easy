import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid,Divider, TextField } from '@mui/material';

import axios from 'utils/myAxios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

export default function CategoryModel({open,handleClose,  categoryId}) {
  const [name , setName] = React.useState()
  const [id , setId] = React.useState()
  const [edit , setEdit] = React.useState(false)

  const handleSubmit = async() => {
console.log(id)
    const response = await axios.post('/admin/Add_faq_category', {name, id}).catch((error) => {
      if (error.response) {
          console.error('Error Response:', error.response);
      } else {
          console.error('Error:', error.message);
      }
  });


    if(response && response.status === 200){
      handleClose()
    }
  }

  React.useEffect(() => {
    if(categoryId){
      console.log(categoryId)

      const getEditCategory = async() => {

        const response = await axios.post('/admin/edit_category', {categoryId}).catch((error) => {
          if (error.response) {
              console.error('Error Response:', error.response);
          } else {
              console.error('Error:', error.message);
          }
      });

      if(response && response.status === 200){
        console.log(response.data.data.edit_category)
        // setFormData(prevFormData => ({
        //   ...prevFormData,
        //   fk_faq_category_id: response.data.data.editFaq.fk_faq_category_id,
        //   question: response.data.data.editFaq.question,
        //   answer: response.data.data.editFaq.answer,
        //   id: response.data.data.editFaq.id
        // }));
        // setEdit(true)
        setName(response.data.data.edit_category.name)
        setId(response.data.data.edit_category.id)
        setEdit(true)
      }
    }
    getEditCategory()
    }
    
    

}, [])

  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <Typography variant='h2' sx={{color:"#06c404",pb:1}}>{(edit) ? 'Update Category' : 'Add Category'}</Typography>
        <Divider sx={{}}/>
        <input name='id' value={id} type='hidden'/>
          <Typography variant='h4' sx={{py:1.5,color:"#06c404"}}>
           Category Name
          </Typography>
          <TextField fullWidth id="outlined-basic" placeholder='Write Category Name here' variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
          
       <Grid container sx={{justifyContent:"right",pt:2}}><Button onClick={handleSubmit} sx={{background:"#06c404",color:"#FFFF",":hover":{
        background:"#06c404",color:"#FFFF",
       }}}>{(edit) ? 'Update' : 'Add'}</Button></Grid>
        </Box>
      </Modal>
    </Grid>
  );
}

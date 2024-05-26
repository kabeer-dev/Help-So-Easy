import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Grid, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

export default function FaqModal({open,handleClose, categories, editFaqId}) {

    const [name, setName] = React.useState('');
    const [edit, setEdit] = React.useState(false);

    const [formData, setFormData] = React.useState({
      id: '',
      fk_faq_category_id: '',
      question: '',
      answer: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formData);
      const response = await axios.post('/admin/add_faq', formData).catch((error) => {
        if (error.response) {
            console.error('Error Response:', error.response);
        } else {
            console.error('Error:', error.message);
        }
    });


    if(response && response.status === 200){
      handleClose()
    }

    };


    const handleChange = (event) => {
      setName(event.target.value );
      
    };

    React.useEffect(() => {
        const getEditFaq = async() => {
          if(editFaqId !== ''){
            const response = await axios.post('/admin/edit_faq', {editFaqId}).catch((error) => {
              if (error.response) {
                  console.error('Error Response:', error.response);
              } else {
                  console.error('Error:', error.message);
              }
          });
    
          if(response && response.status === 200){
            // console.log(response.data.data.editFaq.fk_faq_category_id)
            setFormData(prevFormData => ({
              ...prevFormData,
              fk_faq_category_id: response.data.data.editFaq.fk_faq_category_id,
              question: response.data.data.editFaq.question,
              answer: response.data.data.editFaq.answer,
              id: response.data.data.editFaq.id
            }));
            setEdit(true)
          }
        }else{
          console.log('editFaqId is empty');
        }
        }
        getEditFaq()
    
    }, [editFaqId])

  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit} >
          
        <Box sx={style}>
    
        <Typography variant='h1' sx={{color:"#06c404"}}>{(edit) ? 'Edit FAQ' : 'Add FAQ'}</Typography>
        <Divider sx={{}}/>
        <input name='id' value={formData.id} type='hidden'/>
          <Typography variant='h4' sx={{py:1,color:"#06c404"}}>
           Category Name
          </Typography>
          <FormControl fullWidth>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.fk_faq_category_id}
          name='fk_faq_category_id'
          onChange={handleInputChange}
        >
          {categories.map((categorie, index) => (
            <MenuItem value={categorie.id}>{categorie.name}</MenuItem>
          ))}
{/*           
          <MenuItem value={20}>Category 2</MenuItem>
          <MenuItem value={30}>Category 3</MenuItem> */}
        </Select>
      </FormControl>
          <Typography variant='h4' sx={{pt:1.6,pb:1,color:"#06c404"}}>
           Question
          </Typography>
          <TextField fullWidth id="outlined-basic" placeholder='Write Question here'  variant="outlined" onChange={handleInputChange} name='question' value={formData.question}/>
          <Typography variant='h4' sx={{pt:1.6,pb:1,color:"#06c404"}}>
          Description/Answer
          </Typography>
          <TextField fullWidth id="outlined-basic"
          placeholder='Write Description/Answer here'
          multiline
          rows={4}
          variant="outlined" 
          name='answer'
          onChange={handleInputChange}
          value={formData.answer}
          />
       <Grid container sx={{justifyContent:"right",pt:2}}><Button type='submit' sx={{background:"#06c404",color:"#FFFF",":hover":{
        background:"#06c404",color:"#FFFF",
       }}}>{(edit) ? 'Update' : 'Save'}</Button></Grid>
        </Box>
        </form>
      </Modal>
    </Grid>
  );
}

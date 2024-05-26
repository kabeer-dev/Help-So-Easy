import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    height: '300px',
    width: '350px',
    p: 4,
    borderRadius: '20px'
};

export default function SuccessModal({ title, description, btnName, img, showModal = true, path, options={} }) {
    const { someOption } = options;
    const [open, setOpen] = React.useState(true);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log('Console1233', showModal);
    }, []);

    return (
        <div>
           

            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                size="xs"
            >
                <Box sx={style}>

                    <Grid lg={12} >
                        <Grid lg={12} style={{ textAlign: 'center' }}>
                            <img alt="not" src={img} style={{ height: '70px', width: '70px' }} />
                        </Grid>
                    </Grid>

                    <Grid sx={{ textAlign: 'center', mt: 3}}>
                        <Typography variant="h3">{title}</Typography>
                    </Grid>
                    
                    <Grid>
                        <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center', color: '#5A5A5A'}}>
                            {description}
                        </Typography>
                    </Grid>
                    {/* <hr style={{ background: '#02B100', height: '2px' }} /> */}
                    <Grid sx={{ mt: 3, textAlign: 'center' }}>
                        <Button
                            onClick={() => { 
                                if(someOption){
                                    someOption(false)
                                }
                                window.location.reload();
                                navigate(`${path}`) 
                            }}
                            disableElevation
                            type="submit"
                            variant="contained"
                            style={{ background: '#02B100', width: '160px', alignSelf: 'center', color: '#FFFF' }}
                        >
                            {btnName}
                        </Button>
        
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

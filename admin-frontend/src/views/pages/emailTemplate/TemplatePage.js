import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { Stack, Grid, Button, FormControl, OutlinedInput, Typography } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import logo from "assets/images/logo.png";
import PlayStore from "assets/images/play-store-logo.png";
import AppStore from "assets/images/apple-app-store-logo.jpg";
import axios from 'utils/myAxios';
import SuccessModal from 'ui-component/modals/SuccessModal';
import tick from 'assets/images/tick.png';

function TemplatePage({ id, data, emailSubject, bccEmail }) {


    //   console.log(data)
    const [successModal, setSuccessModal] = useState(false)
    const editor = useRef(null);
    const [content, setContent] = useState(data);
    const [subject, setSubject] = useState(emailSubject);
    const [bcc, setBcc] = useState(bccEmail);

    const makeFale = (value) => {
        setSuccessModal(value)
    }

    const handleSubmit = async (id) => {

        const response = await axios.post('/admin/update_email_content', { id, subject, content, bcc }).catch((error) => {
            if (error.response) {
                console.error('Error Response:', error.response);
            } else {
                console.error('Error:', error.message);
            }
        });

        if (response && response.status === 200) {
           setSuccessModal(true)
           
        }
    }

    return (
        <SubCard>
            <Stack spacing={2}>
                <Grid container>
                    <Grid item xs={12} md={4} lg={2} xl={2}>
                        <Typography variant='h3' sx={{ color: "#06c404", mt: 1.5 }}>Email Subject: </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} lg={6} xl={6}>
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <OutlinedInput
                                id="subject"
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="Enter Your Email Subject"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={4} lg={2} xl={2}>
                        <Typography variant='h3' sx={{ color: "#06c404", mt: 1.5 }}>BCC Email(s): </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} lg={6} xl={6}>
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <OutlinedInput
                                id="subject"
                                type="text"
                                value={bcc}
                                onChange={(e) => setBcc(e.target.value)}
                                placeholder="e.g: email1@example.com, email2@example.com"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <JoditEditor ref={editor} value={content} onChange={(newContent) => setContent(newContent)} />
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "right" }}>
                    <Button style={{ background: '#02B100', border: 'none', color: '#FFFFFF' }} onClick={() => { handleSubmit(id) }}>Save</Button>
                </Grid>
            </Stack>

            {successModal === true ?
                <SuccessModal
                    title='Email Template Changed'
                    description='Congratulations! Email Template Changed changed Successfully.'
                    btnName="OK"
                    img={tick}
                    path='/email-template'
                    options={{ someOption: makeFale }}
                /> :
                ''}
        </SubCard>


    );
}

export default TemplatePage;



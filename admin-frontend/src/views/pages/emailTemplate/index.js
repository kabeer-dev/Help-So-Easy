import PropTypes from 'prop-types';
import React from 'react';
import {data,textData} from './EmailData';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid,  Tab, Tabs, TextField, Typography } from '@mui/material';

import image from 'assets/images/logo.png';
import deactivate from 'assets/images/AccountDeactivated.png';
// project imports
import useConfig from 'hooks/useConfig';
import { gridSpacing } from 'store/constant';

import TemplatePage from './TemplatePage';

import axios from 'utils/myAxios';

// tab content
function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 0
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}


// ================================|| UI TABS - VERTICAL ||================================ //

export default function EmailTempalte() {
    const theme = useTheme();
    const { borderRadius } = useConfig();

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [emailContents, setEmailContents] = React.useState([]);
    console.log(emailContents)


    React.useEffect(() => {
        const getEmailContents = async () => {
            const response = await axios.get('/admin/email_contents').catch((error) => {
                if (error.response) {
                    console.error('Error Response:', error.response);
                } else {
                    console.error('Error:', error.message);
                }
            });

            if(response && response.status === 200){
                console.log(response)
                const fetchedData = response.data.data.email_contents;
                setEmailContents(prevAllServices => [...prevAllServices, ...fetchedData]);
   
            }
        }

        getEmailContents()
    }, [])

    return (
        <div>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={4} md={3}>
                    <Tabs
                        style={{ backgroundColor: '#FFFFFF', height: '80vh', marginRight: '16px' }}
                        value={value}
                        onChange={handleChange}
                        orientation="vertical"
                        variant="scrollable"
                    >
                        {emailContents.map((row, index) => (
                            <Tab
                                key={index}
                                style={{ borderBottom: '1px solid #8A8A8A' }}
                                label={
                                    <Grid container direction="column">
                                        <Typography
                                            style={{ textAlign: 'left', padding: '10px', fontSize: '16px' }}
                                            variant="subtitle1"
                                            color="inherit"
                                        >
                                            <b>{row.slug}</b>
                                        </Typography>
                                    </Grid>
                                }
                                {...a11yProps(index)}
                            />
                        ))}
                        
                    </Tabs>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    {emailContents.map((row, index) => (
                        
                        <TabPanel value={value} index={index}>
                            <TemplatePage id={row.id} emailSubject={row.subject} data={row.content_longtext} bccEmail={row.bcc} />
                        </TabPanel>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}

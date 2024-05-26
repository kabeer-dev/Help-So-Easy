import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// project import
import MainCard from 'ui-component/cards/MainCard';
import TextField from '@mui/material/TextField';
import myAxios from 'utils/myAxios';

export default function GeneralSetting() {
    const [formData, setFormData] = useState({
        '1_1_customer_content': '',
        '1_1_helper_content': '',
        '7_43_content': '',
        '7_55_content': '',
        '11_61_content': '',
        '11_61_title': '',
        '12_62_content': '',
        '24_111_title_1': '',
        '24_111_title_2': '',
        '24_111_title_3': '',
        '24_111_title_4': '',
        '24_111_title_5': '',
        '24_111_title_6': '',
        '24_111_title_7': '',
        '24_111_title_8': ''
    });

    useEffect(() => {
        myAxios
            .get('/admin/get-general-settings-content')
            .then((res) => {
                const data = res.data;
                setFormData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = () => {
        console.log(formData);
        myAxios
            .post('/admin/save-general-settings-content', formData)
            .then(() => {
                console.log('General settings have been updated successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <MainCard>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h2" sx={{ color: '#05c103' }}>
                    Row 1
                </Typography>
                <Typography variant="h4" sx={{ py: 1 }}>
                    1_1_customer_content
                </Typography>
                <TextField
                    fullWidth
                    id="1_1_customer_content"
                    multiline
                    rows={4}
                    value={formData['1_1_customer_content']}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    1_1_helper_content
                </Typography>
                <TextField
                    fullWidth
                    id="1_1_helper_content"
                    multiline
                    rows={4}
                    value={formData['1_1_helper_content']}
                    onChange={handleChange}
                />
            </Grid>

            <Grid container spacing={2} sx={{ pt: 3 }}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Typography variant="h2" sx={{ color: '#05c103' }}>
                        Row 7
                    </Typography>
                    <Typography variant="h4" sx={{ py: 1 }}>
                        7_43_content
                    </Typography>
                    <TextField fullWidth id="7_43_content" multiline rows={4} value={formData['7_43_content']} onChange={handleChange} />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Typography variant="h4" sx={{ py: 1 }}>
                        7_55_content
                    </Typography>
                    <TextField fullWidth id="7_55_content" multiline rows={4} value={formData['7_55_content']} onChange={handleChange} />
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ pt: 3 }}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Typography variant="h2" sx={{ color: '#05c103' }}>
                        Row 11
                    </Typography>
                    <Typography variant="h4" sx={{ py: 1 }}>
                        11_61_title
                    </Typography>
                    <TextField fullWidth id="11_61_title" value={formData['11_61_title']} onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    11_61_content
                </Typography>
                <TextField fullWidth id="11_61_content" multiline rows={4} value={formData['11_61_content']} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h2" sx={{ color: '#05c103', py: 2 }}>
                    Row 12
                </Typography>
                <Typography variant="h4" sx={{ pb: 1 }}>
                    12_62_content
                </Typography>
                <TextField fullWidth id="12_62_content" multiline rows={4} value={formData['12_62_content']} onChange={handleChange} />
            </Grid>

            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h2" sx={{ color: '#05c103', py: 2 }}>
                    Row 24
                </Typography>
                <Typography variant="h4" sx={{ pb: 1 }}>
                    24_111_title_1
                </Typography>
                <TextField fullWidth id="24_111_title_1" value={formData['24_111_title_1']} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    24_111_title_2
                </Typography>
                <TextField fullWidth id="24_111_title_2" value={formData['24_111_title_2']} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    24_111_title_3
                </Typography>
                <TextField fullWidth id="24_111_title_3" value={formData['24_111_title_3']} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    24_111_title_4
                </Typography>
                <TextField fullWidth id="24_111_title_4" value={formData['24_111_title_4']} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    24_111_title_5
                </Typography>
                <TextField fullWidth id="24_111_title_5" value={formData['24_111_title_5']} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    24_111_title_6
                </Typography>
                <TextField fullWidth id="24_111_title_6" value={formData['24_111_title_6']} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    24_111_title_7
                </Typography>
                <TextField fullWidth id="24_111_title_7" value={formData['24_111_title_7']} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h4" sx={{ py: 1 }}>
                    24_111_title_8
                </Typography>
                <TextField fullWidth id="24_111_title_8" value={formData['24_111_title_8']} onChange={handleChange} />
            </Grid>

            <Grid sx={{ textAlign: 'end', pt: 2 }}>
                <Button
                    sx={{
                        background: '#0bd708',
                        color: '#FFFF',
                        px: 4,
                        ':hover': {
                            background: '#0bd708',
                            color: '#FFFF'
                        }
                    }}
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Grid>
        </MainCard>
    );
}

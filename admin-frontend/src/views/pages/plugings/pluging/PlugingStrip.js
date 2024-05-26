import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Button, Card, Chip, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import Avatar from '../../../../ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ModalStrip from '../model/ModalStrip';

const avatarImage = require.context('assets/images', true);

// styles
const FacebookWrapper = styled(Button)({
    padding: 8,
    background: 'rgba(66, 103, 178, 0.2)',
    '& svg': {
        color: '#4267B2'
    },
    '&:hover': {
        background: '#4267B2',
        '& svg': {
            color: '#fff'
        }
    }
});

const TwitterWrapper = styled(Button)({
    padding: 8,
    background: 'rgba(29, 161, 242, 0.2)',
    '& svg': {
        color: '#1DA1F2'
    },
    '&:hover': {
        background: '#1DA1F2',
        '& svg': {
            color: '#fff'
        }
    }
});

const LinkedInWrapper = styled(Button)({
    padding: 8,
    background: 'rgba(14, 118, 168, 0.12)',
    '& svg': {
        color: '#0E76A8'
    },
    '&:hover': {
        background: '#0E76A8',
        '& svg': {
            color: '#fff'
        }
    }
});

// ==============================|| USER SIMPLE CARD ||============================== //

const PlugingStrip = ({ avatar, name, status, col, btnName }) => {
    const [open, setOpen] = useState(false);

    const openModel = () => setOpen(true);
    const closeModel = () => setOpen(false);

    const theme = useTheme();
    const avatarProfile = avatar && avatarImage(`./${avatar}`);

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const onclick = () => {
        alert('hello');
    };

    return (
        <Card
            sx={{
                Width: '343px',
                Height: '269px',
                p: 1.2,
                background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.grey[100],
                '&:hover': {
                    border: `1px solid${theme.palette.success.main}`
                }
            }}
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs sx={{ mt: 3, ml: 3 }}>
                            <Avatar alt={name} src={avatarProfile} sx={{ width: 72, height: 72 }} />
                        </Grid>
                        <Grid item>
                            <IconButton size="small" sx={{ mt: 2, mr: -0.5 }} onClick={handleClick}>
                                <MoreVertIcon
                                    fontSize="small"
                                    color="inherit"
                                    aria-controls="menu-friend-card"
                                    aria-haspopup="true"
                                    sx={{ opacity: 0.6 }}
                                />
                            </IconButton>
                            <Menu
                                id="menu-simple-card"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                variant="selectedMenu"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} alignItems="center">
                    <Grid container>
                        <Grid item xs>
                            <Typography>
                                <h5 style={{ fontSize: '22px' }}>{name}</h5>
                            </Typography>
                        </Grid>
                        <Grid item sx={{ pt: 2 }}>
                            <Button
                                style={{
                                    color: '#FFFFFF',
                                    background: col,
                                    border: 'none',
                                    borderRadius: '4px',
                                    Width: '71px',
                                    Height: '30px'
                                }}
                                onClick={openModel}
                            >
                                {btnName}
                            </Button>
                            {open && <ModalStrip open={open} close={closeModel} />}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae alias consectetur non totam obcaecati
                            dolores.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid> */}
            {/* <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <FacebookWrapper fullWidth>
                                <FacebookIcon fontSize="small" />
                            </FacebookWrapper>
                        </Grid>
                        <Grid item xs={4}>
                            <TwitterWrapper fullWidth>
                                <TwitterIcon fontSize="small" />
                            </TwitterWrapper>
                        </Grid>
                        <Grid item xs={4}>
                            <LinkedInWrapper fullWidth>
                                <LinkedInIcon fontSize="small" />
                            </LinkedInWrapper>
                        </Grid>
                    </Grid> */}
            {/* </Grid> */}
        </Card>
    );
};

PlugingStrip.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    col: PropTypes.string,
    btnName: PropTypes.string
};

export default PlugingStrip;

import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultImage from 'assets/images/default-image.jpg'

// material-ui
import {
    Box,
    Avatar,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableSortLabel,
    TableRow,
    Typography,
    Stack,
    Button,
    Grid,
    TextField,
    InputAdornment,
    Radio,
    IconButton
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import axios from 'utils/myAxios';

// assets

import { DeleteOutline, Visibility, Edit, Star, Delete } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import User from 'assets/images/User.png';
// table data
// function createData(name, calories, fat, carbs, protein) {
//     return {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein
//     };
// }
function createData(id, serviceName, avatar, customerName, ratings, ratePerMin, status, createdAt) {
    return {
        id,
        serviceName,
        avatar,
        customerName,
        ratings,
        ratePerMin,
        status,
        createdAt
    };
}

const rows = [
    createData(1, 'Plumber', User, 'William', 3.5, 5, 'Active', '01-05-2023'),
    createData(2, 'Mechanic', User, 'William', 3.5, 10, 'Active', '01-05-2023'),
    createData(3, 'Plumber', User, 'William', 3.5, 5, 'Not Active', '01-05-2023'),
    createData(4, 'Cook', User, 'William', 3.5, 55, 'Not Active', '01-05-2023'),
    createData(5, 'Electrician', User, 'William', 3.5, 35, 'Active', '01-05-2023'),
    createData(6, 'Laundry', User, 'William', 3.5, 65, 'Active', '01-05-2023'),
    createData(7, 'Plumber', User, 'William', 3.5, 56, 'Active', '01-05-2023'),
    createData(8, 'Driver', User, 'William', 3.5, 13, 'Active', '01-05-2023'),
    createData(9, 'Plumber', User, 'William', 3.5, 90, 'Not Active', '01-05-2023'),
    createData(10, 'Cleaner', User, 'William', 3.5, 56, 'Active', '01-05-2023'),
    createData(11, 'Gardener', User, 'William', 3.5, 58, 'Active', '01-05-2023'),
    createData(12, 'Travel Guide', User, 'William', 3.5, 54, 'Active', '01-05-2023'),
    createData(13, 'Teacher', User, 'William', 3.5, 53, 'Not Active', '01-05-2023'),
    createData(14, 'Cook', User, 'William', 3.5, 51, 'Active', '01-05-2023'),
    createData(15, 'Cleaner', User, 'William', 3.5, 5, 'Active', '01-05-2023'),
    createData(16, 'Gardener', User, 'William', 3.5, 58, 'Not Active', '01-05-2023')
];

// table filter
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const getComparator = (order, orderBy) =>
    order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// table header
const headCells = [
    {
        id: 'id',
        numeric: true,
        disablePadding: false,
        label: 'No'
    },
    {
        id: 'serviceName',
        numeric: false,
        disablePadding: false,
        label: 'Service Name'
    },
    {
        id: 'customerName',
        numeric: false,
        disablePadding: false,
        label: 'Registered By'
    },
    {
        id: 'Ratings',
        numeric: false,
        disablePadding: false,
        label: 'Ratings'
    },
    {
        id: 'ratePerMin',
        numeric: false,
        disablePadding: false,
        label: 'Rate per min'
    },
    // {
    //     id: 'totalCalls',
    //     numeric: false,
    //     disablePadding: false,
    //     label: 'Total Calls'
    // },
    // {
    //     id: 'lastSevenDaysCalls',
    //     numeric: false,
    //     disablePadding: false,
    //     label: "Last 7 Days Calls"
    // },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status'
    },
    {
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Created at'
    },
    {
        id: 'action',
        numeric: false,
        disablePadding: false,
        label: 'Action'
    }
];

// ==============================|| TABLE - HEADER ||============================== //

function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        // align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

// ==============================|| TABLE - HEADER TOOLBAR ||============================== //

// const EnhancedTableToolbar = ({ numSelected }) => (
//     <Toolbar
//         sx={{
//             p: 0,
//             pl: 1,
//             pr: 1,
//             ...(numSelected > 0 && {
//                 color: (theme) => theme.palette.secondary.main
//             })
//         }}
//     >
//         {numSelected > 0 ? (
//             <Typography color="inherit" variant="subtitle1">
//                 {numSelected} selected
//             </Typography>
//         ) : (
//             <Typography variant="h6" id="tableTitle">
//                 ""
//             </Typography>
//         )}
//         <Box sx={{ flexGrow: 1 }} />
//         {numSelected > 0 && (
//             <Tooltip title="Delete">
//                 <IconButton size="large">
//                     <DeleteIcon />
//                 </IconButton>
//             </Tooltip>
//         )}
//     </Toolbar>
// );

// EnhancedTableToolbar.propTypes = {
//     numSelected: PropTypes.number.isRequired
// };

// ==============================|| TABLE - DATA TABLE ||============================== //

export default function Service() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const [totalServices, setTotalServices] = React.useState([]);
    console.log(totalServices)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const navigate = useNavigate();

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            if (selected.length > 0) {
                setSelected([]);
            } else {
                const newSelectedId = rows.map((n) => n.id);
                setSelected(newSelectedId);
            }
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        const selectedRowData = rows.filter((row) => newSelected.includes(row.id.toString()));
        setSelectedValue(selectedRowData);
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event?.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    React.useEffect(() => {
        const getServices = async() => {
            const response = await axios.get('/admin/all_service').catch((error) => {
                if (error.response) {
                    console.error('Error Response:', error.response);
                } else {
                    console.error('Error:', error.message);
                }
            });

            if(response && response.status === 200){
                // console.log(response.data.data.all_services);
                const fetchedData = response.data.data.all_services;
                setTotalServices(prevAllServices => [...prevAllServices, ...fetchedData]);
   
            }
        }
        getServices()
    }, [])

    const handleViewDetails = () => {
        window.location.href = process.env.REACT_APP_CLIENT_URL;
    }

    return (
        <MainCard
            content={false}
            title="All Services"
            // secondary={
            //     <Stack direction="row" spacing={2} alignItems="center">
            //         {/* <CSVExport data={selectedValue.length > 0 ? selectedValue : rows} filename="data-tables.csv" header={header} /> */}
            //         <SecondaryAction link="https://next.material-ui.com/components/tables/" />
            //     </Stack>
            // }
            secondary={
                <Grid item xs={12} sm={6}>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        // onChange={handleSearch}
                        placeholder="Search "
                        // value={search}
                        size="small"
                    />
                </Grid>
            }
        >
            <Paper sx={{ width: '100%', mb: 2 }}>
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}

                {/* table */}
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(totalServices, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((totalService, index) => {
                                    /** Make sure no display bugs if row isn't an OrderData object */
                                    if (typeof totalService === 'number') return null;
                                    const isItemSelected = isSelected(totalService.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, totalService.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={totalService.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                {index+1}
                                            </TableCell>
                                            <TableCell sx={{ color: '#212121' }}>
                                                <Grid container spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                                                    <Grid item>
                                                        <Avatar alt="User 1" src={(totalService.ServiceImages.length > 0) ? totalService.ServiceImages[totalService.ServiceImages.length - 1].image : defaultImage} />
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            {totalService.title}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell sx={{ color: '#616161' }}>
                                                <Grid container spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                                                    <Grid item>
                                                        <Avatar alt="User 1" src={totalService.User.avatar} />
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            {totalService.User.first_name}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell sx={{ color: '#02B100' }}>
                                                <Star sx={{ height: 10, width: 10 }} /> {totalService.overall_avg_rating}/5
                                            </TableCell>
                                            <TableCell sx={{ pr: 3 }}>USD {totalService.rate.toFixed(2)} /min</TableCell>
                                            {/* <TableCell sx={{ pr: 3 }}>0</TableCell>
                                            <TableCell sx={{ pr: 3 }}>0</TableCell> */}
                                            <TableCell sx={{ pr: 0 }}>
                                                {totalService.status_nm === 'Active' ? (
                                                    <Typography
                                                        sx={{
                                                            color: '#02B100',
                                                            backgroundColor: '#EDFFD9',
                                                            width: 50,
                                                            textAlign: 'center',
                                                            borderRadius: 4
                                                        }}
                                                    >
                                                        Active
                                                    </Typography>
                                                ) : (
                                                    <Typography
                                                        sx={{
                                                            color: '#616161',
                                                            backgroundColor: '#E1FFE0',
                                                            width: 70,
                                                            textAlign: 'center',
                                                            borderRadius: 4
                                                        }}
                                                    >
                                                        Non-Active
                                                    </Typography>
                                                )}
                                            </TableCell>
                                            <TableCell sx={{ color: '#616161' }}>{totalService.created_at}</TableCell>
                                            <TableCell sx={{ pr: 3 }}>
                                            <Visibility onClick={() => window.open(`${process.env.REACT_APP_CLIENT_URL}user/${totalService.User.user_id}/${totalService.url_title}`, '_blank')} sx={{ color: '#02B100', m: 0.8 }} />                                                {/* <Stack sx={{ display: 'inline' }}> */}
                                                    {/* <Edit sx={{ color: '#02B100', m: 0.8 }} />
                                                    <Delete sx={{ color: 'red', m: 0.8 }} /> */}
                                                {/* </Stack> */}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* table data */}
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </MainCard>
    );
}

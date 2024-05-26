import PropTypes from 'prop-types';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
    Box,
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
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import axios from 'utils/myAxios';

// assets

import {   Edit,  Delete, Receipt } from '@mui/icons-material';

import CategoryModel from './CategoryModel';

function createData(id, name, createdAt,  ) {
    return {
        id,
        name,
        createdAt,
    };
}

const rows = [
    createData(1, 'Plumber',  '01-05-2023', ),
    createData(2, 'Mechanic',  '01-05-2023', ),
    createData(3, 'Plumber',  '01-05-2023', ),
    createData(4, 'Cook', '01-05-2023',  ),
    createData(5, 'Electrician',  '01-05-2023', ),
    createData(6, 'Laundry', '01-05-2023',),
    createData(7, 'Plumber', '01-05-2023', ),
    createData(8, 'Driver',  '01-05-2023',),
    createData(9, 'Plumber', '01-05-2023', ),
    createData(10, 'Cleaner', '01-05-2023' ),
    createData(11, 'Gardener',  '01-05-2023'  ),
    createData(12, 'Travel Guide',  '01-05-2023',  ),
    createData(13, 'Teacher', '01-05-2023'  ),
    createData(14, 'Cook',  '01-05-2023', ),
    createData(15, 'Cleaner',  '01-05-2023',  ),
    createData(16, 'Gardener',  '01-05-2023', )
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
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Name'
    },
    {
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Created At'
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

export default function Catogery() {

  const [open, setOpen] = React.useState(false);


  const [refCategories, setRefCategories] = React.useState([])

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const [categoryId, setCategoryId] = React.useState();

    const getAllCategories = async () => {
        const response = await axios.get('/admin/Categories').catch((error) => {
            if (error.response) {
                console.error('Error Response:', error.response);
            } else {
                console.error('Error:', error.message);
            }
        });
  
        if(response && response.status === 200){
            console.log(response.data.data);
            const fetchedCategories = response.data.data.ref_categories;
            setRefCategories([ ...fetchedCategories])
  
        }
    }

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

    const handleOpen = (id) => {
        setCategoryId(id)
        setOpen(true);
    }
    const handleClose = () => { 
      
      setCategoryId()
      setOpen(false);
      getAllCategories();
    }

    const handleDelete = async (index) => { 
        const categoryId = index;
        const response = await axios.post('/admin/delete_Category', {categoryId}).catch((error) => {
            if (error.response) {
                console.error('Error Response:', error.response);
            } else {
                console.error('Error:', error.message);
            }
        });

        if(response && response.status === 200) {
            getAllCategories()
        }
    }

 

    React.useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <MainCard
            content={false}
            title="All Categories"
           secondary={
               
                <Grid >
                   <Button onClick={handleOpen}  sx={{background:"#06c404",color:"#FFFF",":hover":{
                    background:"#06c404",color:"#FFFF",
                   }}}>Add Category</Button>
                </Grid>
            }
        >

         {open && <CategoryModel open={open} handleClose={handleClose} categoryId={categoryId || ''}/>}
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
                            {stableSort(refCategories, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((refCategorie, index) => {
                                    /** Make sure no display bugs if row isn't an OrderData object */
                                    if (typeof refCategorie === 'number') return null;
                                    const isItemSelected = isSelected(refCategorie.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, refCategorie.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={index}
                                            selected={isItemSelected}
                                        >
                                            <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                {index + 1}
                                            </TableCell>
                                            <TableCell sx={{ color: '#212121' }}>{refCategorie.name}</TableCell>
                                            <TableCell sx={{ color: '#616161' }}>
                                               {refCategorie.created_at}
                                            </TableCell>
                                            <TableCell sx={{ }}>
                                                <Stack sx={{ display: 'inline',cursor:"pointer" }}>
                                                  
                                                    <Edit onClick={()=> handleOpen(refCategorie.id)} sx={{ color: '#02B100', m: 0.8 }} />
                                                    <Delete onClick={() => handleDelete(refCategorie.id)} sx={{ color: 'red', m: 0.8 }} />
                                                </Stack>
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

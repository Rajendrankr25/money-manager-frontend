import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { API } from '../global';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function ExpTable() {

    const [expData, setExpData] = useState([]);
    const navigate = useNavigate();

    const getExpenses = () => {
        fetch(`${API}/expenses`, { method: "GET" })
            .then((data) => data.json())
            .then((expenses) => setExpData(expenses));
    }

    useEffect(() => getExpenses(), []);

    const deleteExp = (expId) => {
        fetch(`${API}/expenses/${expId}`, {
            method: "DELETE"
        }).then((dt) => getExpenses());
    };

    return (
        <TableContainer component={Paper} className='exp-table'>
            <h3>Expenses Details</h3>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Expense Description</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Modify/Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expData.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell>{row.expdesc}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => navigate(`/expenses/edit/${row._id}`)}>
                                    <EditIcon color='success' />
                                </IconButton>
                                <IconButton color='error'
                                    onClick={() => deleteExp(row._id)}
                                ><DeleteIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
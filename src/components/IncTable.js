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

export function IncTable() {

    const [incData, setIncData] = useState([]);
    const navigate = useNavigate();

    const getIncome = () => {
        fetch(`${API}/income`, { method: "GET" })
            .then((data) => data.json())
            .then((income) => setIncData(income));
    }

    useEffect(() => getIncome(), []);

    const deleteInc = (incId) => {
        fetch(`${API}/income/${incId}`, {
            method: "DELETE"
        }).then(() => getIncome());
    };

    return (
        <TableContainer component={Paper} className='inc-table'>
            <h3>Income Details</h3>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Income Description</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Modify</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {incData.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell>{row.incdesc}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => navigate(`/income/edit/${row._id}`)}>
                                    <EditIcon color='success' />
                                </IconButton>
                                <IconButton color='error'
                                    onClick={() => deleteInc(row._id)}
                                ><DeleteIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
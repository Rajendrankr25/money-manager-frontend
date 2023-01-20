import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function ExpTable({ expdata }) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, textAlign: "center" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Sl No</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Expense Description</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expdata.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.expdesc}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
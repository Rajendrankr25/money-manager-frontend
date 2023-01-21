import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Dropdown() {
    const [report, setReport] = React.useState('');

    const handleChange = (event) => {
        setReport(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl sx={{ width: 250 }}>
                <InputLabel id="select-report">Select Expenditure Type</InputLabel>
                <Select
                    labelId="select-report"
                    id="select-report"
                    value={report}
                    label="Select Expenditure Type"
                    onChange={handleChange}
                >
                    <MenuItem value={7}>Weekly income and expenditure</MenuItem>
                    <MenuItem value={30}>Monthly income and expenditure</MenuItem>
                    <MenuItem value={365}>Yearly income and expenditure</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
import { Button, TextField } from "@mui/material";

export function AddIncome() {
    return (
        <form className="addincome-form">
            <h3>Add Income</h3>
            <div>
                <label for="date">Date ---</label>
                <input type="date" name="date" />
            </div>
            <TextField label="Income Description" variant="outlined" />
            <TextField label="Enter Amount" variant="outlined" />
            <Button variant="contained">Submit</Button>
        </form>
    )
}
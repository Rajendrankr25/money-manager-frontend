import { Button, TextField } from "@mui/material";


export function AddExp() {
    return (
        <form className="addexp-form">
            <h3>Add Expenses</h3>
            <div>
                <label for="date">Expense Date ---</label>
                <input type="date" name="date" />
            </div>
            <TextField label="Expense Description" variant="outlined" />
            <TextField label="Enter Amount" variant="outlined" />
            <Button variant="contained">Submit</Button>
        </form>
    )
}
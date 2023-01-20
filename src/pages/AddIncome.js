import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddIncome({ incData, setIncData }) {

    const [date, setDate] = useState("");
    const [incdesc, setIncDesc] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

    const addIncome = () => {
        const newInc = {
            date: date,
            incdesc: incdesc,
            amount: amount
        };
        setIncData([...incData, newInc]);
        navigate("/");
        console.log(newInc);
    };

    return (
        <form className="addincome-form">
            <h3>Add Income</h3>
            <TextField label="" variant="outlined" type={"date"}
                onChange={(event) => setDate(event.target.value)}
            />
            <TextField label="Expense Description" variant="outlined"
                onChange={(event) => setIncDesc(event.target.value)}
            />
            <TextField label="Enter Amount" variant="outlined"
                onChange={(event) => setAmount(event.target.value)}
            />
            <Button variant="contained" onClick={addIncome}>Submit</Button>
        </form>
    )
}
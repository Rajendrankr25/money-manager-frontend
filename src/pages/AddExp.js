import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function AddExp({ expData, setExpData }) {

    const [date, setDate] = useState("");
    const [expdesc, setExpDesc] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

    const addExpense = () => {
        const newExp = {
            date: date,
            expdesc: expdesc,
            amount: amount
        };
        setExpData([...expData, newExp]);
        navigate("/");
        console.log(newExp);
    };

    return (
        <div className="addexp-form">
            <h2>Add Expenses</h2>
            <TextField label="" variant="outlined" type={"date"}
                onChange={(event) => setDate(event.target.value)}
            />
            <TextField label="Expense Description" variant="outlined"
                onChange={(event) => setExpDesc(event.target.value)}
            />
            <TextField label="Enter Amount" variant="outlined"
                onChange={(event) => setAmount(event.target.value)}
            />
            <Button variant="contained" onClick={addExpense}>Submit</Button>
        </div>
    )
}
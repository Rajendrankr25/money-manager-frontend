import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from '../global';

export function AddExp() {

    const [date, setDate] = useState("");
    const [expdesc, setExpDesc] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

    const addExpense = () => {
        const newExp = [{
            date: date,
            expdesc: expdesc,
            amount: amount
        }];
        addNewExp(newExp);
    };

    const addNewExp = (newExp) => {
        fetch(`${API}/expenses`, {
            method: "POST",
            body: JSON.stringify(newExp),
            headers: { "Content-type": "application/json" },
        }).then(() => navigate("/"));
    }

    return (
        <div>
            <Card className="addexp-form">
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
            </Card>
        </div>
    )
}
import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from '../global';

export function AddIncome() {

    const [date, setDate] = useState("");
    const [incdesc, setIncDesc] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

    const addIncome = () => {
        const newInc = [{
            date: date,
            incdesc: incdesc,
            amount: amount
        }];
        addNewInc(newInc);
    };

    const addNewInc = (newInc) => {
        fetch(`${API}/income`, {
            method: "POST",
            body: JSON.stringify(newInc),
            headers: { "Content-type": "application/json" },
        }).then(() => navigate("/"));
    }

    return (
        <div>
            <Card className="addincome-form">
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
            </Card>
        </div>
    )
}
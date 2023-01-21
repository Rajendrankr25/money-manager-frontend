import { Button, Card, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from '../global';

export function ExpEdit() {

    const { id } = useParams();
    const [exp, setExp] = useState(null);

    useEffect(() => {
        fetch(`${API}/expenses/${id}`, { method: "GET" })
            .then((data) => data.json())
            .then((ex) => setExp(ex));
    }, []);

    return (
        <div>
            {exp ? <EditExp exp={exp} /> : "Loading!!!"}
        </div>
    )
}

export function EditExp({ exp }) {

    const [date, setDate] = useState(exp.date);
    const [expdesc, setExpDesc] = useState(exp.expdesc);
    const [amount, setAmount] = useState(exp.amount);

    const navigate = useNavigate();

    const editExpense = () => {
        const updatedExp = {
            date: date,
            expdesc: expdesc,
            amount: amount
        };
        editExp(updatedExp);
    };

    const editExp = (updatedExp) => {
        fetch(`${API}/expenses/${exp._id}`, {
            method: "PUT",
            body: JSON.stringify(updatedExp),
            headers: { "Content-type": "application/json" },
        }).then(() => navigate("/"));
    }

    return (
        <div>
            <Card className="addexp-form">
                <h2>Edit Expense</h2>
                <TextField label="" variant="outlined" type={"date"}
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <TextField label="Expense Description" variant="outlined"
                    value={expdesc}
                    onChange={(event) => setExpDesc(event.target.value)}
                />
                <TextField label="Enter Amount" variant="outlined"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
                <Button variant="contained" onClick={editExpense}>Submit</Button>
            </Card>
        </div>
    )
}
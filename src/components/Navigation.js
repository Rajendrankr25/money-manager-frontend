import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export function Navigation() {

    const navigate = useNavigate();

    return (
        <div>
            <AppBar position="static" className="app-bar">
                <Toolbar className="nav-items">
                    <div className="logo-container" onClick={() => navigate("/")}>
                        <img src="https://icons-for-free.com/download-icon-india+indian+money+rs+rupee+icon-1320184810832447831_512.png"
                            alt="logo" width={"40"} height={"40"} /><br />
                        <span className="nav-logo-text">Money Manager</span>
                    </div>
                    <div>
                        <Button color="inherit" onClick={() => navigate("/")}><HomeIcon /></Button>
                        {/* <Button color="inherit" onClick={() => navigate("/addexp")}>Add Expenses</Button> */}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
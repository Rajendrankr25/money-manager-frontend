import { Card } from "@mui/material";
import { Dropdown } from "../components/Dropdown";
import { ExpPopModal } from "../components/ExpPopModal";
import { IncPopModal } from "../components/IncPopModal";
import { PopModal } from "../components/PopModal";

export function Home() {
    return (
        <div>
            <div className="home-container">
                <br />
                <div className="pop-btn">
                    <PopModal />
                </div>
                <Card className="home-card">
                    <h1>Hi Welcome!!!</h1>
                    <h2>Money Manager Dashboard</h2>
                    <br />
                    <HomeDiv />
                    <br />
                    <Dropdown />
                    <br />
                </Card>
            </div>
        </div>
    )
}

function HomeDiv() {
    return (
        <div className="homediv-container">
            <div>
                <ExpPopModal />
            </div>
            <div>
                <IncPopModal />
            </div>
        </div>
    )
}
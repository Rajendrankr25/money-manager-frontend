import { Dropdown } from "../components/Dropdown";
import { ExpTable } from "../components/ExpTable";
import { PopModal } from "../components/PopModal";

export function Home({ expdata }) {
    return (
        <div>
            <div className="home-container">
                <br />
                <div className="pop-btn">
                    <PopModal />
                </div>
                <h1>Hi Welcome!!!</h1>
                <h2>Money Manager Dashboard</h2>
                <br />
                <Dropdown />
                <br />
                <ExpTable expdata={expdata} />
                <br />
            </div>
        </div>
    )
}
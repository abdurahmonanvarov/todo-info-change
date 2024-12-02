import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function MainLoyout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLoyout
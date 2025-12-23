import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


export default function GeneralLayouts() {
    return (
        <>
        <NavBar />
        <Outlet />
        <Footer />
        </>
    )
}
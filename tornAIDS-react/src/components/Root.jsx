import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Root() {
    return (
        <div>
            <Navbar />
            {/* will either be <Home> or <Settings> */}
            <Outlet />
            <Footer />
        </div>
    );
}
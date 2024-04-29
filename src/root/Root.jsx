import { Outlet } from "react-router-dom";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </>
    );
};

export default Root;
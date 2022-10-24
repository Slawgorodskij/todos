import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="content px-6 mt-6" style={{minHeight:'70vh'}}>
                <Outlet />
            </main>        
            <Footer />
        </>
    );
}
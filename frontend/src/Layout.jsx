import { Navbar } from "./Components/Navbar"
import { Outlet } from "react-router-dom"


export function Layout(){

    return (
        <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        </div>
    )
}
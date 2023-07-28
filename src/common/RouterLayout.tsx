import { Outlet } from "@mui/icons-material"
import NavBar from "./NavBar"

export const RouterLayout: React.FC<{}> = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
import React, { FC } from "react"
import { Outlet } from "@mui/icons-material"
import NavBar from "./NavBar"

export const RouterLayout: FC<{}> = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
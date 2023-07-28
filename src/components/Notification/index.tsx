import { Snackbar, Alert, AlertColor } from "@mui/material"
import { FC } from "react"

type NotificationProps = {
    open: boolean,
    msg: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}
export const Notification : FC<NotificationProps> = ({open, msg, severity, handleClose}) => {
    return (
        <Snackbar 
                anchorOrigin={{vertical:"top", horizontal:"center"}} 
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
            >
            <Alert onClose={handleClose} severity={severity}>
            </Alert>
        </Snackbar>
    )
}
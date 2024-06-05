import { ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import classes from "./modal.module.css"

interface ModalProps {
    children: ReactNode,
    open: boolean,
    onClose: () => void
}

export const Modal = ({children, open, onClose}: ModalProps) =>{
    const dialog = useRef<HTMLDialogElement>(null!);

    useEffect(()=>{
        if (open) {
            dialog.current?.showModal()
        } else {
            dialog.current?.close();
        }

    }, [open]);

    const modalRoot = document.getElementById('modal');

    if (!modalRoot){
        console.error("Neexistuje")
        return null;
    }

    return createPortal(<dialog className={classes.modal} ref = {dialog}>{children}</dialog>, modalRoot);
}
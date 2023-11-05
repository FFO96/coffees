'use client'
import { ReactNode, createContext, useContext, useState } from "react";
import { ErrorModal } from "../elements/ErrorModal";


type Props = {
    children: ReactNode;
};

export const ErrorContext = createContext({
    showError: (message: string) => { },
    closeError: () => { },
});

export const ErrorProvider = ({ children }: Props) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");

    function showError(message: string) {
        setShow(true);
        setMessage(message);
    }

    function closeError() {
        setShow(false);
        setMessage("");
    }

    return (
        <ErrorContext.Provider value={{ showError, closeError }}>
            {show && <ErrorModal closeError={closeError} message={message} />}
            {children}
        </ErrorContext.Provider>
    );
};
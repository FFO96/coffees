import { ErrorContext } from "@/components/wrappers/ErrorProvider";
import { useContext } from "react";

export const useErrorModal = () => {
    const context = useContext(ErrorContext);
    return context;
};
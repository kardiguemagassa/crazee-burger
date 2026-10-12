
import React, { createContext, useContext, useState } from "react"

type ModalContextType = {
    isModalKitchenVisible: boolean
    setIsModalKitchenVisible: (isModalKitchenVisible: boolean) => void
}

//1. Créer le contexte
export const ModalContext = createContext<ModalContextType>({
    isModalKitchenVisible: false,
    setIsModalKitchenVisible: () => { }
})


//2. Créer le provider
export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isModalKitchenVisible, setIsModalKitchenVisible] = useState(false)

    const modalContextValue: ModalContextType = {
        isModalKitchenVisible,
        setIsModalKitchenVisible
    }

    return (
        <ModalContext.Provider value={modalContextValue}>{children}</ModalContext.Provider>
    )
}

//3. Créer le hook
export const useModalContext = () => {
    const modalContextValue = useContext(ModalContext)
    if (!modalContextValue) {
        throw new Error("useModalContext must be used within a ModalContextProvider")
    }
    return modalContextValue
}
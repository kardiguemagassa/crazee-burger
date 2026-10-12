import { OrderContextProvider } from "@/context/OrderContext"
import OrderPage from "../OrderPage"
import { ModalContextProvider } from "@/context/ModalContext"

export const OrderPageContextWrapper = () => {
    return (
        <OrderContextProvider>
            <ModalContextProvider>
                <OrderPage />
            </ModalContextProvider>
        </OrderContextProvider>
    )
}

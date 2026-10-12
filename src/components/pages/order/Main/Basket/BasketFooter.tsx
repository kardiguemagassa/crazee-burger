import Header from "@/components/reusable-ui/Header"
import { useOrderContext } from "@/context/OrderContext"
import { calculateSumToPay } from "./BasketHeader/helper"
import { formatPrice } from "@/utils/maths"
import CasinoEffect from "@/components/reusable-ui/CasinoEffect"
import Button from "@/components/reusable-ui/Button"
import { IoChevronForward } from "react-icons/io5"
import { isEmpty } from "@/utils/array"
import { useModalContext } from "@/context/ModalContext"
import { useParams } from "react-router-dom"

export default function BasketFooter() {
  const { basket, products, menus, emptyBasket } = useOrderContext()
  const { setIsModalKitchenVisible } = useModalContext()
  const { username } = useParams()

  const sumToPay = calculateSumToPay(basket, products, menus)

  const handleOnClick = async () => {
    setIsModalKitchenVisible(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    username && emptyBasket(username)
  }

  return (
    <Header className="basket-footer">
      <Button onClick={handleOnClick} className="basket-footer-button" disabled={isEmpty(basket)}>
        <div className="button-content">
          <div className="left-content">
            <CasinoEffect count={formatPrice(sumToPay)} className="casino-effect" />
          </div>
          <div className="right-content">
            <span className="label-text">Envoyer</span>
            <span className="arrow-right">
              <IoChevronForward />
            </span>
          </div>
        </div>
      </Button>
    </Header>
  )
}
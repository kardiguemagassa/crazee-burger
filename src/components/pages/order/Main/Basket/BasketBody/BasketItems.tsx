import styled from "styled-components"
import { BASKET_MESSAGE, EMPTY_PRODUCT, IMAGE_COMING_SOON } from "@/constants/product"
import BasketCard from "./BasketCard"
import { useOrderContext } from "@/context/OrderContext"
import { checkIfProductIsClicked } from "../../MainLeftSide/CatalogProducts/helper"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { basketAnimation } from "@/theme/animations"
import { formatPrice } from "@/utils/maths"
import { convertStringToBoolean } from "@/utils/string"
import { useParams } from "react-router-dom"
import { Product } from "@/types/Product"
import { getBasketItem } from "./helper"
import { isMenuType, isProductType } from "@/utils/typeGuards"
import { EMPTY_MENU } from "@/constants/menu"

export default function BasketItems() {
    const {
        basket,
        isModeAdmin,
        handleDeleteBasketProduct,
        products,
        handleProductSelected,
        productSelected,
        menus,
        handleMenuSelected,
        setProductSelected,
        toggleMenusCategory,
        setMenuSelected,
        toggleAllCategories,
        menuSelected,
    } = useOrderContext()

    const { username } = useParams()

    const handleOnDelete = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
        event.stopPropagation()
        username && handleDeleteBasketProduct(id, username)
    }

    const handleCardClick = (basketItemId: string) => {
        if (!isModeAdmin) return
        const itemFound = getBasketItem(basketItemId, products, menus)
        if (!itemFound) return

        if (isMenuType(itemFound)) {
            handleMenuSelected(itemFound.id)
            setProductSelected(EMPTY_PRODUCT) // pour avoir un seul article sélectionné dans le panier à la fois
            toggleMenusCategory()
            return
        }
        if (isProductType(itemFound)) {
            handleProductSelected(itemFound.id)
            setMenuSelected(EMPTY_MENU) // pour avoir un seul article sélectionné dans le panier à la fois
            toggleAllCategories()
            return
        }
    }

    const getPrice = (product: Product) => {
        return convertStringToBoolean(product.isAvailable)
            ? formatPrice(product.price)
            : BASKET_MESSAGE.NOT_AVAILABLE
    }

    return (
        <TransitionGroup component={BasketItemsStyled} className={"transition-group"}>
            {basket.map((basketProduct) => {
                if (products === undefined || menus === undefined) return <></>
                const basketItem = getBasketItem(basketProduct.id, products, menus)
                if (!basketItem) return <></>
                const isMenu = "products" in basketItem
                return (
                    <CSSTransition
                        appear={true}
                        classNames={"animation-basket"}
                        key={basketProduct.id}
                        timeout={300}
                    >
                        <div className="card-container">
                            <BasketCard
                                key={basketItem.id}
                                {...basketItem}
                                imageSource={basketItem.imageSource ? basketItem.imageSource : IMAGE_COMING_SOON}
                                quantity={basketProduct.quantity}
                                onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                                isClickable={isModeAdmin}
                                onClick={() => handleCardClick(basketProduct.id)}
                                isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id, menuSelected.id)}
                                className={"card"}
                                price={getPrice(basketItem)}
                                isPublicised={convertStringToBoolean(basketItem.isPublicised)}
                                isMenu={isMenu}
                            />
                        </div>
                    </CSSTransition>
                )
            })}
        </TransitionGroup >
    )
}

const BasketItemsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    position: relative;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }

    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
  }

  ${basketAnimation}
`

import styled from "styled-components"
import { theme } from "@/theme/theme"
import { BASKET_MESSAGE } from "@/constants/product"
import { Loader } from "@/components/reusable-ui/Loader"

type EmptyBasketProps = {
  isLoading: boolean
}

export default function EmptyBasket({ isLoading }: EmptyBasketProps) {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">
        {isLoading ? <Loader size="P3" /> : BASKET_MESSAGE.EMPTY}
      </span>
    </EmptyBasketStyled>
  )
}

const EmptyBasketStyled = styled.div`
  flex: 1;
  background: transparent;

  .empty-message {
    display: flex;
    height: calc(95vh - 10vh - 70px - 110px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`

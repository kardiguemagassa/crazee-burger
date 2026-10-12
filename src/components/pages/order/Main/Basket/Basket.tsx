import styled from "styled-components"
import { theme } from "@/theme/theme"
import BasketHeader from "./BasketHeader/BasketHeader"
import BasketFooter from "./BasketFooter"
import BasketBody from "./BasketBody/BasketBody"

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader className="basket-header" />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
  border-bottom-left-radius: 0;
  height: 85vh;
  /* border: 1px solid red; */

  .basket-header {
    min-height: 70px;
  }

  .basket-footer {
    /* position: sticky; */
    background-color: transparent;
    height: 70px;
    /* border: 3px solid turquoise; */
    padding: 20px 16px;
    border-bottom-left-radius: 0;
  }

  .basket-footer-button {
    display: flex;
    align-items: center;
    width: 100%;
    /* border: 1px solid blue; */

    .button-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      /* border: 1px solid red; */
      margin-top: -5px; // rustine de ouf
      margin-bottom: -5px; // rustine de ouf
    }

    .label-container {
      width: 100%;
    }

    .left-content {
      /* border: 1px solid red; */
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
      display: flex;
    }

    .right-content {
      /* min-height: 20px; */
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;

      .label-text {
        /* display: flex; */
        /* align-items: center; */
        /* justify-content: center; */
        font-size: ${theme.fonts.size.P3bis};
        font-weight: ${theme.fonts.weights.semiBold};
        text-transform: none;
        /* letter-spacing: 0.5px; */
        /* font-family: "Open Sans", sans-serif; */
        font-family: ${theme.fonts.family.stylish};
        max-width: 100px;
        white-space: normal;
        line-height: 1.4;
      }

      .arrow-right {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 6px;
        font-size: ${theme.fonts.size.P3};
      }
    }
  }

  .head {
    /* position: sticky; */
    bottom: 0;
  }
`

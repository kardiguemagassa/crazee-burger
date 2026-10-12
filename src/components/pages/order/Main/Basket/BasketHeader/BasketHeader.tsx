import styled from "styled-components"
import { theme } from "@/theme/theme"
import Header from "@/components/reusable-ui/Header"

export default function BasketHeader({ className }: { className?: string }) {

  return (
    <Header className={className}>
      <BasketHeaderStyled>
        <span>Commande client</span>
      </BasketHeaderStyled>
    </Header>
  )
}

const BasketHeaderStyled = styled.div`
  /* height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P3};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`
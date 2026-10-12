import styled from "styled-components"
import { theme } from "@/theme/theme"
import Button from "@/components/reusable-ui/Button"

type EmptyCatalogProductsAdminProps = {
  onReset?: React.MouseEventHandler<HTMLButtonElement>
}

export default function EmptyCatalogProductsAdmin({ onReset }: EmptyCatalogProductsAdminProps) {
  return (
    <EmptyProductsStyled>
      <span className="title">Plus de produit ?</span>
      <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
      <Button label={"Générer de nouveaux produits"} onClick={onReset} />
    </EmptyProductsStyled>
  )
}

const EmptyProductsStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // permet de diminuer la largeur du bouton resetProducts
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }

  button {
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    width: auto;
  }
`

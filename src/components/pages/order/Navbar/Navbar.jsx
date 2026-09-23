import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide.jsx"
import Logo from "../../../reusable-ui/Logo.jsx"
import { theme } from "../../../../theme/index.jsx"
import { refreshPage } from "../../../../utils/window.jsx"

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <Logo className="logo-order-page" onClick={() => refreshPage()} />
            <NavbarRightSide username={username} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    /* align-items: center; */

    .logo-order-page {
        cursor: pointer;
    }
`

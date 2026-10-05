import styled from "styled-components"
import { theme } from "@/theme/theme"
import { PropsWithChildren } from "react"

// 1e méthode : la méthode classique
// type HeaderProps = {
//   children: React.ReactNode
// }

// 2e méthode : PropsWithChildren

export default function Header({ children }: PropsWithChildren) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`

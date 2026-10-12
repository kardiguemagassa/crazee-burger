import styled, { css } from "styled-components"
import { theme } from "../../theme/theme"
import { ComponentProps } from "react"
import { Loader } from "./Loader"

type ButtonVersion = "normal" | "success"

type ButtonProps = {
  label?: string
  Icon?: JSX.Element
  version?: ButtonVersion
  isLoading?: boolean
} & ComponentProps<"button">

export default function Button({
  isLoading,
  label,
  Icon,
  className,
  version = "normal",
  onClick,
  children,
  disabled,
}: ButtonProps) {

  return (
    <ButtonStyled
      className={className}
      version={version}
      isLoading={isLoading}
      onClick={onClick}
      disabled={Boolean(isLoading) || Boolean(disabled)}
    >
      <div className="label-container">
        {isLoading ? (
          <Loader color={theme.colors.white} />
        ) : (
          <>
            {label ? (
              <div className="label-container">
                <span>{label}</span>
                {Icon && <div className="icon">{Icon}</div>}
              </div>
            ) : (
              children
            )}
          </>
        )}
      </div>
    </ButtonStyled>
  )
}

type ButtonStyledProps = {
  version: ButtonVersion
  isLoading?: boolean
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ version }) => extraStyle[version]};
  &:disabled {
    opacity: ${({ isLoading }) => (isLoading ? "100%" : "40%")};
  }
`

const extraStyleNormal = css`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #ff9f1b;
  border: 1px solid #ff9f1b;
  cursor: pointer;

  .label-container {
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 20px; */
  }

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  :active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &:disabled {
    opacity: 40%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  :hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  :active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`
const extraStyle = {
  normal: extraStyleNormal,
  success: extraStyleSuccess,
}

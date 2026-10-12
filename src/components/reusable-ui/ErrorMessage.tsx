import { theme } from "@/theme/theme";
import styled from "styled-components";

export const ErrorMessage = ({ error }: { error: string }) => {
    return (
        <ErrorMessageStyled className="error-message">{error}</ErrorMessageStyled>
    )
}

const ErrorMessageStyled = styled.span`
    color: ${theme.colors.red};
    font-family: ${theme.fonts.family.openSans};
    font-size: ${theme.fonts.size.P0};
`;
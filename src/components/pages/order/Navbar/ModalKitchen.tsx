import Button from "@/components/reusable-ui/Button"
import { Modal } from "@/components/reusable-ui/Modal"
import { useModalContext } from "@/context/ModalContext"
import { theme } from "@/theme/theme"
import styled from "styled-components"

export const Checkmark = ({ size = 80 }) => (
    <div className="checkmark-wrapper">
        <svg width={size} height={size} viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" fill={theme.colors.primary} />
            <path d="M20 34 L30 44 L44 24" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
    </div>
)

export const ModalKitchen = () => {
    const { setIsModalKitchenVisible } = useModalContext()
    return (
        <Modal>
            <ModalKitchenStyled>
                <Checkmark size={120} />
                <h1 className="title">Commmande envoyée avec succès !</h1>
                <span className="subtitle">La cuisine a bien reçu la commande.</span>
                <div className="buttons">
                    <Button onClick={() => setIsModalKitchenVisible(false)}>Fermer</Button>
                </div>
            </ModalKitchenStyled>
        </Modal>
    )
}

const ModalKitchenStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem 0 0.8rem;
    /* border: 1px solid red; */

    .title {
        font-size: ${theme.fonts.size.P2};
        font-weight: ${theme.fonts.weights.bold};
        /* width: 70%; */
        text-align: center;
        line-height: 1.5;
    }

    .subtitle {
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.regular};
        text-align: center;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    .buttons {
        display: flex;
        gap: 1rem;
        /* border: 1px solid blue; */
    }

    .checkmark-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
`       
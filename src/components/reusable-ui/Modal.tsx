import { theme } from "@/theme/theme"
import styled from "styled-components"
import { useModalContext } from "@/context/ModalContext"
type ModalProps = {
  children: React.ReactNode
  onClose?: () => void
}

export const Modal = ({ children, onClose }: ModalProps) => {

  const { setIsModalKitchenVisible } = useModalContext()

  const handleCloseModal = () => {
    setIsModalKitchenVisible(false)
    onClose && onClose()
  }

  return (
    <ModalStyled onClick={handleCloseModal}>
      <div className="voile-noir"></div>
      <div className="modal-container">
        <span className="close-modal" onClick={handleCloseModal}>Fermer X</span> {/* remplacer par un bouton */}
        {children}
      </div>
    </ModalStyled>
  )
}

const ModalStyled = styled.div`
  z-index: 20;

  .voile-noir {
    background: ${theme.colors.background_dark};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .modal-container {
    background: ${theme.colors.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    max-height: 50vh;
    margin: auto;
    border-radius: ${theme.borderRadius.round};
    padding: 20px;
    overflow-y: auto;

    @media (min-width: ${theme.breakpoints.desktop}) {
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
  }

  .close-modal {
    border: 1px solid red;
    position: absolute;
    top: -25px;
    right: 5px;
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.SM};
  }
`

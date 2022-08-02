import React from "react";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { Header } from "./Componets/Header";
import { Dashboard } from "./Componets/Dashboard";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] =
    React.useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal } />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Ola Mundo, no modal ...</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

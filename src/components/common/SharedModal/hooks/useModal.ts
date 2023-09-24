import React, { useState } from "react";

export const useModal = <T>() => {
    const [modal, setModal] = useState<T>();

    const isModalOpen = (currentModal: T) => modal === currentModal;

    const closeModal = () => setModal(undefined);

    const openModal = (modal: T) => setModal(modal);

    return { isModalOpen, closeModal, openModal };
};

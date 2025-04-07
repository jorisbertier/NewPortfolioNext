'use client';
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);

    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
        {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

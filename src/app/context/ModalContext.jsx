'use client';
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const [selectedProject, setSelectedProjectState] = useState(null);


    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen, selectedProject, setSelectedProjectState }}>
        {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

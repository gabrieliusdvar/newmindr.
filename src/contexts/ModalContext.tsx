import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'trial' | 'courses' | 'about' | 'programs' | 'pricing' | 'contact' | 'privacy' | 'terms' | null;

interface ModalContextType {
    activeModal: ModalType;
    openModal: (type: ModalType) => void;
    closeModal: () => void;
    // Legacy support for TrialModal
    isTrialModalOpen: boolean;
    openTrialModal: () => void;
    closeTrialModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const openModal = (type: ModalType) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);

    const isTrialModalOpen = activeModal === 'trial';
    const openTrialModal = () => setActiveModal('trial');
    const closeTrialModal = () => setActiveModal(null);

    return (
        <ModalContext.Provider value={{
            activeModal,
            openModal,
            closeModal,
            isTrialModalOpen,
            openTrialModal,
            closeTrialModal
        }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}

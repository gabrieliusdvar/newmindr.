import Header from './Header';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';
import TrialModal from './TrialModal';
import CoursesModal from './modals/CoursesModal';
import InfoModal from './modals/InfoModal';
import LegalModal from './modals/LegalModal';
import { useModal } from '../contexts/ModalContext';

interface LayoutProps {
    children: React.ReactNode;
    showFooter?: boolean;
}

export default function Layout({ children, showFooter = true }: LayoutProps) {
    const { activeModal, closeModal, isTrialModalOpen, closeTrialModal } = useModal();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {children}
            </main>
            {showFooter && <Footer />}
            <LanguageSwitcher />

            {/* Modals System */}
            <TrialModal
                isOpen={isTrialModalOpen}
                onClose={closeTrialModal}
                initialView="trial"
            />

            <CoursesModal
                isOpen={activeModal === 'courses'}
                onClose={closeModal}
            />

            <InfoModal
                type={['about', 'programs', 'pricing', 'contact'].includes(activeModal as string) ? (activeModal as any) : null}
                onClose={closeModal}
            />

            <LegalModal
                type={['privacy', 'terms'].includes(activeModal as string) ? (activeModal as any) : null}
                onClose={closeModal}
            />
        </div>
    );
}

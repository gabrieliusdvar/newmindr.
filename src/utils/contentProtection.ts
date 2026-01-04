/**
 * Content Protection Utility
 * Disables text selection, right-click, and developer tools access
 */

export const initContentProtection = () => {
    // Disable right-click context menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // Disable text selection
    document.addEventListener('selectstart', (e) => {
        e.preventDefault();
        return false;
    });

    // Disable copy
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        return false;
    });

    // Disable cut
    document.addEventListener('cut', (e) => {
        e.preventDefault();
        return false;
    });

    // Disable keyboard shortcuts for developer tools
    document.addEventListener('keydown', (e) => {
        // F12 - Developer Tools
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I - Developer Tools
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J - Console
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C - Inspect Element
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }

        // Ctrl+U - View Source
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }

        // Ctrl+S - Save Page
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }

        // Ctrl+C - Copy
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            return false;
        }

        // Ctrl+A - Select All
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            return false;
        }
    });

    // Detect if DevTools is open (additional protection)
    const detectDevTools = () => {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            // DevTools might be open - you can add custom behavior here
            console.clear();
        }
    };

    // Check periodically
    setInterval(detectDevTools, 1000);

    // Clear console periodically
    setInterval(() => {
        console.clear();
    }, 2000);
};

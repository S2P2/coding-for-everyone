(function loadDeviconCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css';
    document.head.appendChild(link);
})();

const STORAGE_KEY = 'mdbook-langtabs-selected-lang';

document.addEventListener('DOMContentLoaded', function() {
    initLangTabs();

    // Listen for theme changes and page navigation to re-initialize
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class' && mutation.target.nodeName === 'HTML') {
                setTimeout(initLangTabs, 50);
            }
        });
    });

    observer.observe(document.documentElement, { attributes: true });

    window.addEventListener('hashchange', () => setTimeout(initLangTabs, 100));
});

/**
 * Updates all tab groups on the page to select the specified language.
 * @param {string} lang The language identifier to select (e.g., "rust").
 */
function selectLanguage(lang) {
    if (!lang) return;

    // Store the selected language for persistence
    localStorage.setItem(STORAGE_KEY, lang);

    // Update all langtabs containers on the page
    document.querySelectorAll('.langtabs').forEach(container => {
        // Deactivate all tabs and content panes in the current container first
        container.querySelectorAll('.langtabs-tab').forEach(btn => btn.classList.remove('active'));
        container.querySelectorAll('.langtabs-code').forEach(content => content.classList.remove('active'));

        // Find the specific tab and content pane for the selected language
        const targetButton = container.querySelector(`.langtabs-tab[data-lang="${lang}"]`);
        const targetContent = container.querySelector(`.langtabs-code[data-lang="${lang}"]`);

        if (targetButton && targetContent) {
            // Activate the found tab and content
            targetButton.classList.add('active');
            targetContent.classList.add('active');
        } else {
            // Fallback: if the language is not in this block, activate the first one
            const firstButton = container.querySelector('.langtabs-tab');
            const firstContent = container.querySelector('.langtabs-code');
            if (firstButton && firstContent) {
                firstButton.classList.add('active');
                firstContent.classList.add('active');
            }
        }
    });
}

/**
 * Initializes all language tab groups on the page.
 */
function initLangTabs() {
    // Add click listeners to all tab buttons
    document.querySelectorAll('.langtabs-tab').forEach(button => {
        button.removeEventListener('click', handleTabClick); // Avoid duplicate listeners
        button.addEventListener('click', handleTabClick);
    });

    // Get the stored language or default to the first language on the page
    const storedLang = localStorage.getItem(STORAGE_KEY);
    const firstLang = document.querySelector('.langtabs-tab')?.getAttribute('data-lang');
    
    // Apply the selection across all tab blocks
    selectLanguage(storedLang || firstLang);
}

/**
 * Handles a click event on a tab button.
 */
function handleTabClick() {
    const lang = this.getAttribute('data-lang');
    selectLanguage(lang);
}
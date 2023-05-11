const accordion = document.querySelector('.accordion');
// console.log(accordion)
accordion.addEventListener('click', (e) => {
   const activePanel = e.target.closest('.accordion-panel');
    if (!activePanel) return;
    toggleAccorion(activePanel)
});

function toggleAccorion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll('button');
    const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content');
    // console.log(buttons)
    buttons.forEach(button => {
        button.setAttribute('aria-expanded', false);
    });
    panelToActivate.querySelector('button').setAttribute('aria-expanded', true);
    
    contents.forEach(content => {
        content.setAttribute('aria-hidden', true);
    });
    panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden', false);
    
}    
export const toggleDevPanel = () => {
    const btnToggleDevPanel = document.querySelector('.dev-panel-btn');
    const devPanel = document.querySelector('.dev-panel');

    btnToggleDevPanel.addEventListener('click', function() {
        devPanel.classList.toggle('is-active');
    })
}

export default toggleDevPanel
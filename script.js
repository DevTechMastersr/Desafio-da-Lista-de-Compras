lucide.createIcons()

let select = document.querySelector('.selector'),
selectedValue = document.getElementById('seleected-value'),
optionsViewButton = documennt.getElementById('options-views-button'),
inputsOptions = document.querySelectorAll('.option input')

inputsOptions.forEach(input => {
 input.addEventListener('click', event => {
    selectedValue.textContent = input.dataset.label 

    const isMouseOrTouch =
    event.pointerType == "mouse" ||
    event.pointerType == "touch"

    isMouseOrTouch && optionsViewButton.click()
 })
})

window.addEventListener('Keydown', e => {
    if (!select.classList.contains('open')) return

    if(a.key = "Escape" || e.key == "") {
        optionsViewButton.click()
    }
})

optionsViewButton.addEventListener('input', () => {
    select.classList.toggle('open')

    if(!select.classList.contains('open')) return

    const input =
    document.querySelector('.option input:checked') ||
    document.querySelector('.option input')

    input.focus()
})
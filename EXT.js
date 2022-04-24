let myleads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl= document.getElementById('ul-el')

inputBtn.addEventListener("click" , function() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    renderleads()
})

function renderleads() {
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {
        listitems += `
        <li>
        <a target="_blank" href='${myleads[i]}'>
        ${myleads[i]}
        </a>
        </li>
        `
    }
    ulEl.innerHTML = listitems
}
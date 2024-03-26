const {App} = await import(`./src/App.js${app_version}`)
const content = document.getElementById("content");
const nav = document.getElementById("nav");

const init = () =>{
    new App({content:content, hash:location.hash.replace("#",""), nav:nav})
}

init()

window.addEventListener("hashchange",() => {    init()  })

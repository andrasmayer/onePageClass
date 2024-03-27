const {App} = await import(`./src/App.js${app_version}`)
const content = document.getElementById("content");
const nav = document.getElementById("nav");
const init = () =>{
    let hash = location.hash.replace("#","").split("?")[0]
    new App({content:content, hash:hash, nav:nav})
}
init()
window.addEventListener("hashchange",() => { init() })
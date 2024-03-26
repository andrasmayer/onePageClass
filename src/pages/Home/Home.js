export class Home{
    constructor(props){
    }
    init(){
        document.title = "Home"
        return `
        <div>
            <div>Főoldal<div>
            <div>
                <button class="clickMe" data="Egyik gomb">Button 1</button>
                <button class="clickMe" data="Másik gomb">Button 2</button>
                <button class="clickMe" data="Harmadik gomb">Button 3</button>
            <div>
        <div>
        `
    }
    events(){

        document.querySelectorAll(".clickMe").forEach(itm=>{
            itm.addEventListener("click",(event)=>{
                console.log( event.target.getAttribute("data") )
            })
        })
    }

}
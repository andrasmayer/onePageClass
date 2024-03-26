export class About{
    constructor(props){
        document.title = "About"
    }
    init(){
        return `
        <div>
            <div>Rólunk<div>
            <div>
            <button class="clickMe" data="Negyedik gomb">Button 4</button>
            <button class="clickMe" data="Ötödik gomb">Button 5</button>
            <button class="clickMe" data="Hatodik gomb">Button 6</button>
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
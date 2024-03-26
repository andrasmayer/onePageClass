export class Error_404{
    constructor(props){
        document.title = "Error 404"
    }
    init(){
        return `<div>A keresett oldal nem található</div>`
    }
    events(){}
}
const {views} = await import(`../Router/views.js${app_version}`)
const {$_GET} = await import(`../../Hooks/findGET/findGET.js${app_version}`)

export class NavBar{
    constructor(props){
        let links = ""
        Object.keys(views).forEach((key)=>{
            const activeWindow = key == props.hash ? "active" : ""
            if( (views[key].login == false || (views[key].login == true && userID != null) ) &&  views[key].hidden != true) {
                links += `
                <li class="nav-item">
                    <a class="nav-link ${activeWindow}" href="#${key}">${views[key].title}</a>
                </li>
               `
            }
        })
        
        this.navBar = `
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${ links }
                </ul>
            </div>
        </nav>
        `
    }
    init(){
        return this.navBar
    }
    events(){}
}
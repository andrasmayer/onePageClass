const {NavBar} = await import(`./Components/NavBar/NavBar.js${app_version}`)
const {Home} = await import(`./pages/Home/Home.js${app_version}`)
const {About} = await import(`./pages/About/About.js${app_version}`)
const {Error_404} = await import(`./pages/Error_404/Error_404.js${app_version}`)



export class App{
    constructor(props){
        this.props = props

        this.props.nav.innerHTML = new NavBar().init() //Navbar reload at every hash change (for login and auths)

        if( this[this.props.hash] == null){ this.props.hash = "error_404" }
        this[this.props.hash]()
        
    }
    init(content){ //content reload at every hash change
        this.props.content.innerHTML = content.init()
        content.events()
    }

    home(){
        this.init(  new Home() )
    }
    about(){
        this.init(  new About() )
    }
    error_404(){
        this.init(  new Error_404() )
    }

}
const {NavBar} = await import(`./Components/NavBar/NavBar.js${app_version}`)
const {views} = await import(`./Components/Router/views.js${app_version}`)
const {ajax} = await import(`./Hooks/ajax/ajax.js${app_version}`)

export class App{
    constructor(props){
        this.props = props
        this.props.userID = ajax("get", "./server/activeUser/activeUser.php", "json");
        
        Object.keys(views).forEach(key=>{//dinamicly add views
            this[key] = views[key].fnc
        })


        if( ["","#"].includes(this.props.hash) ){ this.props.hash = "home" }
        else if( this[this.props.hash] == null){ this.props.hash = "error_404" }




        this.props.nav.innerHTML = new NavBar(props).init() //Navbar reload at every hash change (for login and auths)
        this.view = new this[this.props.hash](props)

        this.props.content.innerHTML = this.view.init()
        this.view.events()
    }
  
}
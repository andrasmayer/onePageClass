const {ajax} = await import(`./Hooks/ajax/ajax.js${app_version}`)
export const App = ()=>{
    const root = document.getElementById("root")
    const userData = {userName:null,passWord:null}

    root.innerHTML = `
        <div>
            <div> 
                <div>
                    <label>Felhasználónév<label>
                </div>      
                <div>
                    <input id="userName">
                </div>      
            </div>
            <div> 
                <div>
                    <label>Jelszó<label>
                </div>      
                <div>
                    <input type="password" id="password">
                </div>      
            </div>
            <div>
                <button id="loginBtn">Belépés</button>
            </div>
        </div>
    `
    const userName = document.getElementById("userName")
    const password = document.getElementById("password")
    const loginBtn = document.getElementById("loginBtn")


    const Login = () =>{
        const response = ajax("post","../../server/Login/Login.php","json",userData)
        console.log(response)
        //response == false ? alert("Belépés sikertelen") : location.href = "../../"
    }

    userName.addEventListener("keyup",(event)=>{
        userData.userName = event.target.value
        event.keyCode == 13 && Login()
    })

    password.addEventListener("keyup",(event)=>{
        userData.passWord = event.target.value
        event.keyCode == 13 && Login()
    })

    loginBtn.addEventListener("click",()=>{ 
        Login()
    
    })

}
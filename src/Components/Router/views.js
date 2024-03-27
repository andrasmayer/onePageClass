//Nézetek
const {Home} = await import(`../../Pages/Home/Home.js${app_version}`)
const {About} = await import(`../../Pages/About/About.js${app_version}`)

const {TopicList} = await import(`../../Pages/TopicList/TopicList.js${app_version}`)
const {OpenTopic} = await import(`../../Pages/OpenTopic/OpenTopic.js${app_version}`)

const {Error_404} = await import(`../../Pages/Error_404/Error_404.js${app_version}`)
/*

const {MyTasks} = await import(`../../views/MyTasks/MyTasks.js${app_version}`)
const {CreateTopic} = await import(`../../views/CreateTopic/CreateTopic.js${app_version}`)

*/
export const views = {
    home:{title:"Főoldal", fnc:Home, login:false, hidden:false},
    about:{title:"Rólunk", fnc:About, login:false, hidden:false},

    topicList:{title:"Topic Lista", fnc:TopicList, login:false, hidden:false},
    OpenTopic:{title:"Topic", fnc:OpenTopic, login:false, hidden:true},


    error_404:{title:"Az oldal nem található", fnc:Error_404, hidden:true},


}
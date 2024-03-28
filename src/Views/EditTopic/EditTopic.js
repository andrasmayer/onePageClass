const { initTopic } = await import(`../../Components/Topic/Topic.js${app_version}`)
const { findGET } = await import(`../../Hooks/findGET/findGET.js${app_version}`)
const { CreateTopic} = await import(`../CreateTopic/CreateTopic.js${app_version}`)
const { importTopic,buildCategories, buildAdmins, buildHeaders} = await import(`../CreateTopic/Components/handlers.js${app_version}`)

export class EditTopic{
    constructor(props){
        this.props = props
        this.props.Topic = initTopic(findGET().topicid)
       
    }
    init(){
        if(this.props.Topic == false){return `<div class="alert alert-danger text-center h4">A keresett Topic nem található</div>`}
        else{
            this.props.Topic.URL = "EditTopicBase/EditTopicBase.php"
            this.imported  = new CreateTopic(this.props)
            const context   =  this.imported.init()
            return context  
        }

    }
    events(){
        if(this.props.Topic != false){
            const topicName = document.getElementById("topicName")
            topicName.value = this.props.Topic.title
            const topicDescription = document.getElementById("topicDescription")
            topicDescription.value = this.props.Topic.description
            const createTopicCtn = document.querySelector(".createTopicCtn")
            this.imported.events(this.props.Topic)
            importTopic(this.props.Topic)
            createTopic.textContent = "Adatlap módosítása"
            buildCategories(this.props.Topic.erTypes)
            buildAdmins(this.props.Topic.contributorNames)
            buildHeaders(this.props.Topic.privateHeaders)
        }
    }

}
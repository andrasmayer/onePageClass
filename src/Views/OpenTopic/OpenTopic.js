const { findGET } = await import(`../../Hooks/findGET/findGET.js${app_version}`)

const {initTopic} = await import(`../../Components/Topic/Topic.js${app_version}`)
const {events} = await import(`./events.js${app_version}`)
const { createTable} = await import(`./functions.js${app_version}`)

export class OpenTopic{
    constructor(props){
        this.userID = props.userID == null ? 0 : props.userID
       
    }
    init(){
        this.Topic = initTopic(findGET().topicid)
        const context = this.Topic == false ? "<div>A keresett topic nem található</div>" : createTable(this.userID,this.Topic)

        return context
    }
    events(){
        events(this.Topic)
    }
}

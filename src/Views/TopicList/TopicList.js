const {list} = await import(`./Components/list.js${app_version}`)
const {events} = await import(`./Components/events.js${app_version}`)
export class TopicList{
    constructor(props){
        this.props = props
        this.props.myTopics = false
    }
    init(){
        return list(this.props)
    }
    events(){
        events()
    }

}
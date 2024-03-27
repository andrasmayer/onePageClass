const {list} = await import(`./Components/list.js${app_version}`)
const {events} = await import(`./Components/events.js${app_version}`)
export class TopicList{
    constructor(props){}
    init(){
        return list({myTopics:false})
    }
    events(){
        events()
    }

}
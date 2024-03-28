let {Topic} = await import(`./Components/handlers.js${app_version}`)
const {events} = await import(`./Components/events.js${app_version}`)
const { editHeaders } = await import(`./Components/editHeaders.js${app_version}`)

export class CreateTopic{
    constructor(props){
        this.props = props
    }
    init(){
        Topic = this.props.Topic == null ? Topic : this.props.Topic
        Topic.contributors.push(this.props.userID)
        
        return `
        <div class="d-flex justify-content-center">
            <div class="col-12 col-lg-4">
                <div class="p-3">
                    <div><h3>Topic neve</h3></div>
                    <div>
                        <input class="form-control" id="topicName">
                    </div>
                </div>
                <div class="p-3">
                    <div><h3>Részletek</h3></div>
                    <div>
                        <textarea class="form-control"  id="topicDescription"></textarea>
                    </div>
                </div>
                ${
                    this.props.hash == "editTopic"  ?
                    `<div class="p-3">
                        <div class=""><h3>Rendezés</h3></div>
                        <div class="headerEditor">${editHeaders(Topic)}</div>
                    </div>` : ""
                }
                <div>
                    <div class="p-3">
                        <h3>Probléma kategóriák</h3>
                        <div><ul id="categories" class="list-group"></ul></div>
                        <div>
                            <input id="newCatName" class="form-control w-50 d-inline"> <button class="btn btn-primary" id="addCat">+</button>
                        </div>
                    </div>
                    <div class="p-3">
                        <h3>Adminisztátorok</h3>
                    <div>
                        <ul id="admins" class="list-group"></ul></div>
                        <div>
                            <input id="newAdmin" class="form-control w-50 d-inline"> <button id="addAdmin" class="btn btn-primary">+</button>
                            <div id="userList"></div>
                        </div>
                        <div><ul id="admins" class="list-group"></ul></div>
                    </div>
                    <div class="p-3">
                        <h3>Extra fejlécek</h3>
                        <ul id="headerList" class="list-group"></ul>
                        <input id="newHeader" class="form-control w-50 d-inline"> 
                        <button id="addHeader" class="btn btn-primary">+</button>
                    </div>
                </div>
                <div class="createTopicCtn mt-5 text-center">
                    <button id="createTopic" class="btn btn-success">Létrehozás</button>
                </div>
            </div>
        </div>
        `
    }
    events(props){
        events(props)
    }
}
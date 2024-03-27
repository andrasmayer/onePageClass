const {ajax} = await import(`../../Hooks/ajax/ajax.js${app_version}`)
//const {$_GET} = await import(`../../Hooks/findGET/findGET.js${app_version}`)

export const initTopic = (topicid) =>{
    const Topic = ajax("get", "./server/getTopic/getTopic.php", "json", {topicid:topicid})
    if(Topic != false && typeof Topic != "undefined"){
        Topic.privateHeaders = JSON.parse(Topic.privateHeaders)
        Topic.headerEditor = JSON.parse(Topic.headerEditor)
        Topic.erTypes = JSON.parse(Topic.erTypes)
        Topic.status_1 = ["open", "overdue", "closed"]
        Topic.status_2 = ["open", "closed"]
        Topic.task.forEach( (itm,key)=>{
            Topic.task[key].addin = JSON.parse(itm.addin)
            if( itm.responsibleName == null){ Topic.task[key].responsibleName = "" } 
            if( itm.delegatedName == null){ Topic.task[key].delegatedName = "" } 
        })    
        
        Topic.contributors.forEach((itm,key)=>{
            Topic.contributors[key] = parseInt(Topic.contributors[key])
        })
        if(typeof Topic.privateHeaders == "string"){ Topic.privateHeaders = {} }
    }
    return Topic
}
//export {Topic}





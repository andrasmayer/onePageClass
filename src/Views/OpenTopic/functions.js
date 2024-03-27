const {adminView, responsibleView,delegatedView, guestView} = await import(`./roleview.js${app_version}`)


const docHeader = (data, userID)=>{

    let context = ""
    const isAdmin = data.contributors.includes(userID)
    if(isAdmin === true){ context += 
        `<div class="controls">
            <button id="newTask"> Új feladat </button>
        </div>`
    }

    return `
        <div class="card p-2">
            <div class="docHeader">
                <div>ID: ${data.id} </div>
                <div>Név: ${data.title} </div>
                <div>Tulajdonos: ${data.creator} </div>
                <div>Létrehozva: ${data.creationDate} </div>
                <div>Résztvevők: ${data.contributors} </div>
                ${context}
            </div>
        </div>
    `
}

export const createHeader = (header)=>{
    let context = ``
    Object.keys(header).forEach((key)=>{
        context += `<th>${header[key]}</th>`
    })
   return context
}

export const buildFeed = (tasks, userID, Topic) =>{
    
    
    
    const isAdmin = Topic.contributors.includes(userID)
    let isResponsible = false
    let isDelegated = false
    let context = ``
    tasks.forEach((itm,key)=>{
        isResponsible = itm.responsible == userID 
        isDelegated = (itm.responsible == userID || userID == itm.delegated) &&  userID != null && userID != 0

        //delegatedView
        if(isAdmin === true){ context += adminView(itm, Topic, key)}
        else if(isResponsible === true){ context += responsibleView(itm, Topic, key) }
        else if(isDelegated === true){ context += delegatedView(itm, Topic, key) }
        else{ context += guestView(itm, Topic) }
    })
    return context
}

export const createTable = (userID,Topic)=>{

    let thead = "";
    Topic.headerEditor.forEach((itm,key)=>{
        thead += itm.visible == "true" ? `<th>${itm.data}</th>` : ""
    })
    
    return `
        <div>
            ${docHeader(Topic, userID)}
            <table class="table table-striped w-100">
                <thead class="bg-dark text-light">
                    <tr>
                        <th>ID</th>
                       
                        ${thead}
                    </tr>
                </thead>
                <tbody>${buildFeed(Topic.task, userID, Topic)}</tbody>
            </table>
        </div>
    `
}



const { ajax } = await import(`../../../Hooks/ajax/ajax.js${app_version}`)
export const editHeaders = (Topic) =>{
    let lastKey = 0
    if(Object.keys(Topic.headerEditor).length == 0){
        Topic.headerEditor = [
            {data:"Kategória",visible:"true",className:"erTypes",private:"false"},
            {data:"Felelős",visible:"true",className:"responsible",private:"false"},
            {data:"Delegált",visible:"true",className:"delegated",private:"false"},
            {data:"Felvéve",visible:"true",className:"creationDate",private:"false"},
            {data:"Határidő",visible:"true",className:"expireDate",private:"false"},
            {data:"Ellenőrizve",visible:"true",className:"status_1",private:"false"},
            {data:"Állapot",visible:"true",className:"status_2",private:"false"},
            {data:"Komment",visible:"true",className:"comment",private:"false"},
            {data:"Akció",visible:"true",className:"action",private:"false"},
    ]

        lastKey = Topic.headerEditor.length
        Object.keys(Topic.privateHeaders).forEach(itm=>{
           Topic.headerEditor.push({data:itm.split("$$").join(""),visible:"true",className:itm.split(' ').join('$$'),private:"true" })
           lastKey++
        })
        const updateHeaders = ajax("post", `./server/EditTopicBase/editHeaders.php`, "html", {data: JSON.stringify(Topic.headerEditor),id:Topic.id})
    }

    let context = ``
    Topic.headerEditor.forEach((itm,key)=>{
        context += 
            `<div class="editHeader p-1" data="${itm.data}" visible="${itm.visible}"  headerid="${key}">
                ${itm.data}
                <input class="headerStatus" type="checkbox" ${itm.visible == "true" ? "checked" : ""} style="float:right">
            </div>`
            
    })
    return context
}
const {DropDowns,DropDowns_Object} = await import(`./DropDowns.js${app_version}`)

export const adminView = (itm, Topic, key) => {
    
    let thead = "";
    Topic.headerEditor.forEach((itm2,key)=>{

        if(itm2.visible == "true"){
            switch(itm2.className){
                case "erTypes" : thead += `<td>${DropDowns_Object({element:Topic.erTypes, className:"erTypes", selected:itm.erTypes})}</td>`;break;
                case "responsible" : thead += `<td><input class="form-control responsible" value="${itm.responsibleName}"></td>`;break;
                case "delegated" : thead += `<td>${itm.delegatedName}</td>`;break;
                case "creationDate" : thead += `<td><input type="date" class="creationDate" value="${itm.creationDate}"></td>`;break;
                case "expireDate" : thead += `<td><input type="date" class="expireDate" value="${itm.expireDate}"></td>`;break;
                case "status_1" : thead += `<td>${DropDowns({element:Topic.status_1, className:"status_1", selected:itm.status_1})}</td>`;break;
                case "status_2" : thead += `<td>${Topic.status_1[itm.status_2]}</td>`;break;
                case "comment" : thead += `<td><textarea class="form-control comment">${itm.comment}</textarea></td>`;break;
                case "action" : thead += `<td><textarea class="form-control action">${itm.action}</textarea></td>`;break;
                default: thead += `<td><textarea class="form-control addin_${itm2.className}">${itm.addin[itm2.className]}</textarea></td>`;
                break;
            }
        }
    })
    return `
    <tr class="active-row" rowid="${itm.id}" rowindex="${key}">
        <td>${itm.id}</td>
        ${thead}
    </tr>`
}

export const responsibleView = (itm, Topic, key) => {
    let thead = "";
    Topic.headerEditor.forEach((itm2,key)=>{
        if(itm2.visible == "true"){
            switch(itm2.className){
                case "erTypes" : thead += `<td>${Topic.erTypes[itm.erTypes]}</td>`;break;
                case "responsible" : thead += `<td>${itm.responsibleName}</td>`;break;
                case "delegated" : thead += `<td><input class="form-control delegated" value="${itm.delegatedName}"></td>`;break;
                case "creationDate" : thead += `<td>${itm.creationDate}</td>`;break;
                case "expireDate" : thead += `<td>${itm.expireDate}</td>`;break;
                case "status_1" : thead += `<td>${Topic.status_1[itm.status_1]}</td>`;break;
                case "status_2" : thead += `<td>${DropDowns({element:Topic.status_2, className:"status_2", selected:itm.status_2})}</td>`;break;
                case "comment" : thead += `<td><textarea class="form-control comment">${itm.comment}</textarea></td>`;break;
                case "action" : thead += `<td><textarea class="form-control action">${itm.action}</textarea></td>`;break;
                default: thead += `<td><textarea class="form-control addin_${itm2.className}">${ itm.addin[itm2.className] }</textarea></td>`;
                break;
            }
        }
    })
    return `
    <tr class="active-row" rowid="${itm.id}" rowindex="${key}">
        <td>${itm.id}</td>
        ${thead}
    </tr>`
}

export const delegatedView = (itm, Topic, key) => {
    let thead = "";
    Topic.headerEditor.forEach((itm2,key)=>{
        if(itm2.visible == "true"){
            switch(itm2.className){
                case "erTypes" : thead += `<td>${Topic.erTypes[itm.erTypes]}</td>`;break;
                case "responsible" : thead += `<td>${itm.responsibleName}</td>`;break;
                case "delegated" : thead += `<td>${itm.delegatedName}</td>`;break;
                case "creationDate" : thead += `<td>${itm.creationDate}</td>`;break;
                case "expireDate" : thead += `<td>${itm.expireDate}</td>`;break;
                case "status_1" : thead += `<td>${Topic.status_1[itm.status_1]}</td>`;break;
                case "status_2" : thead += `<td>${DropDowns({element:Topic.status_2, className:"status_2", selected:itm.status_2})}</td>`;break;
                case "comment" : thead += `<td><textarea class="form-control comment">${itm.comment}</textarea></td>`;break;
                case "action" : thead += `<td><textarea class="form-control action">${itm.action}</textarea></td>`;break;
                default: thead += `<td><textarea class="form-control addin_${itm2.className}">${ itm.addin[itm2.className] }</textarea></td>`;
                break;
            }
        }
    })
    return `
    <tr class="active-row" rowid="${itm.id}" rowindex="${key}">
        <td>${itm.id}</td>
        ${thead}
    </tr>`
}

export const guestView = (itm, Topic) => {
    let thead = "";
    Topic.headerEditor.forEach((itm2,key)=>{
        if(itm2.visible == "true"){
            switch(itm2.className){
                case "erTypes" : thead += `<td>${Topic.erTypes[itm.erTypes]}</td>`;break;
                case "responsible" : thead += `<td>${itm.responsibleName}</td>`;break;
                case "delegated" : thead += `<td>${itm.delegatedName}</td>`;break;
                case "creationDate" : thead += `<td>${itm.creationDate}</td>`;break;
                case "expireDate" : thead += `<td>${itm.expireDate}</td>`;break;
                case "status_1" : thead += `<td>${Topic.status_1[itm.status_1]}</td>`;break;
                case "status_2" : thead += `<td>${Topic.status_1[itm.status_2]}</td>`;break;
                case "comment" : thead += `<td>${itm.comment}</td>`;break;
                case "action" : thead += `<td>${itm.action}</td>`;break;
                default: thead += `<td>${itm.addin[itm2.className]}</td>`;
                break;
            }
        }
    })
    return `
    <tr>
        <td>${itm.id}</td>
        ${thead}
    </tr>`
}
export let Topic = {
  title: "",
  description: "",
  contributorNames: [],
  contributors: [],
  erTypes: { "v": "Kérlek válassz" },
  privateHeaders: {},
  saveType:"create",
  headerEditor:{}
}


export const importTopic = (obj)=>{ //Külső forrás EditTopics.js
  Topic = obj
  Topic.saveType = "edit"
}

export const buildCategories = (obj) => {

  const categories = document.getElementById("categories")
  let context = ``
  Object.keys(obj).forEach((key) => {
    if (key != "v") {
      context += `<li class="list-group-item">${obj[key]} <button catkey="${key}" class="removeCategory btn btn-danger float-end" >-</button></li>`
    }
  })


  if (categories != null) {
    categories.innerHTML = context
    document.querySelectorAll(".removeCategory").forEach((itm) => {
      itm.addEventListener("click", (e) => {
        const key = e.target.getAttribute("catkey")
        delete Topic.erTypes[key]
        buildCategories(Topic.erTypes)
      })
    })
  } else {
    return ""
  }
}

export const buildAdmins = (obj) => {
  const admins = document.getElementById("admins")
  let context = ``
  obj.forEach((itm, key) => {
    context += `<li class="list-group-item">${itm.username} <button catkey="${key}" class="removeAdmin btn btn-danger float-end">-</button></li>`
  })

  if (admins != null) {
    admins.innerHTML = context
    document.querySelectorAll(".removeAdmin").forEach((itm) => {
      itm.addEventListener("click", (e) => {
        const key = e.target.getAttribute("catkey")
        Topic.contributorNames.splice(key, 1)
        Topic.contributors.splice(key, 1)
        buildAdmins(Topic.contributorNames)
      })
    })
  } else {
    return ""
  }
}

export const buildHeaders = (obj) => {
  const headerList = document.getElementById("headerList")
  let context = ``
  Object.keys(obj).forEach((key) => {
    context += `<li class="list-group-item">${obj[key]} <button catkey="${key}" class="removeHeader btn btn-danger float-end">-</button></li>`
  })

  if (headerList != null) {
    headerList.innerHTML = context
  
    document.querySelectorAll(".removeHeader").forEach((itm) => {
        itm.addEventListener("click", (e) => {
          const key = e.target.getAttribute("catkey")
          delete Topic.privateHeaders[key]
          buildHeaders(Topic.privateHeaders)
        })
    })
  } else {
    return ""
    //return context
  }
}

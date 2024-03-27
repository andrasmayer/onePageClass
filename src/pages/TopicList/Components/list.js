const { ajax } = await import(`../../../Hooks/ajax/ajax.js${app_version}`)

export const list = (props) => {
  const OBJ = props.myTopics === true ? { userID: props.userID } : {}
  let content = ""
  const list = ajax("get", "./server/getTopic/TopicList.php", "json", OBJ)

  list.forEach((itm) => {
    itm.contributors = JSON.parse(itm.contributors)

    const owner =    itm.contributors.includes(JSON.stringify(props.userID) ) === true || props.userID == itm.creator
        ? 
          `<a class="nav-link fa fa-pencil" style="color:green" href="#editTopic?topicid=${itm.id}"></a>`
        : ""
    content += `
            <a class="nav-link" href="#OpenTopic?topicid=${itm.id}">
              ${itm.id} <strong>${itm.title}</strong> ${itm.creationDate} ${owner}
            </a>
          `
  })

  content = `
        <div class="d-flex justify-content-center">
          <div class="card p-3 col-11 col-lg-5 mt-4">
                ${
                  location.hash.replace("#","").split("?")[0] == "#topicList"
                    ? `<div>
                        <input placeholder="Mit keresel?" id="search" class="form-control">
                    </div>`
                    : ``
                }
                <div id="context">${content}</div>
            </div>
          </div>
            `

  return content
}

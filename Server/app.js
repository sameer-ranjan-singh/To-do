
    function deleteDone(id){
        console.log(`DELETED SUCCESSFULLY : ${id}`)
        
        let parentElement = document.getElementById("mainArea")
        let childElement = document.getElementById(`${id}`)
        parentElement.removeChild(childElement)
    }

    function deleteTodo(id){
        fetch("https://to-do-yize.onrender.com/todos/" +id, {
            method: "DELETE",
            // headers: {
            //     "Content-Type": "application/json"
            // }
        }).then(deleteDone(id))
        
    }

    function todoCallback(data) {
        console.log(data)
        let parentElement = document.getElementById("mainArea")
        
        for(let i=0; i< data.length ; i ++){
            let childElement = document.createElement("div")
            childElement.setAttribute("id",`${data[i].id}`)
            childElement.setAttribute("class","mA-child")

            let grandChildElement1 = document.createElement("span")
            grandChildElement1.innerHTML = data[i].title
            grandChildElement1.setAttribute("class","mA-Gchild-title")

            let grandChildElement2 = document.createElement("span")
            grandChildElement2.innerHTML = data[i].description
            grandChildElement2.setAttribute("class","mA-Gchild-description")

            let grandChildElement3 = document.createElement("button")
            grandChildElement3.innerHTML = ""
            let cancelIcon = document.createElement("img")
            cancelIcon.src = "svg/icons8-cancel.svg"
            cancelIcon.alt = "X" 
            cancelIcon.classList.add("cancel-icon")

            grandChildElement3.append(cancelIcon)
            grandChildElement3.setAttribute("onclick",`deleteTodo(${data[i].id})`)
            grandChildElement3.setAttribute("class","mA-Gchild-dlt-btn")
 
            childElement.appendChild(grandChildElement1)
            childElement.appendChild(grandChildElement2)
            childElement.appendChild(grandChildElement3)

            parentElement.appendChild(childElement)
        }
        
    }

    function getDataCallback(res) {
        res.json().then(todoCallback)
    }

    function getData() {
        fetch("https://to-do-yize.onrender.com/todos", {
            method: "GET"
        }).then(getDataCallback)
    }
    getData()


    function parsedResponse(data) {
        console.log(data)
        let parentElement = document.getElementById("mainArea")
        let childElement = document.createElement("div")
        // childElement.setAttribute("id",`${data[i].id}`)
            childElement.setAttribute("class","mA-child")

        let grandChildElement1 = document.createElement("span")
        grandChildElement1.innerHTML = data.title
        grandChildElement1.setAttribute("class","mA-Gchild-title")

        let grandChildElement2 = document.createElement("span")
        grandChildElement2.innerHTML = data.description
        grandChildElement2.setAttribute("class","mA-Gchild-description")

        let grandChildElement3 = document.createElement("button")
        grandChildElement3.innerHTML = "X"
        grandChildElement3.setAttribute("class","mA-Gchild-dlt-btn")

        childElement.appendChild(grandChildElement1)
        childElement.appendChild(grandChildElement2)
        childElement.appendChild(grandChildElement3)

        parentElement.appendChild(childElement)
    
    }

    function callback(resp) {
        resp.json().then(parsedResponse)
    }
   
    function onPress() {
        const title = document.getElementById("text1").value
        const description = document.getElementById("description1").value

        fetch("https://to-do-yize.onrender.com/", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(callback)
          .then(() => {
            document.getElementById("text1").value = "";
            document.getElementById("description1").value = "";
            
            })
    }

    function hippoParsed(data){
        console.log(data)
    }

    function  hippoCallback(res){
        res.json().then(hippoParsed)
    }    

    function hippo(){
        fetch('https://sameer-campus.netlify.app/',{
            method: 'GET',
        }).then(hippoCallback)
        .catch((err) => {
            console.log('ERROR :', err)
        })
    }


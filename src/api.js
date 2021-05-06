const apiUrl = 'http://localhost:3000/api/todos/';

export async function getTodos(){
   return fetch(apiUrl)
    .then(resp => {
        if(!resp.ok){
            if(resp.status >=400 && resp.status < 500 ){
                resp.json().then(data => {
                    let err = {errorMessage: data.mesaage}
                    throw err
                })
            }else {
                let err = {errorMessage: "Try again later server not responding"}
                throw err
            }
        }
        return resp.json()
    })
}

export async function createTodo(value){
    return fetch(apiUrl, {
        method:'post',
       headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({name: value})
    })
    .then(resp => {
        if(!resp.ok){
            if(resp.status >=400 && resp.status < 500 ){
                resp.json().then(data => {
                    let err = {errorMessage: data.mesaage}
                    throw err
                })
            }else {
                let err = {errorMessage: "Try again later server not responding"}
                throw err
            }
        }
        return resp.json()
    })
}

export async function removeTodo(id){
    const url = apiUrl + id
    return fetch(url, {
            method:'delete',
        })
        .then(resp => {
            if(!resp.ok){
                if(resp.status >=400 && resp.status < 500 ){
                    resp.json().then(data => {
                        let err = {errorMessage: data.mesaage}
                        throw err
                    })
                }else {
                    let err = {errorMessage: "Try again later server not responding"}
                    throw err
                }
            }
            return resp.json()
        })
}

export async function updateTodo(todo) {
    const updateUrl = apiUrl + todo._id
    return      fetch(updateUrl, {
        method:'put',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({completed: !todo.completed})
    })
    .then(resp => {
        if(!resp.ok){
            if(resp.status >=400 && resp.status < 500 ){
                resp.json().then(data => {
                    let err = {errorMessage: data.mesaage}
                    throw err
                })
            }else {
                let err = {errorMessage: "Try again later server not responding"}
                throw err
            }
        }
        return resp.json()
        })
}
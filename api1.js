let urls = [
    'https://reqres.in/api/users/2',
    'https://reqres.in/api/users/3',
    'https://reqres.in/api/users/6'
]
    


function fetchUrl(url) {
    fetch(url).then(response => {
        if(response.ok){
            return response.json()
        }else{
            console.log(`Une erreur est survenue, code erreur ${response.status}`)
            return {}
        }
    }).then((data) => {console.log(data)})
    .catch((error) => console.log(error)) 
}

    
urls.forEach(url => fetchUrl(url))
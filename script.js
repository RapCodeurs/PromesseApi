/*function mySandwich(ingredients1, ingredients2, callback){

    console.log(`Je mange un sandhich ${ingredients1} et à ${ingredients2}`)
    callback()
}


function endSandwich() {
    console.log('Fini de manger')
}

mySandwich('fromage', 'tomate', endSandwich)*/

function verification(){
    new Promise((resolve, reject) => {
        let userName = 'Maurel'
    
        if(userName === 'Maurel'){
            resolve()
        }
        reject()
    })
}

function succes(){
    console.log('Verifaication validée !')
}

function error(){
    console.log('Verifaication non valide ! Veuillez réessayer')
}

console.log(verification().then(succes, error))


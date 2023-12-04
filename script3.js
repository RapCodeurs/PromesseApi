function askUsername() {
    return prompt('Quel est votre nom d\'utilisateur ?')
}   
  
function askMathOperation() {
    return prompt('Combien font 2 + 2')
}   
  
function success() {
    console.log('Vous pouvez accéder à l\'application')
}
    
function error() {
    console.log('Restez où vous êtes')
}
  
function checkUsername() {
    return new Promise((resolve, reject) => {
        // code à implémenter
        let admin = askUsername()
        if(admin === "admin"){
            resolve()
        }
        reject()
    })
}
  
function checkIfIsBot() {
    return new Promise((resolve, reject) => {
        // code à implémenter
        let resultat = askMathOperation()
        if(parseInt(resultat) === 4){
            resolve()
        }
        reject()
    })
}

// Résolution des promesses
Promise.all([checkUsername(), checkIfIsBot()])
        .then(success, error)
        

// Promise.all([checkUsername(), checkIfIsBot()]).then(success, error)

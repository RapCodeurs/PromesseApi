function askAge() {
    return prompt('Quel âge avez-vous ?')
}   

/*function success() {
    console.log('Vous êtes majeur, vous pouvez continuer votre navigation')
}
  
function error() {
    console.log('Vous êtes mineur, vous allez être redirigé vers une autre page')
}*/
  
const redirectUser =  () => {
   // code à implémenter
    return new Promise((resolve, reject) => {
      if(askAge() >= 18) {
        resolve()    
      } 
      reject()
    })
}
  
redirectUser.then((succes) =>{console.log(succes)})
            .catch((error) => {console.log(error)})
              
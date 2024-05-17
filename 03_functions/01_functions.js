// const myNewArray = [200,400,100,600]
// function returnSecondValue(geArray){
//     return geArray[1]
// }
// console.log(returnSecondValue(myNewArray))
   
// const user = {
//     username:"hitesh",
//     price:999,
//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`)
//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
const chai = () => {
    console.log(this)
}
const chai2 = function delhi() {
    console.log(this)
}
// chai()
chai2()
const addTwo =(num1,num2) =>({username:"hitesh"})
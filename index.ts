let firstName: string = "rondolph"
let age: number = 21
let active: boolean = true

// let names:string[]= [1,2,3,4]// gives us an error
let names: string[] = ["bobby", "jennifer", "lily"] // good array

enum studentTypes {
  pending, // 0
  active, // 1
  almostdone, // 2
  graduated, // 3
  tas, // 4
  teachers, // 5
}

// let myStatus = studentTypes.graduated

// switch (myStatus) {
//   case Number(studentTypes.active):
//     console.log("student is active")
//     break
//   case Number(studentTypes.graduated):
//     console.log("student is graduated")
//     break
//   default:
//     console.log("😱")
// }

// console.log("myStatus is",myStatus)
// if (myStatus== studentTypes.graduated){
// console.log(`the students is graduated`)
// }

// console.log(names)
// console.log(`my firstname is ${firstName}`)

// let code: string | number = 11
// code = "aa11"
// // code = false // error. not a string or number
// console.log(`my entry code is: ${code}`)

function sum(arr: number[]) {
return arr.reduce ((total, num,) => total + num)
// arr.reduce((previousValue: number, currentValue: number) => {return previousValue + currentValue})

}

let numbers: number[] = [1,2,3,4,5,6]

console.log(sum(numbers))
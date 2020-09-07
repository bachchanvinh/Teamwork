//Khoa
//Câu 2:2.Learn how to randomly pick an item from an array
// For example:
// Array: [2, 5, 6, 9, 10]
// First run: 5
// Second run: 9
// let Array= [2, 5, 6, 9, 10]
// console.log(Array)
// let random = Math.floor(Math.random() * Array.length)
// console.log(random)


//Phuc
// 1.Learn how to create a random number from 0 to 1
// alert(Math.random().toFixed(2))

//BAI 3
// phan 1
let q = [
        
          {
              question : "Con chó sủa ra sao\na. gau gau\n b.cạp cạp" ,
              dapan :  'a'

          },
          {
              question: " con cho mấy chân\na. 3\n b.4 ",
              dapan: 'b'
          },
          {
          question: " con gà mấy chân\na. 2\n b.4 ",
          dapan: 'a'
          }
]
let diem = 0
let n =3
//phan 2
// let question = q.question

// console.log(qrandom)
console.log(q)
for(let i =0; i<3; i++){
    
    let qrandom = q[Math.floor(Math.random() * n)]
    console.log(qrandom)
    let da = prompt(qrandom.question)
    console.log(q)

// phan 3
if(da == qrandom.dapan){
    alert("Dung")
    diem+=1
}
else if(da == "goiy"){
    alert (`Dap an la `,qrandom.dapan)
    diem+=1
}
q.splice(q.indexOf(qrandom),1)
n=n-1}

alert("Chuc mung ban duoc "+diem+"/"+`3`)

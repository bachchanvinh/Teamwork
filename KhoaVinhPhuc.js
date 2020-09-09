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
// let q = [
//           {
//               question : "Con chó sủa ra sao\na. gau gau\n b.cạp cạp" ,
//               dapan :  'a'

//           },
//           {
//               question: " con cho mấy chân\na. 3\n b.4 ",
//               dapan: 'b'
//           },
//           {
//           question: " con gà mấy chân\na. 2\n b.4 ",
//           dapan: 'a'
//           }
// ]
// let diem = 0
// let username
// let q1 ={}
// let q2 ={}
// let chontrochoi
//Tro choi 1

let chontrochoi = prompt("Chọn trò chơi bạn muốn trải nghiệm nhé: nhập 1 là ta chơi trắc nghiệm, nhập 2 là câu hỏi vui nhộn")
while(true){
let diem = 0
let username = prompt("nhập tên của bạn đi")
if(username=="huy"){break}
if (chontrochoi == 1){
    let goiy = 0
    let q1 = [
        {
          question : "1\na. gau gau\n b.cạp cạp" ,
          answer :  'a'
    
        },
        {
          question: " 2\na. 3\n b.4 ",
          answer: 'b'
        },
        {
          question: " 3\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 4\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 5\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 6\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 7\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 8\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 9\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 10\na. 2\n b.4 ",
          answer: 'a'
        }
            ]
        const n= q1.length
    for(let i = 0 ; i<n; i++){
    qrandom = q1[Math.floor(Math.random() * q1.length)]
    let da = prompt(qrandom.question)
    if(da == qrandom.answer){
        alert("Đúng")
        diem += 1
    }
    else{
        if(goiy == 0){
            let goiy1 =prompt("Sai rồi, còn một gợi ý bạn dùng không? , dùng thì điền Y , không thì điền N").toLocaleLowerCase()
            while(goiy1 != "y" && goiy1 != "n"){
                goiy1 =prompt("Sai rồi, còn một gợi ý bạn dùng không? , dùng thì điền Y , không thì điền N").toLocaleLowerCase()
            }
            if(goiy1 == "y"){
                alert(qrandom.answer)
                diem += 1
                goiy = 1
            }
        }
        else{
            alert("Bạn mất điểm câu này rồi")
        }
    }
    q1.splice(q1.indexOf(qrandom),1)
    }
    alert("Chúc mừng "+username+" làm được "+ diem + "/10 câu" )
}
array=[]
array.push({
    Name: username,
    Point: diem,
})
}
// for(let i = 0; i<array.length;i++){
//     for(let ii = i+1;ii<array.length;ii++){
//         if(array[i].Point>array[ii].Point){
//             temp=array[ii]
//             array[ii]=array[i]
//             array[i]=temp
//         }
//     }
// }
// for(let j = 0 ; j<array.length; j++){
//     console.log(array[j])
// }



//Tro choi 2
else if( chontrochoi == '2'){
    alert('Chúng ta bắt đầu phần thi tư duy nhé')
q2 = [
    // câu 1
    {
        question: 'con bò có mấy chân',
        answer:4
    },
    // câu 2
    {
        question:'con chó có mấy mắt',
        answer: 2
    },
    // câu 3
    {
        question:'hình vuông có mấy cạnh',
        answer:4
    },
    // câu 4
    {
        question: 'có bao nhiêu kiểu dữ liệu trong JS',
        answer: 9
    },
    // câu 5
    {
        question: 'có tất cả bao nhiêu màu chính',
        answer: 3
    },
    // câu 6
    {
        question: '15 chia 2 dư mấy',
        answer: 1
    },
    // câu 7
    {
        question: 'quốc khánh nước Việt Nam vào tháng mấy',
        answer: 9
    },
    // câu 8
    {
        question: 'Viet Nam thống nhất năm bao nhiêu',
        answer: 1975
    },
    // câu 9
    {
        question: 'Năm nay là năm bao nhiêu',
        answer: 2020
    },
    // câu 10
    {
        question: "Kiểu boolean trong JS gồm mấy giá trị ",
        answer: 2
    }

]
let m = q2.length

for(let j = 0; j < m; j++){
    let q2random = q2[Math.floor(Math.random() * m )]
    console.log(q2random)

    let qs2 = Number(prompt(q2random.question))
    if( qs2== q2random.answer){
      
        alert("Đúng")
        diem+=1
    }
    else{
        alert("sai")
    }
    q2.splice(q2.indexOf(q2random), 1)
    m = m - 1
}

}

console.log(diem)
//ket thuc

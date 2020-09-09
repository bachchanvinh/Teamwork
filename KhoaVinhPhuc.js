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
//Bien

let diem = 0
let username = prompt("Nhập tên của bạn vào nào")
alert(`Xin chào ${username} đã đển tham gia trò chơi của chúng tôi `)
alert('Trò chơi chúng tôi gồm 2 phần, bạn có thế nhập vào ô trò chơi để chọn 1 trong 2 để tham gia nhé\n a. Trò chơi trắc nghiệm\n b. Phần trả lời câu hỏi tư duy')
// let q1 ={}
// let q2 ={}
let chontrochoi = prompt("Nhập trò chơi bạn muốn chơi vào đây nhé")
//Tro choi 1
let ktra = false
if(chontrochoi == 1){
let q1 = [
    // Câu 1
    {
        question : "Con chó sủa ra sao\n a. gau gau\n b. cạp cạp" ,
        answer :  'a'

    },
    // câu 2
    {
        question: " con cho mấy chân\n a. 3\n b.4 ",
        answer: 'a'
    },
    // câu 3
    {
        question: " con gà mấy chân\n a. 2\n b.4 ",
        answer: 'a'
    },
    // câu 4
    {
        question: "Trong những con sau đây con nào có thể bay được?\na. Đà điễu\nb. Ngỗng\nc. Vẹt\nd. Chim cánh cụt",
        answer: 'a'
    },
    // Câu 5
    {
        question: "Có bao nhiêu chấm trên hai con xúc xắc?\na. 30\nb. 36\nc. 38\nd. 42",
        answer: 'a'
    },
    // câu 6
    {
        question: "Có tất cả bao nhiêu số có 1 chữ số?\na. 10\n b. 20",
        answer: 'a'
    },
    // câu 7
    {
        question: " có tất cả bao nhiêu số có 2 chữ sô? \na.100\n b. 200",
        answer: 'a'

    },
    // câu 8
    {
        question: " có bao nhiêu đôt ngón tay\n a.28\n b.26",
        answer: 'a'
    },
    //câu 9
    {
        question: 'có bao nhiêu ngón tay\n a.10\n b.12',
        answer: 'a'
    },
    //câu 10
    {
        question: 'bạn mệt vl ko\n a. có \nb. không',
        answer: 'a'
    }

    ]
    let n = q1.length
    for(let i = 0; i < n; i++){
        let q1random = q1[Math.floor(Math.random() * n )]
        let qs1 = prompt(q1random.question)
        // while(ktra == false){
        //     alert("mời bạn nhập lại")
        //     let qs1 = Number(prompt(q1random.question))
        if(qs1 == q1random.answer){
            alert("Đúng")
            diem  +=1
        }
        else{
            alert("sai")
        }
        q1.splice(q1.indexOf(q1random), 1)
        n = n - 1

}
    }
console.log(diem)
    }
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
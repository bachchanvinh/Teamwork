//Khoa
//Câu 2:2.Learn how to randomly pick an item from an array
// For example:
// Array: [2, 5, 6, 9, 10]
// First run: 5
// Second run: 9
// let Array= [2, 5, 6, 9, 10]
// console.log(Array)
// let random = Math.floor(Math.random() * Array.length)
// console.log(Array[random])


//Phuc
// 1.Learn how to create a random number from 0 to 1
// alert(Math.random().toFixed(2))

//BAI 3

//Tro choi 1

let array=[]
let array1=[]
while(true){
    
let username = prompt("Nhập tên của bạn đi")
if(username=="q"||username=="Q"){
    break
}
let chontrochoi = prompt(`Chọn trò chơi bạn muốn trải nghiệm nhé: nhập "1" là ta chơi trắc nghiệm, nhập "2" là câu hỏi vui nhộn`)
let diem = 0
if(chontrochoi == 1){//Tro choi 2
    let goiy = 0
    let q1 = [
        {
          question : "Con chó sủa như thế nào ?\na. Gâu gâu\n b.Cạp cạp" ,
          answer :  'a'
    
        },
        {
          question: "Buổi sáng con gà gáy gì?\naÒ ó o o\nb.Ha ha",
          answer: 'a'
        },
        {
          question: "aaaa\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 4\na. 2\n b.4 ",
          answer: 'a'
        },
        {
          question: " 5\na. 2\n b.4 ",
          answer: 'a'
        }
            ]
    const n= q1.length
    for(let i = 0 ; i<n; i++){
        qrandom = q1[Math.floor(Math.random() * q1.length)]
        let da = prompt(`Câu ${i+1}:`+qrandom.question).toLowerCase()
        while(da!="a" && da!="b"){
            da =prompt(`Câu này chỉ được chọn a hoặc b: \nCâu ${i+1}: ${qrandom.question}`)
        }
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
    array.push({
        name: username,
        point: diem
    })
    for(let i = 0; i<array.length;i++){
        for(let ii = i+1;ii<array.length;ii++){
            if(array[i].point<array[ii].point){
                temp=array[ii]
                array[ii]=array[i]
                array[i]=temp
            }
        }
    }
}
else if(chontrochoi==2){alert("AAA")}//Tro choi 2
}

console.log("Bảng xếp hạng trò chơi trắc nghiệm\n"+"Hạng    "+"Người dùng           "+"Điểm")
for(let j = 0 ; j<array.length; j++){
    let spa="                    "
    if(array[j].name.length>1){spa = spa.substr(0,21-array[j].name.length)}
    console.log(`${j+1}       `,array[j].name,spa,array[j].point)
}
console.log("Bảng xếp hạng trò chơi trả lời câu hỏi\n"+"Hạng    "+"Người dùng           "+"Điểm")
for(let j = 0 ; j<array1.length; j++){
    let spa="                    "
    if(array1[j].name.length>1){spa = spa.substr(0,21-array1[j].name.length)}
    console.log(`${j+1}       `,array1[j].name,spa,array1[j].point)
}


//Tro choi 2


//ket thuc
// 10 tháng 9 2020
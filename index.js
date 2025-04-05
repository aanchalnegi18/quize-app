let questionBtn=document.querySelector('#questionbtn');
let optionsbtn=document.querySelectorAll('.option');
let nextBtn=document.querySelector('#next');
let container=document.querySelector('.content')

let questionList=[
{

question:'Who has won the most Grand Slam titles in tennis?',

Option: ['serena Williams','Novak Djokvic','Rafael Nadal','Roger Federer'],
Correct:'Novak  Djokvic'


  },

 {
    
question:'Who wrote "Romeo and Juliet"?',
Option: ['Charles Dickens','William Shakespeare','Mark Twain','Jane Austen'],
Correct:'William Shakespeare'},

  {
    
    question:'What is the largest planet in our Solar system?',
    Option: ['Saturn','Jupiter','Mars','Earth'],
    Correct:'Jupiter'
    
      },
      {
        question: 'What is the capital of France?',
        Option: ['Madrid', 'Paris', 'Berlin', 'Rome'],
        Correct: 'Paris',
      },
      {
        question: 'Which element has the chemical symbol "O"?',
        Option: ['Oxygen', 'Gold', 'Osmium', 'Hydrogen'],
        Correct: 'Oxygen',
      },
      {
        question: 'What is the square root of 64?',
        Option: ['6', '7', '8', '9'],
        Correct: '8',
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        Option: ['China', 'Japan', 'South Korea', 'Thailand'],
        Correct: 'Japan',
      },
      
      
  
    ]

    let index=0;
    
    let score=0;



function showQuestion(){
  const data=questionList[index];

   questionBtn.innerHTML=data.question;
   optionsbtn[0].innerHTML=data.Option[0]
  optionsbtn[1].innerHTML=data.Option[1];
  optionsbtn[2].innerHTML=data.Option[2]
  optionsbtn[3].innerHTML=data.Option[3]

}
showQuestion()

optionsbtn.forEach((option)=>{
  option.onclick=()=>checkAnswer(option)
})

function  checkAnswer(selectedOption){

const correctAnswer=questionList[index].Correct;
if(selectedOption.innerHTML===correctAnswer){
  score++;
  
}
else{
selectedOption.classList.add('wrongAns')
}
selectedOption.classList.add('selectOption');
  optionsbtn.forEach((option)=>{
    option.disabled=true; 
  })
}





function nextQuestion(){

  optionsbtn.forEach((option)=>{
    option.classList.remove('selectOption');
    option.classList.remove('wrongAns')
    option.disabled=false;
  })
  index++;
  scoreFunction()

}
  











 const scoreFunction=()=>{
  if(index < questionList.length){
    console.log(index);
        showQuestion()
      }
      if(index >=questionList.length){
    questionBtn.classList.add('btn')
        nextBtn.classList.add("btn")
    optionsbtn.forEach((option)=>{
      option.classList.add('btn')
    })
    if(score===0){
      container.innerHTML=`
       <div class='newDiv'.>
    <img src='https://cdn.discordapp.com/emojis/758062795202756729.gif'> 
    <h1> Your Score=${score}</h1></div>
      `
    } 
    else{

    container.innerHTML=` 
    <div class='newDiv'.>
    <img src='https://yehbhidekho.files.wordpress.com/2020/07/66c7d-winner.gif'> 
    <h1> Your Score=${score}</h1></div>`
      }}



}
 
nextBtn.addEventListener('click',nextQuestion)

 
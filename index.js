var readlinesync = require('readline-sync');
const chalk = require('chalk');


var userName = readlinesync.question(chalk.white.bgBlue.bold("Welcome, Please enter your name "));

var intro = chalk.white.bgBlue.bold("\n"+userName+", are you ready to test your vocabulory?");
var shallWeBegin = readlinesync.keyInYN(intro);

if(!shallWeBegin){
  process.exit();
}

var listOfQuestions = [{
  question: "catalyst",
  options: ['bright color', 'ancestor', 'guarantee', 'cause of a process'],
  correctAnswer: 'cause of a process'
},
{
  question: "economical",
  options: ['avoiding waste', 'religious', 'rich', 'common'],
  correctAnswer: 'avoiding waste'
},
{
  question: "anomaly",
  options: ['retirement', 'oddity', 'agreement', 'forgetfulness'],
  correctAnswer: 'oddity'
},
{
  question: "amiable",
  options: ['friendly', 'old-fashioned', 'well-respected', 'easily persuaded'],
  correctAnswer: 'friendly'
},
{
  question: "apex",
  options: ['innermost point', 'trivial', 'bitter speech', 'summit'],
  correctAnswer: 'summit'
},
{
  question: "embellish",
  options: ['spread falsehoods', 'add details to', 'discuss openly', 'cover up'],
  correctAnswer: 'add details to'
},
{
  question: "diligent",
  options: ['impoverished', 'skilled', 'overly detailed', 'careful and hard-working'],
  correctAnswer: 'careful and hard-working'
},
{
  question: "anachronism",
  options: ['controversial', 'punctual', 'heroically brave', 'belonging to another time'],
  correctAnswer: 'belonging to another time'
},
{
  question: "crystallize",
  options: ['suffer', 'become definite', 'come to existence', 'turn against'],
  correctAnswer: 'become definite'
},
{
  question: "banish",
  options: ['get rid of', 'penalize', 'set up', 'spot'],
  correctAnswer: 'get rid of'
},
{
  question: "meander",
  options: ['speak unclearly', 'set in motion', 'long for', 'wander'],
  correctAnswer: 'wander'
},
{
  question: "bleak",
  options: ['hopeless', 'aggressive', 'average', 'promising'],
  correctAnswer: 'hopeless'
},
{
  question: "obscure",
  options: ['unique', 'hide from view', 'argue', 'make untidy'],
  correctAnswer: 'hide from view'
},
{
  question: "profuse",
  options: ['abundant', 'short-tempered', 'large', 'confident'],
  correctAnswer: 'abundant'
},
{
  question: "antic",
  options: ['serious', 'respected', 'grotesque', 'childish'],
  correctAnswer: 'grotesque'
},
{
  question: "epiphany",
  options: ['revelation', 'disregard', 'religious', 'lost'],
  correctAnswer: 'grotesque'
},
];

var score = 0;
/*var highestScorers = [{
  name:
  score:
  rank:
}];*/

var levelOne = listOfQuestions.length/2;

var quesCompleted = 0;

listOfQuestions.forEach(function(eachQuestionAns){

    quesCompleted++;
    console.log("\n"+"---------------------------------------------------");
    console.log(chalk.black.bgWhite.bold("\n"+"\""+eachQuestionAns.question+"\""));
    var usersKey = readlinesync.keyInSelect(eachQuestionAns.options);
    var usersAnswer = eachQuestionAns.options[usersKey];
  
   if(usersKey == -1){
       process.exit();
   }
   else {
    if(usersAnswer === eachQuestionAns.correctAnswer){
      score++;
      console.log(chalk.green.bgGray.bold("\nYou're right\nScore "+score));
    }
    else{
      score--;
      console.log(chalk.red.bgGray.bold("\nOops, you're wrong\nScore "+score));
      console.log(chalk.green.bold("The correct answer is \""+eachQuestionAns.correctAnswer+"\""));
    }
   }
   
    if(levelOne === quesCompleted){
      console.log("\n"+"-----------------------*****------------------------");
      console.log(chalk.red.underline.bold("\nYou've completed Level 1 with Score "+score));
      
      var shallweProceed = readlinesync.keyInYN(chalk.white.bgBlue.bold('\nDo you want to play Level 2?'));

      if(!shallweProceed){
        process.exit();
      }
    }
})
console.log(chalk.red.underline.bold("\nYou've completed this short quiz with Score "+score));
  

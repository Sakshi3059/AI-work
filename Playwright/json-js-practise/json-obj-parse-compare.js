/**Parsing JSON objects and Compare:
I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer

var securityQuestions = [
 {
 question: 'What was your first pet’s name?',
 expectedAnswer: 'FlufferNutter'
 },
 {
 question: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 question: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
]
function chksecurityQuestions(securityQuestions,question) {

 // your code here
 return true or false; 
}
//Test case1:
var ques = 'What was your first pet’s name?';
var ans  =  'FlufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = 'What was your first pet’s name?';
var ans  =  'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase */


function chksecurityQuestions(securityQuestions,question,answer) {

    var ans=false;
    // your code here
    securityQuestions.forEach((quest)=>{
console.log(quest)
    if(quest.question===question){
        if(quest.expectedAnswer===answer){
            ans = true;
        }
                
    }   
})    
     return ans;

}

var securityQuestions = [
    {
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
    },
    {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
    }
]
//Test case1:
var ques = 'What was your first pet\’s name?';
var ans  =  'FlufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = 'What was your first pet\’s name?';
var ans  =  'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); //false
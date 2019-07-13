//https://chartcons.com/100-general-trivia-questions-answers/
//https://www.triviacountry.com/M1-Multiple-Choice-Trivia-Questions.htm

// var questions = [
//    "Who invented the telephone?", "Which nail grows fastest.middle", "What temperature does water boil at?", "Who discovered penicillin?", "Who did Lady Diana Spencer marry", "Which German city is famous for the perfume it produces?", "What year did the Spanish Civil War end?", "When did the First World War start?", "Where is the smallest bone in the body?", "Which is the only mammal that can’t jump?", "What does the roman numeral C represent?", "Who lived at 221B, Baker Street, London?", "How many dots are there on two dice?", "What horoscope sign has a crab?", "Where was Christopher Columbus born? ", "Who painted the Sistine Chapel?", "Who said E=mc2", "Which is the largest ocean?", "How many squares are there on a chess board?", "How many events are there in the decathlon?", "What language has the most words?", "Who sang, “I’m dreaming of a white Christmas”?", "What year did Elvis Presley die?", " What country gave Florida to the USA in 1891?", "Who gave his name to the month of July?", "What’s the most important book in the Moslem religion?", "Who sang “My Way”?", " Who was the main actor in Superman 2?", "What’s the smallest type of tree in the world?", "What activity other than jumping are kangaroos good at?", "What colours make purple?", " When was President Kennedy killed?", "Who is the tallest basketball player in the world?", "What is the first letter on a typewriter?"

// ];

// var anwers = [
//    "Bell", "100C", "Fleming", "Prince Charles", "Cologne", "1939", "1914", "ear", "elephant", "100", "Sherlock Holmes", "42", "cancer", "Genoa", "Michelangelo", "Einstein", "Pacific", "64", "10", "English", "Bing Crosby", "1977", "Spain", "Julius Caesar", "Koran", "Frank Sinatra", "Christopher Reeve", "Bonsai", "boxing", "red and blue", "1963", "(Manute Boll – 7.6 feet", "Q"
// ];



var score = 0;
var questionIndex = 0;



var questions = [
   { q: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?", a: "John and Mary" },
   { q: "When did the Liberty Bell get its name?", a: "in the 19th century, when it became a symbol of the abolition of slavery" },
   { q: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?", a: "Buttermilk" },
   { q: "The Daniel Boon museum at the home where he died can best be described how?", a: " a four-story Georgian-style home in Missouri" }
];

var selections = ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne", "when it was made, in 1701", "when it rang on July 4, 1776", "in the 19th century, when it became a symbol of the abolition of slavery", "none of the above", "Buttermilk", "Daisy", "Scout", "Tulip", "a log cabin in Kentucky", "a two-story clapboard house in Tennessee", "a four-story Georgian-style home in Missouri", "a three story brick house in Arkansas"
];

var questionDiv = ('#question');

$(document).ready(function () {

   renderQuestion();

})

// Function to render questions.
function renderQuestion() {
   // If there are still more questions, render the next one.
   // if (questionIndex <= (questions.length - 1)) 
   for (i = 0; i < questions.length; i++) {
      //   document.querySelector("#question").innerHTML = questions[i].q;
      var newQuestionDiv = $("<p>" + questions[i].q + "</p>");
      
      questionDiv.text(newQuestionDiv);
   }
}

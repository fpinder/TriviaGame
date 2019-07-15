//https://chartcons.com/100-general-trivia-questions-answers/
//https://www.triviacountry.com/M1-Multiple-Choice-Trivia-Questions.htm

// var questions = [
//    "Who invented the telephone?", "Which nail grows fastest.middle", "What temperature does water boil at?", "Who discovered penicillin?", "Who did Lady Diana Spencer marry", "Which German city is famous for the perfume it produces?", "What year did the Spanish Civil War end?", "When did the First World War start?", "Where is the smallest bone in the body?", "Which is the only mammal that can’t jump?", "What does the roman numeral C represent?", "Who lived at 221B, Baker Street, London?", "How many dots are there on two dice?", "What horoscope sign has a crab?", "Where was Christopher Columbus born? ", "Who painted the Sistine Chapel?", "Who said E=mc2", "Which is the largest ocean?", "How many squares are there on a chess board?", "How many events are there in the decathlon?", "What language has the most words?", "Who sang, “I’m dreaming of a white Christmas”?", "What year did Elvis Presley die?", " What country gave Florida to the USA in 1891?", "Who gave his name to the month of July?", "What’s the most important book in the Moslem religion?", "Who sang “My Way”?", " Who was the main actor in Superman 2?", "What’s the smallest type of tree in the world?", "What activity other than jumping are kangaroos good at?", "What colours make purple?", " When was President Kennedy killed?", "Who is the tallest basketball player in the world?", "What is the first letter on a typewriter?"

// ];

// var anwers = [
//    "Bell", "100C", "Fleming", "Prince Charles", "Cologne", "1939", "1914", "ear", "elephant", "100", "Sherlock Holmes", "42", "cancer", "Genoa", "Michelangelo", "Einstein", "Pacific", "64", "10", "English", "Bing Crosby", "1977", "Spain", "Julius Caesar", "Koran", "Frank Sinatra", "Christopher Reeve", "Bonsai", "boxing", "red and blue", "1963", "(Manute Boll – 7.6 feet", "Q"
// ];


var questions = [
   {
      question: "What was the first full length CGI movie?",
      answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
      correctAnswer: "Toy Story"
   },
   {
      question: "Which of these is NOT a name of one of the Spice Girls?",
      answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
      correctAnswer: "Fred Spice"
   },
   {
      question: "Which NBA team won the most titles in the 90s?",
      answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
      correctAnswer: "Chicago Bulls"
   },
   {
      question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
      answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
      correctAnswer: "Nirvana"
   },
   {
      question: "Which popular Disney movie featured the song, 'Circle of Life'?",
      answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
      correctAnswer: "The Lion King"
   },
   {
      question: "Finish this line from the Fresh Prince of Bel-Air theme song: 'I whistled for a cab and when it came near, the license plate said...'",
      answers: ["Dice", "Mirror", "Fresh", "Cab"],
      correctAnswer: "Fresh"
   },
   {
      question: "What was Doug's best friend's name?",
      answers: ["Skeeter", "Mark", "Zach", "Cody"],
      correctAnswer: "Skeeter"
   },
   {
      question: "What was the name of the principal at Bayside High in Saved By The Bell?",
      answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
      correctAnswer: "Mr.Belding"
   }
];

var score = 0;
var questionIndex = 0;
var correct = 0;
var incorrect = 0;
var unAswered = 0;
var timer; //for set interal time 
var time = 0;


// var questions = [
//    { q: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?", a: "John and Mary" },
//    { q: "When did the Liberty Bell get its name?", a: "in the 19th century, when it became a symbol of the abolition of slavery" },
//    { q: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?", a: "Buttermilk" },
//    { q: "The Daniel Boon museum at the home where he died can best be described how?", a: " a four-story Georgian-style home in Missouri" }
// ];

// var selections = ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne", "when it was made, in 1701", "when it rang on July 4, 1776", "in the 19th century, when it became a symbol of the abolition of slavery", "none of the above", "Buttermilk", "Daisy", "Scout", "Tulip", "a log cabin in Kentucky", "a two-story clapboard house in Tennessee", "a four-story Georgian-style home in Missouri", "a three story brick house in Arkansas"
// ];

// var questionDiv = ('#question');

$(document).ready(function () {

   renderQuestion();
   startTimer();

   // Function to render questions.
   function renderQuestion() {
      var htmlstring = "";

      for (i = 0; i < questions.length; i++) {

         var newDiv = $("<div>")
         var p = $("<p>")

         p.text(questions[i].question)
         newDiv.append(p)

         var answers = buildAnswers(questions[i], i)
         newDiv.append(answers);

         newDiv.addClass('question')

         $("#question").append(newDiv)
      }


   };

   function buildAnswers(question, index) {
      var answers = $("<div>");

      for (var i = 0; i < question.answers.length; i++) {

         var button = $("<input>")
         button.attr("type", "radio")
         button.attr("name", index)
         button.attr("value", question.answers[i])

         answers.append(button)
         var span = $(`<span> ${question.answers[i]} </span>`)
         answers.append(span);
      }

      return answers;
   }

   $("#done").on("click", submitButton);

   function submitButton() {

      var inputs = $(".question").find("input:checked")
      console.log(inputs)

      unAswered = questions.length - inputs.length

      for (var i = 0; i < inputs.length; i++) {
         //account for unanswered question by name label
         if ($(inputs[i]).val() === questions[$(inputs[i]).attr("name")].correctAnswer) {
            console.log(correct)
            correct++;
         } else {
            console.log(incorrect)
            incorrect++;
         }



      }
      displayResult();
   }


   function displayResult() {

      $(".container").empty();
      $(".container").append("<h3>Correct Answers " + correct + "</h3>");
      $(".container").append("<h3>Incorrect Answers " + incorrect + "</h3>");
      $(".container").append("<h3>unAswered Answers " + unAswered + "</h3>");

   }

   function startTimer() {
      timer = setInterval(increment, 1000)
   }

   function increment() {
      time++;
      $("#show-number").text("Totatal Remaining TIme: " + time + " Second")
      if (time === 10) {

         clearInterval(timer)
         submitButton();

      }


   }
})


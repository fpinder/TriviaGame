//https://chartcons.com/100-general-trivia-questions-answers/
//https://www.triviacountry.com/M1-Multiple-Choice-Trivia-Questions.htm



var questions = [
   {
      question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
      answers: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"],
      correctAnswer: "John and Mary"
   },
   {
      question: "When did the Liberty Bell get its name?",
      answers: ["when it was made, in 1701", "when it rang on July 4, 1776", "in the 19th century, when it became a symbol of the abolition of slavery","none of the above"],
      correctAnswer: "in the 19th century, when it became a symbol of the abolition of slavery"
   },
   {
      question: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
      answers: ["Buttermilk", "Daisy", "Scout", "Tulip"],
      correctAnswer: "Buttermilk"
   },
   {
      question: "The Daniel Boon museum at the home where he died can best be described how?",
      answers: [ "a log cabin in Kentucky", "a two-story clapboard house in Tennessee", "a four-story Georgian-style home in Missouri", "a three story brick house in Arkansas"],
      correctAnswer: "a four-story Georgian-style home in Missouri"
   },
   {
      question: "",
      answers: [],
      correctAnswer: ""
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
var intervalId;  //  Variable that will hold our interval ID when we execute  the "increment" function
var timeIncrement = 0;



$(document).ready(function () {

   // renderQuestion();
   // startTimer();

   $("#done").hide();


   $("#start").on("click", startQuiz)

   // Start Quiz
   function startQuiz() {
      $("#start").hide();
      renderQuestion();
      startTimer();
      $("#done").show();
   }



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
         var span = $(`<span> ${question.answers[i]} </span>`) //ES6 example
         answers.append(span);
      }

      return answers;
   }

   $("#done").on("click", submitButton);

   function submitButton() {

      clearInterval(intervalId);

      var inputs = $(".question").find("input:checked")

      unAswered = questions.length - inputs.length

      for (var i = 0; i < inputs.length; i++) {
         //account for unanswered question by name label
         if ($(inputs[i]).val() === questions[$(inputs[i]).attr("name")].correctAnswer) {
            // console.log(correct)
            correct++;
         } else {
            // console.log(incorrect)
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

function timeIsUp (){
   $(".container").empty();
   $(".container").append("<h2> Time is Up </h2> </br>");
   $(".container").append("<h3>Correct Answers " + correct + "</h3>");
   $(".container").append("<h3>Incorrect Answers " + incorrect + "</h3>");
   $(".container").append("<h3>unAswered Answers " + unAswered + "</h3>");
}

   function startTimer() {
      intervalId = setInterval(increment, 1000);

   }

   function increment() {
      timeIncrement++;

      $("#show-number").text("Total Remaining Time: " + timeIncrement + " Second")

      if (timeIncrement === 30) {
         clearInterval(intervalId);
         timeIsUp();

      }


   }
})


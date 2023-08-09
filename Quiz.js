var startDate
      var interval
      // function load() {
      //   startDate = new Date()
      // }

      function futureTime() {
        var dateNow = new Date()
        var date = dateNow - startDate
        var hours = Math.floor(date/1000/60/60)
        var minutes = Math.floor(date/1000/60)%60
        var seconds = Math.floor(date/1000)%60
        var milliseconds = date%1000

        document.getElementById("hours").innerHTML = `${hours}`
        document.getElementById("minutes").innerHTML = `${minutes}`
        document.getElementById("seconds").innerHTML = `${seconds}`
        document.getElementById("milliseconds").innerHTML = `${milliseconds}`

      }

      function load(){
        startDate = new Date()
        interval = setInterval(futureTime,1)
      }

      function reset(){
        clearInterval(interval)
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"
        document.getElementById("milliseconds").innerHTML = "000"
      }

      function stop(){
        clearInterval(interval)
      }

      var answer = document.getElementById("answer")
      answer.style.display = "none"
      var question = document.getElementById("question");
      var firstOne = document.getElementById("one");
      var secondOne = document.getElementById("two");
      var thirdOne = document.getElementById("three");
      var fourthOne = document.getElementById("four");

      var questionNumber = 1;
      var optionOne = false;
      var optionTwo = false;
      var optionThree = false;
      var optionFour = false;
      var marksCounter = 0;

      function option1() {
        optionOne = true;
        analyzeAnswer();
      }
      function option2() {
        optionTwo = true;
        analyzeAnswer();
      }
      function option3() {
        optionThree = true;
        analyzeAnswer();
      }
      function option4() {
        optionFour = true;
        analyzeAnswer();
      }

      function analyzeAnswer() {
        if (questionNumber == 1) {
          if (optionOne != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 2;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML = "Q.2) What is the national animal of India?";
            firstOne.innerHTML = "A. Deer";
            secondOne.innerHTML = "B. Elephant";
            thirdOne.innerHTML = "C. Royal Bengal Tiger";
            fourthOne.innerHTML = "D. Lion";
          }
        } else if (questionNumber == 2) {
          if (optionThree != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 3;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML = "Q.3) What is the national language of India?";
            firstOne.innerHTML = "A. English";
            secondOne.innerHTML = "B. German";
            thirdOne.innerHTML = "C. Japanese";
            fourthOne.innerHTML = "D. Hindi";
          }
        } else if (questionNumber == 3) {
          if (optionFour != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 4;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML =
              "Q.4) Brass gets discoloured in air because of the presence of which of the following gases in air?";
            firstOne.innerHTML = "A. Oxygen";
            secondOne.innerHTML = "B. Hydrogen sulphide";
            thirdOne.innerHTML = "C. Carbon dioxide";
            fourthOne.innerHTML = "D. Nitrogen";
          }
        } else if (questionNumber == 4) {
          if (optionTwo != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 5;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML =
              "Q.5) Which of the following is a non metal that remains liquid at room temperature?";
            firstOne.innerHTML = "A. Phosphorus";
            secondOne.innerHTML = "B. Bromine";
            thirdOne.innerHTML = "C. Chlorine";
            fourthOne.innerHTML = "D. Helium";
          }
        } else if (questionNumber == 5) {
          if (optionTwo != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 6;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML =
              "Q.6) Which of the following is used in pencils?";
            firstOne.innerHTML = "A. Graphite";
            secondOne.innerHTML = "B. Silicon";
            thirdOne.innerHTML = "C. Charcoal";
            fourthOne.innerHTML = "D. Phosphorous";
          }
        } else if (questionNumber == 6) {
          if (optionOne != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 7;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML =
              "Q.7) Which of the following metals forms an amalgam with other metals?";
            firstOne.innerHTML = "A. Lead";
            secondOne.innerHTML = "B. Mercury";
            thirdOne.innerHTML = "C. Charcoal";
            fourthOne.innerHTML = "D. Phosphorous";
          }
        } else if (questionNumber == 7) {
          if (optionTwo != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 8;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML =
              "Q.8) Whaat is the gas usually filled in the electric bulb?";
            firstOne.innerHTML = "A. Argon";
            secondOne.innerHTML = "B. Hydrogen";
            thirdOne.innerHTML = "C. Oxygen";
            fourthOne.innerHTML = "D. Nitrogen";
          }
        } else if (questionNumber == 8) {
          if (optionFour != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 9;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML = "Q.9) Washing soda is the common name for?";
            firstOne.innerHTML = "A. Calcium Bicarbonate";
            secondOne.innerHTML = "B. Sodium Bicarbonate";
            thirdOne.innerHTML = "C. Sodium Carbonate";
            fourthOne.innerHTML = "D. Calcium Carbonate";
          }
        } else if (questionNumber == 9) {
          if (optionThree != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            questionNumber = 10;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            question.innerHTML =
              "Q.10) Which of the gas is not known as green house gas?";
            firstOne.innerHTML = "A. Methane";
            secondOne.innerHTML = "B. Water Vapour";
            thirdOne.innerHTML = "C. Carbon dioxide";
            fourthOne.innerHTML = "D. Hydrogen";
          }
        } else if (questionNumber == 10) {
          if (optionFour != true) {
            alert(
              "You have given the wrong answer. Please give the right answer."
            );
            marksCounter = marksCounter - 1;
          } else {
            alert("You have given the right answer.");
            marksCounter = marksCounter + 1;
            stop()
            questionNumber = 11;
            optionOne = false;
            optionTwo = false;
            optionThree = false;
            optionFour = false;
            alert("Congratulations! You have finished the test");
            document.getElementById("quizQuestion").style.display = "none"
            document.getElementById("quizHeading").style.display = "none"
            document.getElementById("quizSubHeading").style.display = "none"
            answer.style.display = "block"
            document.getElementById("marks").innerHTML = `You have scored ${marksCounter} out of 10 in this quiz`
          }
        }
      }
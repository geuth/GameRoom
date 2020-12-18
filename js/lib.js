$(document).ready(function () {
        function hangman() {
            $(".charBox").focus(function () {
                $(this).css("background-color", "#E0872D");
            });
            $(".charBox").blur(function () {
                $(this).css("background-color", "white");
            });


            arrWord = ["elephant", "cream", "mouse", "mustard", "shy", "cake", "dog", "cat", "pink", "purple", "blue", "untamed"]

            var word = arrWord[Math.floor(Math.random() * arrWord.length)];

            var arrayWord = word.split("");

            var hiddenWord = [];
            for (var i = 0; i < arrayWord.length; i++) {
                hiddenWord.push("-");
            }
            $(".wordToGuess").text(hiddenWord.join(" "))
            var wrong = 0;
            $(".submit").click(function () {

                var wordEntered = $(".charBox").val();

                if (wordEntered == word) {
                    hiddenWord = arrayWord;
                    $(".result").text("You won!");
                } else if (hiddenWord.includes(wordEntered)) {
                    $(".result").text("You have already entered this letter!");
                } else if (!hiddenWord.includes(wordEntered)) {
                    wrong++;
                } else {

                    for (var j = 0; j < arrayWord.length; j++) {
                        if (arrayWord[j] == wordEntered) {
                            hiddenWord[j] = wordEntered;

                        }
                    }

                }
                var canvas = document.getElementById('canvas-id');
                var context = canvas.getContext('2d');
                var context2 = canvas.getContext('2d');
                var context3 = canvas.getContext('2d');
                var context4 = canvas.getContext('2d');
                var context5 = canvas.getContext('2d');
                var context6 = canvas.getContext('2d');
                var context7 = canvas.getContext('2d');
                var context8 = canvas.getContext('2d');
                var context9 = canvas.getContext('2d');
                var context10 = canvas.getContext('2d');
                var context11 = canvas.getContext('2d');
                if (wrong == 1) {

                    context.moveTo(10, 10);
                    context.lineTo(10, 150);
                    context.stroke();
                } else if (wrong == 2) {

                    context2.moveTo(10, 10);
                    context2.lineTo(190, 10);
                    context2.stroke();
                } else if (wrong == 3) {

                    context3.moveTo(90, 10);
                    context3.lineTo(90, 40);
                    context3.stroke();
                } else if (wrong == 4) {
                    context4.moveTo(10, 150);
                    context4.lineTo(150, 150);
                    context4.stroke();
                } else if (wrong == 5) {
                    context5.beginPath();
                    context5.arc(92, 49, 10, 0, Math.PI * 2);
                    context5.stroke();

                } else if (wrong == 6) {
                    context6.moveTo(90, 80);
                    context6.lineTo(90, 60);
                    context6.stroke();

                } else if (wrong == 7) {
                    context7.moveTo(90, 80);
                    context7.lineTo(100, 90);
                    context7.stroke();

                } else if (wrong == 8) {
                    context8.moveTo(90, 80);
                    context8.lineTo(75, 90);
                    context8.stroke();

                } else if (wrong == 9) {
                    context9.moveTo(90, 80);
                    context9.lineTo(75, 90);
                    context9.stroke();

                } else if (wrong == 10) {
                    context10.moveTo(90, 65);
                    context10.lineTo(75, 75);
                    context10.stroke();

                } else if (wrong == 11) {

                    context11.moveTo(100, 70);
                    context11.lineTo(90, 65);
                    context11.stroke();
                    $(".result").text("You Lost! The word was: " + word);
                    $(".submit").off('click');
                }
                $(".charBox").val("");
                $(".wordToGuess").text(hiddenWord.join(" "))
                if (hiddenWord.join("") == word) {
                    $(".result").text("You won!");

                }

            });
            $(".restart").click(function () {
                location.reload();
            });
        }


        hangman();


        function GuessNumber() {
            $(".numberBox").focus(function () {
                $(this).css("background-color", "#E0872D");
            });
            $(".numberBox").blur(function () {
                $(this).css("background-color", "white");
            });


            var num = Math.floor(Math.random() * 1000) + 1;


            $(".submitNum").click(function () {
                var numberInput = $(".numberBox").val();

                if (num > numberInput) {
                    $(".numToGuess").text("The number is higher");
                    $(".numberBox").val("");

                } else if (num < numberInput) {
                    $(".numToGuess").text("The number is lower");
                    $(".numberBox").val("");
                } else if (num == numberInput) {
                    $(".numToGuess").text("You guessed right! The number is: " + num);
                    $(".submitNum").off('click');
                }
            })
            $(".restart").click(function () {
                location.reload();
            });
        }

        GuessNumber();


        function TicTacToe() {
            var cross = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];
            var player1 = 0;
            var player2 = 0;

            function check() {
                var boxOne = $("#one ").text();
                var boxTwo = $("#two ").text();
                var boxThree = $("#three ").text();
                var boxFour = $("#four ").text();
                var boxFive = $("#five ").text();
                var boxSix = $("#six ").text();
                var boxSeven = $("#seven ").text();
                var boxEight = $("#eight ").text();
                var boxNine = $("#nine ").text();
                if ((boxOne == "X" && boxTwo == "X" && boxThree == "X") ||
                    (boxOne == "X" && boxFive == "X" && boxNine == "X") ||
                    (boxOne == "X" && boxFour == "X" && boxSeven == "X") ||
                    (boxTwo == "X" && boxFive == "X" && boxSeven == "X") ||
                    (boxThree == "X" && boxSix == "X" && boxNine == "X") ||
                    (boxThree == "X" && boxFive == "X" && boxSeven == "X") ||
                    (boxFour == "X" && boxFive == "X" && boxSix == "X") ||
                    (boxSeven == "X" && boxEight == "X" && boxNine == "X")) {
                    $(".message").text("Player One won !!");
                    player1++;
                    $(".scorePlayerOne ").text(player1);
                   
                    cross = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];
                    $("#one ").text("");
                    $("#two ").text("");
                    $("#three ").text("");
                    $("#four ").text("");
                    $("#five ").text("");
                    $("#six ").text("");
                    $("#seven ").text("");
                    $("#eight ").text("");
                    $("#nine ").text("");
    
                  

                } else if ((boxOne == "O" && boxTwo == "O" && boxThree == "O") ||
                    (boxOne == "O" && boxFive == "O" && boxNine == "O") ||
                    (boxOne == "O" && boxFour == "O" && boxSeven == "O") ||
                    (boxTwo == "O" && boxFive == "O" && boxSeven == "O") ||
                    (boxThree == "O" && boxSix == "O" && boxNine == "O") ||
                    (boxThree == "O" && boxFive == "O" && boxSeven == "O") ||
                    (boxFour == "O" && boxFive == "O" && boxSix == "O") ||
                    (boxSeven == "O" && boxEight == "O" && boxNine == "O")) {
                    $(".message").text("Player Two won !!");
                    player2++;
                 
                    $(".scorePlayerTwo").text(player2);
                    cross = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];
                    $("#one ").text("");
                    $("#two ").text("");
                    $("#three ").text("");
                    $("#four ").text("");
                    $("#five ").text("");
                    $("#six ").text("");
                    $("#seven ").text("");
                    $("#eight ").text("");
                    $("#nine ").text("");

                    
                    

                } else if (cross.length == 0) {
                    $(".message").text("This is a draw !!");
                    cross = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];
                    $("#one ").text("");
                    $("#two ").text("");
                    $("#three ").text("");
                    $("#four ").text("");
                    $("#five ").text("");
                    $("#six ").text("");
                    $("#seven ").text("");
                    $("#eight ").text("");
                    $("#nine ").text("");
                }
            }

            $("#one").click(function (event) {
              
                if(!$("#one ").is(':empty')){
                    return;
                }
                $("#one ").text("X");
               
                var indexOne = cross.indexOf("#one");
                cross.splice(indexOne, 1);
                var randomVal = cross[Math.floor(Math.random() * cross.length)];

                $(randomVal).text("O");
                var indexRand = cross.indexOf(randomVal);
                cross.splice(indexRand, 1);

                check();
            });

            $("#two").click(function (event) {
                if(!$("#two ").is(':empty')){
                   
                    return;
                }
                $("#two ").text("X");
               
                var indexTwo = cross.indexOf("#two");
                cross.splice(indexTwo, 1);
                var randomVal2 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal2).text("O");

                var indexRand2 = cross.indexOf(randomVal2);
                cross.splice(indexRand2, 1);
                check();

            });
            $("#three").click(function (event) {
                if(!$("#three ").is(':empty')){
                   
                    return;
                }
                $("#three ").text("X");
                
                var indexThree = cross.indexOf("#three");
                cross.splice(indexThree, 1);
                var randomVal3 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal3).text("O");
                
                var indexRand3 = cross.indexOf(randomVal3);
                cross.splice(indexRand3, 1);
                check();

            });

            $("#four").click(function (event) {
                if(!$("#four ").is(':empty')){
                   
                    return;
                }
                $("#four ").text("X");
               
                var indexFour = cross.indexOf("#four");
                cross.splice(indexFour, 1);
                var randomVal4 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal4).text("O");
               
                var indexRand4 = cross.indexOf(randomVal4);
                cross.splice(indexRand4, 1);
                check();
            });
            $("#five").click(function (event) {
                if(!$("#five ").is(':empty')){
                   
                    return;
                }
                $("#five ").text("X");
               
                var indexFive = cross.indexOf("#five");
                cross.splice(indexFive, 1);
                var randomVal5 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal5).text("O");
               
                var indexRand5 = cross.indexOf(randomVal5);
                cross.splice(indexRand5, 1);
                check();

            });
            $("#six").click(function (event) {
                if(!$("#six ").is(':empty')){
                   
                    return;
                }
                $("#six ").text("X");
                
                var indexSix = cross.indexOf("#six");
                cross.splice(indexSix, 1);
                var randomVal6 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal6).text("O");
               
                var indexRand6 = cross.indexOf(randomVal6);
                cross.splice(indexRand6, 1);

                check();
            });
            $("#seven").click(function (event) {
                if(!$("#seven").is(':empty')){
                   
                    return;
                }
                $("#seven").text("X");
               
                var indexSeven = cross.indexOf("#seven");
                cross.splice(indexSeven, 1);
                var randomVal7 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal7).text("O");
                
                var indexRand7 = cross.indexOf(randomVal7);
                cross.splice(indexRand7, 1);

                check();
            });
            $("#eight").click(function (event) {
                if(!$("#eight").is(':empty')){
                   
                    return;
                }
                $("#eight ").text("X");

                var indexEight = cross.indexOf("#eight");
                cross.splice(indexEight, 1);
                var randomVal8 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal8).text("O");
                
                var indexRand8 = cross.indexOf(randomVal8);
                cross.splice(indexRand8, 1);
                check();

            });

            $("#nine").click(function (event) {
                if(!$("#nine ").is(':empty')){
                   
                    return;
                }
                $("#nine ").text("X");
              
                var indexNine = cross.indexOf("#nine");
                cross.splice(indexNine, 1);
                var randomVal9 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal9).text("O");
               
                var indexRand9 = cross.indexOf(randomVal9);
                cross.splice(indexRand9, 1);
                check();

            });

            $(".resetScore").click(function () {
                $(".scorePlayerOne ").text("0");
                $(".scorePlayerTwo ").text("0");
            });




        }

        TicTacToe();


    }

)
$(document).ready(function () {
        function hangman() {
            $(".charBox").focus(function () {
                $(this).css("background-color", "#E0872D");
            });
            $(".charBox").blur(function () {
                $(this).css("background-color", "white");
            });


            arrWord = ["elephant", "cream", "mouse", "mustard"]

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
            console.log(num);

            $(".submitNum").click(function () {
                var numberInput = $(".numberBox").val();
                
                if(num > numberInput){
                    $(".numToGuess").text("The number is higher");
                    $(".numberBox").val("");

                }else if(num<numberInput){
                    $(".numToGuess").text("The number is lower");
                    $(".numberBox").val("");
                }else if(num == numberInput){
                    $(".numToGuess").text("You guessed right! The number is: " + num);
                    $(".submitNum").off('click');
                }
            })
            $(".restart").click(function () {
                location.reload();
            });
        }

        GuessNumber();







    }

)
$(document).ready(function () {
        function hangman() {
            $(".charBox").focus(function () {
                $(this).css("background-color", "#E0872D");
            });
            $(".charBox").blur(function () {
                $(this).css("background-color", "white");
            });


            arrWord = ["arrow", "rainbow", "novel", "soldier", "pie", "elephant", "cream", "mouse", "waffle", "orange", "purple",
                "milk", "computer", "science", "strawberry", "apple", "psychology", "animal", "temper", "rain", "thunder", "software", "zoo",
                "mustard", "shy", "cake", "dog", "cat", "pink", "purple", "blichthammolue", "untamed", "chat", "cowboy", "crisis", "bottle", "hug", "drawing", "painting", "prayers", "prince", "princess", "pumpkin", "kidney", "kind", "message", "president", "country", "pool", , "cart", "topic", "standard", "objects", "property", "length", "character", "rugby", "eleemosynary", "charitable", "word", "gravitas", "gravity", "scintillating", "plotz", "collapse", "faint", "surprise", "paraselene", "moonlight", "misbegotten", "made", "lyceum", "education", "popular", "discussion", "lecture", "concerts", "institution", "infodemic", "falsehood", "rumor", "opinion", "combination", "controversial", "amount", "confusing", "ambit", "sphere", "operation", "influence", "scope", "tirrivee", "tantrum", "antediluvian", "antiquated", "doomscrolling", "online", "expectation", "feeling", "hebetude", "lethargy", "beneficence", "kindness", "goodness", "consequential", "important", "result", "effects", "immemorial", "memory", "record", "knowledge", "fussbudget", "lagom", "bounteous", "abundant", "plentiful", "ambrosial", "smell", "taste", "delicious", "fragrant", "ingenious", "inventive", "resourceful", "regale", "lavishly", "delight", "crankle", "obstreperous", "boisterous", "clamorous", "noisy", "imagineer", "creative", "idea", "practical", "form", "skill", "willyard", "obstinate", "willful", "irenic", "reconciliation", "peaceful", "promote", "conciliatory", "gift", "christmas", "purchase", "customer", "compliment", "measure", "duplicitous", "deceitfulness", "speech", "speaking", "acting", "characterized", "satisfice", "garboil", "confusion", "perfervid", "impassioned", "fervent", "tarriance", "leviathan", "power", "agonist", "conflict", "eldritch",
                "weird", "spooky", "eerie", "gloaming", "twilight", "dusk", "extramundane", "universe", "beyond", "homesickness", "psephology", "nimbus", "atmosphere", "aura", "cloud", "surrounding", "desideratum", "wanted", "something", "clement", "compassionate", "merciful", "mild", "disposition", "lenient", "moody", "sulky", "grumpy", "ambivert", "intermediate", "extrovert", "introvert", "complexity", "contradiction", "diction", "writing", "library", "choice", "style", "abdicate", "relinquish", "abandon", "surrender", "possession", "release", "ice", "icing", "iciness", "ichthyophagy", "ichnology", "paleontology", "fossils", "ichthammol", "distillation", "purify", "contaminate", "icescape",
                "kale", "kaleidoscope", "kalemia", "potassium", "nurse", "doctor", "teacher", "driver", "factive", "factor", "fracture", "ferry", "macaron", "machine", "media", "medusa", "midwife", "monster", "myrinx", "eardrum", "radiability", "rehearse", "rehydrate", "relativism", "individual", "reindeer", "naivety", "naive", "nitrogen", "numerable", "number", "white", "waisted", "waitering", "waitress", "waive", "walkable", "wind", "wonderful", "wood", "worry", "wrong", "wife", "willow", "window", "wrinkle", "wreath", "wildflower", "yawn", "yearn", "yard", "yellow", "yummy", "young", "xanthemia", "xanthan", "xanthelasma", "xanthosiderite", "xanthosine", "xenocryst", "xenophilia", "xylotomous", "xylotomy", "zebroid", "zemindar", "zebra", "zebrawood", "zorilla", "vinegar", "virality", "vaccine", "vacancy", "empty"
            ];

            var word = arrWord[Math.floor(Math.random() * arrWord.length)];

            var arrayWord = word.split("");
            var wrong = 0;

            var hiddenWord = [];

            for (var i = 0; i < arrayWord.length; i++) {
                hiddenWord.push("-");
            }

            $(".wordToGuess").text(hiddenWord.join(" "))

            $(".guessWord").click(function () {


                var wordEntered = $(".charBox").val();

                if (wordEntered.toLowerCase() == word.toLowerCase()) {
                    hiddenWord = arrayWord;

                    $(".result").text("You won!");
                } else if (hiddenWord.includes(wordEntered.toLowerCase())) {
                    $(".result").text("You have already entered this letter!");
                } else if (!hiddenWord.includes(wordEntered.toLowerCase())) {
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
                var boxOne = $("#one h2").text();
                var boxTwo = $("#two h2").text();
                var boxThree = $("#three h2").text();
                var boxFour = $("#four h2").text();
                var boxFive = $("#five h2").text();
                var boxSix = $("#six h2").text();
                var boxSeven = $("#seven h2").text();
                var boxEight = $("#eight h2").text();
                var boxNine = $("#nine h2").text();

                if ((boxOne == "X" && boxTwo == "X" && boxThree == "X") ||
                    (boxOne == "X" && boxFive == "X" && boxNine == "X") ||
                    (boxOne == "X" && boxFour == "X" && boxSeven == "X") ||
                    (boxTwo == "X" && boxFive == "X" && boxEight == "X") ||
                    (boxThree == "X" && boxSix == "X" && boxNine == "X") ||
                    (boxThree == "X" && boxFive == "X" && boxSeven == "X") ||
                    (boxFour == "X" && boxFive == "X" && boxSix == "X") ||
                    (boxSeven == "X" && boxEight == "X" && boxNine == "X")) {
                    $(".message").text("Player One won !!");
                    player1++;

                    $(".scorePlayerOne ").text(player1);
                    $(".resultAnimation").addClass("resultDisplay");
                    $(".tableHide").hide();
                    cross = [];

                } else if ((boxOne == "O" && boxTwo == "O" && boxThree == "O") ||
                    (boxOne == "O" && boxFive == "O" && boxNine == "O") ||
                    (boxOne == "O" && boxFour == "O" && boxSeven == "O") ||
                    (boxTwo == "O" && boxFive == "O" && boxEight == "O") ||
                    (boxThree == "O" && boxSix == "O" && boxNine == "O") ||
                    (boxThree == "O" && boxFive == "O" && boxSeven == "O") ||
                    (boxFour == "O" && boxFive == "O" && boxSix == "O") ||
                    (boxSeven == "O" && boxEight == "O" && boxNine == "O")) {
                    $(".message").text("Player Two won !!");
                    player2++;
                    $(".tableHide").hide();
                    $(".scorePlayerTwo").text(player2);
                    $(".resultAnimation").addClass("resultDisplay");
                    cross = [];


                } else if (cross.length == 0) {
                    $(".message").text("This is a draw !!");
                    $(".resultAnimation").addClass("resultDisplay");
                    cross = [];
                    $(".tableHide").hide();
                }

            }

            $("#one").click(function (event) {

                if (!$("#one h2").is(':empty')) {
                    return;
                }
                $("#one h2").text("X");
                $("#one h2").css("color", "blue");
                var indexOne = cross.indexOf("#one");
                cross.splice(indexOne, 1);
                var randomVal = cross[Math.floor(Math.random() * cross.length)];

                $(randomVal + " h2").css("color", "red");
                $(randomVal + " h2").text("O");
                var indexRand = cross.indexOf(randomVal);
                cross.splice(indexRand, 1);

                check();
            });

            $("#two").click(function () {
                if (!$("#two h2").is(':empty')) {

                    return;
                }
                $("#two h2").text("X");
                $("#two h2").css("color", "blue");
                var indexTwo = cross.indexOf("#two");
                cross.splice(indexTwo, 1);
                var randomVal2 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal2 + " h2").css("color", "red");
                $(randomVal2 + " h2").text("O");
                var indexRand2 = cross.indexOf(randomVal2);
                cross.splice(indexRand2, 1);
                check();

            });
            $("#three").click(function (event) {
                if (!$("#three h2").is(':empty')) {

                    return;
                }
                $("#three h2").css("color", "blue");
                $("#three h2").text("X");

                var indexThree = cross.indexOf("#three");
                cross.splice(indexThree, 1);
                var randomVal3 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal3 + " h2").css("color", "red");
                $(randomVal3 + " h2").text("O");

                var indexRand3 = cross.indexOf(randomVal3);
                cross.splice(indexRand3, 1);
                check();

            });

            $("#four").click(function (event) {
                if (!$("#four h2").is(':empty')) {

                    return;
                }
                $("#four h2").css("color", "blue");
                $("#four h2").text("X");

                var indexFour = cross.indexOf("#four");
                cross.splice(indexFour, 1);

                var randomVal4 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal4 + " h2").css("color", "red");
                $(randomVal4 + " h2").text("O");

                var indexRand4 = cross.indexOf(randomVal4);
                cross.splice(indexRand4, 1);
                check();
            });
            $("#five").click(function (event) {
                if (!$("#five h2").is(':empty')) {

                    return;
                }
                $("#five h2").css("color", "blue");
                $("#five h2").text("X");

                var indexFive = cross.indexOf("#five");
                cross.splice(indexFive, 1);

                var randomVal5 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal5 + " h2").css("color", "red")
                $(randomVal5 + " h2").text("O");

                var indexRand5 = cross.indexOf(randomVal5);
                cross.splice(indexRand5, 1);
                check();

            });
            $("#six").click(function (event) {
                if (!$("#six h2").is(':empty')) {

                    return;
                }
                $("#six h2").css("color", "blue");
                $("#six h2").text("X");

                var indexSix = cross.indexOf("#six");
                cross.splice(indexSix, 1);

                var randomVal6 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal6 + " h2").css("color", "red");
                $(randomVal6 + " h2").text("O");

                var indexRand6 = cross.indexOf(randomVal6);
                cross.splice(indexRand6, 1);

                check();
            });
            $("#seven").click(function (event) {
                if (!$("#seven h2").is(':empty')) {

                    return;
                }
                $("#seven h2").css("color", "blue");
                $("#seven h2").text("X");

                var indexSeven = cross.indexOf("#seven");
                cross.splice(indexSeven, 1);

                var randomVal7 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal7 + " h2").css("color", "red");
                $(randomVal7 + " h2").text("O");

                var indexRand7 = cross.indexOf(randomVal7);
                cross.splice(indexRand7, 1);

                check();
            });
            $("#eight").click(function (event) {
                if (!$("#eight h2").is(':empty')) {

                    return;
                }
                $("#eight h2").css("color", "blue");
                $("#eight h2").text("X");

                var indexEight = cross.indexOf("#eight");
                cross.splice(indexEight, 1);

                var randomVal8 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal8 + " h2").css("color", "red");
                $(randomVal8 + " h2").text("O");

                var indexRand8 = cross.indexOf(randomVal8);
                cross.splice(indexRand8, 1);
                check();

            });

            $("#nine").click(function (event) {
                if (!$("#nine h2").is(':empty')) {

                    return;
                }
                $("#nine h2").css("color", "blue");
                $("#nine h2").text("X");

                var indexNine = cross.indexOf("#nine");
                cross.splice(indexNine, 1);

                var randomVal9 = cross[Math.floor(Math.random() * cross.length)];
                $(randomVal9 + " h2").css("color", "red");
                $(randomVal9 + " h2").text("O");

                var indexRand9 = cross.indexOf(randomVal9);
                cross.splice(indexRand9, 1);
                check();

            });

            $(".resetScore").click(function () {
                $(".scorePlayerOne ").text("0");
                $(".scorePlayerTwo ").text("0");
            });



            $(".resetBoard").click(function () {
                cross = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];
                $("#one h2").text("");
                $("#two h2").text("");
                $("#three h2").text("");
                $("#four h2").text("");
                $("#five h2").text("");
                $("#six h2").text("");
                $("#seven h2").text("");
                $("#eight h2").text("");
                $("#nine h2").text("");
                $(".message").text("");
                $(".tableHide").show();
                $(".resultAnimation").removeClass("resultDisplay");
            });
        }

        TicTacToe();


    }

)
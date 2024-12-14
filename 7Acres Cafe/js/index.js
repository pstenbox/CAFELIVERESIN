var skipIntro = false; // Set this based on your application logic

$(document).ready(function() {
    function togglePages(pageClassName) {
        // Hide all page frames
        $('.pageFrame').hide();

        // Show the specified page
        $(pageClassName).show();

        // Check if the intro animation is being hidden, and if so, stop the video
        if (!$(pageClassName).hasClass('introAnimation')) {
            const video = $('#introVideo').get(0);
            video.pause(); // Pause the video
            $('.introAnimation').addClass('hideIntroVideo');
            video.currentTime = 0; // Reset the video to the start
        }
    }

    // Determine which page to show based on skipIntro
    if (skipIntro) {
        // Directly go to a specific page, e.g., educationPortal
        togglePages('.sellSheet');
    } else {
        // Show intro animation and handle video playback
        togglePages('.introAnimation');
        const videoElement = $('#introVideo')[0]; // Get the raw HTML video element

        // Attempt to play the video.
        var playPromise = videoElement.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Autoplay started!
            }).catch(error => {
                // Autoplay was prevented.
                // Show a "Tap to Play" overlay.
                $('#videoOverlay').show();
            });
        }

        $('#videoOverlay').on('click', function() {
            videoElement.play();
            $(this).hide();
        });

        $('#introVideo').on('ended', function() {
            $('.introAnimation').fadeOut('slow', function() {
                // Move to the next .pageFrame section after the video ends
                $(this).next('.pageFrame').fadeIn('slow');
            });
        });
    }
});



$(document).ready(function(){
    $(".introAnimation").fadeIn(1500);

    const quizData = [
        {
            question: "What is 7ACRES Café Live Resin?",
            choices: [
                "Masterfully crafted by cannabis enthusiasts.",
                "Bringing together coffee and live resin flavours.",
                "All of the above."
            ],
            correctAnswer: 2 // Assuming the first choice is correct; adjust accordingly
        },
        {
            question: " What is Vanilla Delight Live Resin designed to taste like?",
            choices: [
                "Black coffee",
                "French Vanilla and full-spectrum live resin",
                "Regular distillate vape"
            ],
            correctAnswer: 1 // Assuming the first choice is correct; adjust accordingly
        },
        // {
        //     question: "What is the strain type of Vanilla Delight Live Resin? ",
        //     choices: [
        //         "Indica",
        //         "Hybrid",
        //         "Sativa"
        //     ],
        //     correctAnswer: 2 // Assuming the first choice is correct; adjust accordingly
        // },
        // {
        //     question: "Why do 7ACRES Café Live Resin All In One Vapes include a spiral mouthpiece?",
        //     choices: [
        //         "Elongate the air pathway to cool the vapour",
        //         "Shorten the air pathway to create a quicker pull",
        //         "Spiral staircases are fun to slide on"
        //     ],
        //     correctAnswer: 0 // Assuming the first choice is correct; adjust accordingly
        // },
        {
            question: "Why did 7ACRES design vapes with coffee & live resin flavours?",
            choices: [
                "To be innovative",
                "Enjoy coffee flavours without the caffeine",
                "Full-spectrum live resin is a better experience than distillate",
                "Canadians love coffee",
                "All of the above"
            ],
            correctAnswer: 4 // Assuming the first choice is correct; adjust accordingly
        },
        // Additional questions...
    ];

    let currentQuestionIndex = 0;
    let selectedAnswerIndex = null;
    let score = 0;

    const questionElement = $('.quiz_question');
    const choicesElement = $('.multiple_choice');
    const nextButton = $('.quiz_submit_btn');
    const questionCounterElement = $('.current_quiz_question');

    function resetQuiz() {
        currentQuestionIndex = 0;
        selectedAnswerIndex = null;
        score = 0;
        renderQuestion();
        $('.overlay').hide();
        $('.questionPortal .frameContent').css("filter","blur(0px)");
    }

    function renderQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.text(currentQuestion.question);
        choicesElement.empty(); // Clear previous choices

        currentQuestion.choices.forEach((choice, index) => {
            const p = $('<p>').text(choice).on('click', function() {
                selectChoice($(this), index);
            });
            choicesElement.append(p);
        });

        questionCounterElement.text(`QUESTION (${currentQuestionIndex + 1}/${quizData.length})`);
        selectedAnswerIndex = null; // Reset selected answer for the new question
    }

    function selectChoice(p, index) {
        $('.multiple_choice p').removeClass('selected_quiz_answer');
        p.addClass('selected_quiz_answer');
        selectedAnswerIndex = index;
    }

    nextButton.on('click', function() {
        if (selectedAnswerIndex === null) {
            alert('Please select an answer before continuing.');
            return;
        }

        if (quizData[currentQuestionIndex].correctAnswer === selectedAnswerIndex) {
            score++;
        }

        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            finishQuiz();
        }
    });

    function finishQuiz() {
        const scorePercentage = (score / quizData.length) * 100;
        // Update the placeholders with actual values
        document.getElementById('correctAnswers').textContent = score;
        document.getElementById('totalQuestions').textContent = quizData.length;
    
        if (scorePercentage >= 100) {
            // alert(`Congratulations! You scored ${score}/${quizData.length}.`);
            $('.congratulations_popup, .overlay').fadeIn().css("display","flex");
            $('.questionPortal .frameContent').css("filter","blur(5px)");

        } else {
            // let retryButton = $('<button>').text('Try Again').on('click', function() {
            //     location.reload(); // Reloads the page to restart the quiz
            // });
            resetQuiz();
            $('.try_again_popup, .overlay').fadeIn().css("display","flex");
            $('.questionPortal .frameContent').css("filter","blur(5px)");
            // $('body').append($('<div>').text(`You did not win, you scored ${score}/${quizData.length}.`).append(retryButton));
        }
    }
    

    renderQuestion(); // Initial render of the quiz
});

/* Older than 19 check */

// =========
var first = {
	question: "What is the name of Black Sabbath's first album?",
	choice1: "Black Sabbath",
	choice2: "Paranoid",
	choice3: "Masters of Reality",
	choice4: "Volume 4",
	answer: "Black Sabbath",
	info: "Black Sabbath is the eponymous debut studio album by English rock band Black Sabbath. Although it was poorly received by most contemporary music critics, Black Sabbath has since been credited with significantly influencing the development of heavy metal music."
};

var second = {
	question: "Who plays bass for Black Sabbath?",
	choice1: "Ozzy Osbourne",
	choice2: "Tony Iommi",
	choice3: "Geezer Butler",
	choice4: "Bill Ward",
	answer: "Geezer Butler"
}

var third = {
	question: "Which of the following is not an album by Iron Maiden?",
	choice1: "Piece of Mind",
	choice2: "The Number of the Beast",
	choice3: "British Steel",
	choice4: "Powerslave",
	answer: "British Steel"
};

// =========
var hpone = {
	question: "What subject did Albus Dumbledur teach at Hogwarts before becoming headmaster?",
	choice1: "Transfiguration",
	choice2: "Defense Against the Dark Arts",
	choice3: "Divination",
	choice4: "Herbology",
	answer: "Transfiguration",
};

// ========= Horror ============
var horOne = {
	question: '"Theyre coming to get you Barabara!" is a quote from which of the following films?',
	choice1: "Dawn of the Dead",
	choice2: "Night of the Living Dead",
	choice3: "The Last Man on Earth",
	choice4: "Day of the Dead",
	answer: "Night of the Living Dead",
	info: "<img src='https://49.media.tumblr.com/8482a600a426b5295e8a5f15f2b0001d/tumblr_nkrjrje8nv1spq12ao1_500.gif'>"
};

var horTwo = {
	question: "Which fictional hotel did the film 'The Shining' take place in?",
	choice1: "The Overlook Hotel",
	choice2: "The Hotel Cortez",
	choice3: "Oatlands Park Hotel",
	choice4: "The Grand Budapest Hotel",
	answer: "The Overlook Hotel",
	info: "<img src='http://replygif.net/i/223.gif'"
};

var horThree = {
	question: "Which is the only horror movie to win an Oscar for best picture?",
	choice1: "Jaws",
	choice2: "The Omen",
	choice3: "Silence of the Lambs",
	choice4: "Rosemary's Baby",
	answer: "Silence of the Lambs",
	info: "<img src='http://24.media.tumblr.com/86b51b546e24244d503eb30cabef53e3/tumblr_mlc9xe08pZ1roi22oo1_500.gif'"
};

var horFour = {
	question: "What is the name of the vampire from the film Nosferatu?",
	choice1: "Count Grishnackh",
	choice2: "Count Schreck",
	choice3: "Count Herzog",
	choice4: "Count Orlok",
	answer: "Count Orlok",
	info: "<img src='http://www.lovethisgif.com/uploaded_images/1910-nosferatu.gif?1'>"
};

var horFive = {
	question: "Which actor has the most on-screen appearances as Dracula",
	choice1: "Bela Lugosi",
	choice2: "Klaus Kinski",
	choice3: "Christopher Lee",
	choice4: "Max Schreck",
	answer: "Christopher Lee",
	info: "<img src='http://49.media.tumblr.com/aac3ba4ebb49c37db0b49747540f520e/tumblr_o2cjip3xr91rp0vkjo1_500.gif'>"
};

var horSix = {
	question: "Vincent Price plays Prince Prospero in an adaptation of which Edgar Allan Poe short story?",
	choice1: "The Masque of the Red Death",
	choice2: "The Pit and the Pendulum",
	choice3: "The Fall of the House of Usher",
	choice4: "Ligeia",
	answer: "The Masque of the Red Death",
	info: "<img src='https://s-media-cache-ak0.pinimg.com/originals/29/68/ca/2968caccc6ebb58ce9eca34e4b20bdb5.gif'>"
};

var horSeven = {
	question: "Which of the following films was not directed by John Carpenter?",
	choice1: "The Thing",
	choice2: "They Live",
	choice3: "Halloween",
	choice4: "The Amityville Horror",
	answer: "The Amityville Horror",
	info: "<img src='http://www.tasteofcinema.com/wp-content/uploads/2014/12/The-Amityville-Horror-1979.jpg'>"
};

var horEight = {
	question: "What's the name of the demon that possesses Regan in The Exorcist?",
	choice1: "Enlil",
	choice2: "Ugallu",
	choice3: "Pazuzu",
	choice4: "Lamashtu",
	answer: "Pazuzu",
	info: "<img src='http://40.media.tumblr.com/a5aa6418e4983048cddcf0e5fe339b5e/tumblr_n30b1nZFgk1tu7ljfo1_500.png'>"
};

var horNine = {
	question: "Which of the following films was not adapted from a novel?",
	choice1: "Rosemary's Baby",
	choice2: "Invasion of the Body Snatchers",
	choice3: "Psycho",
	choice4: "Frankenstein",
	answer: "Invasion of the Body Snatchers",
	info: "<img src='https://media.giphy.com/media/xvCCcLWlIu1QQ/giphy.gif'>"
};

var horTen = {
	question: "30 Days of Night takes place in the northernmost city in the U.S. Which city?",
	choice1: "Fairbanks, Alaska",
	choice2: "Juneau, Alaska",
	choice3: "Anchorage, Alaska",
	choice4: "Barrow, Alaska",
	answer: "Barrow, Alaska",
	info: "<img src='https://45.media.tumblr.com/b94e3d6ef818fe0f2a9af36ae3c73a21/tumblr_nzzcw0OQvE1seoyyho1_500.gif'>"
};




// ==================
var hpQuestions = [hpone];
var horQuestions = [horOne, horTwo, horThree, horFour, horFive, horSix, horSeven, horEight, horNine, horTen]
var questions = [];

// var first = {
// 	// question: "What is the name of Black Sabbath's first album?",
// 	question: '<iframe width="854" height="480" src="https://www.youtube.com/embed/PGNiXGX2nLU?autoplay=1&showinfo=0&controls=0&start=15" frameborder="0" allowfullscreen></iframe>',
// 	choice1: "Black Sabbath",
// 	choice2: "Paranoid",
// 	choice3: "Masters of Reality",
// 	choice4: "Volume 4",
// 	answer: "Black Sabbath",
// 	info: "Black Sabbath is the eponymous debut studio album by English rock band Black Sabbath. Although it was poorly received by most contemporary music critics, Black Sabbath has since been credited with significantly influencing the development of heavy metal music."
// };

$(".showquestion").click(function() {
	questions = metalQuestions;
	nextquestion();
	$("button").hide();
})

$(".metal").click(function() {
	questions = hpQuestions;
	nextquestion();
	$("button").hide();
	$("body").css('background-image', 'url("hp.jpg")')
})

$(".horror").click(function() {
	questions = horQuestions;
	nextquestion();
	$("button").hide();
})

var metalQuestions = [first, second, third];
// var questions = [first, second, third];
var num = 0;
var time = 15;
var numbercorrect = 0;
var numberwrong = 0;

function nextquestion() {
	time = 15;
	counter = setInterval(increment, 1000);
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>");
	$(".question").html(questions[num].question);
	$(".ans1").html(questions[num].choice1);
	$(".ans2").html(questions[num].choice2);
	$(".ans3").html(questions[num].choice3);
	$(".ans4").html(questions[num].choice4);
	$(".info").empty();
	$(".choice").removeClass("correct").removeClass("wrong");
};

function increment() {
	time--
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>")
	if (time == 0) {
		wronganswer();
		stop();
	} else if (time < 10) {
		$(".timer").addClass("red");
		setTimeout(function(){$(".timer").removeClass("red")}, 500)
	};
};

function stop() {
	clearInterval(counter);
	num++;
	if (num == questions.length) {
		setTimeout(endgame, 5000);
	} else {
		setTimeout(nextquestion, 5000);
	};
};

function correctanswer() {
	$(".question").html("Correct");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

function wronganswer() {
	numberwrong++;
	$(".question").html("Wrong!");
	$(".info").html("<p>"+questions[num].info+"</p>");
	if ($(".choice").text() == questions[num].answer) {
		$(this).addClass("correct");
	};
};


function endgame() {
	$(".question").html("<h2>You got " + numbercorrect + " answers correct!</h2>"
		+ "<h2>You got " + numberwrong + " wrong!</h2>");
	$(".choice").empty();
	$(".timer").empty();
	$(".info").empty();
	num = 0;
	numbercorrect = 0;
	numberwrong = 0;
	$("button").show();
};


$(".choice").click(function() {
	if ($(this).text() == questions[num].answer) {
		numbercorrect++;
		correctanswer();
		stop();
		$(this).addClass("correct");
	} else {
		// numberwrong++;
		wronganswer();
		stop();
		$(this).addClass("wrong");
		// $('.choice:contains("Night of the Living Dead")').addClass("correct");
		$(".choice:contains('" + questions[num].answer + "')").addClass("correct");
	};
});
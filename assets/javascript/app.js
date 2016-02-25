var first = {
	// question: "What is the name of Black Sabbath's first album?",
	question: '<iframe width="854" height="480" src="https://www.youtube.com/embed/PGNiXGX2nLU?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>',
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
	question: '<iframe width="854" height="480" src="https://www.youtube.com/embed/PGNiXGX2nLU?autoplay=1" frameborder="0" allowfullscreen></iframe>',
	choice1: "Ozzy Osbourne",
	choice2: "Tony Iommi",
	choice3: "Geezer Butler",
	choice4: "Bill Ward",
	answer: "Geezer Butler"
}

$(".showquestion").click(function() {
	nextquestion();
	$(".showquestion").hide();
})

var questions = [first, second, third];
var num = 0;
var time = 10;
var numbercorrect = 0;
var numberwrong = 0;

function increment() {
	time--
	$(".timer").html("<h1>Time Remaining: " + time + "</h1>")
	if (time == 0) {
		stop();
	};
};

function stop() {
	clearInterval(counter);
	setTimeout(nextquestion, 5000);
	num++;
	if (num == questions.length) {
		alert("game over!");
	};
};

function nextquestion() {
	time = 10;
	$(".timer").html("<h1>Time Remaining: " + time + "</h1>")
	counter = setInterval(increment, 1000)
	$(".question").html(questions[num].question)
	$(".ans1").html(questions[num].choice1)
	$(".ans2").html(questions[num].choice2)
	$(".ans3").html(questions[num].choice3)
	$(".ans4").html(questions[num].choice4)

	$(".choice").removeClass("correct").removeClass("wrong")
}

$(".choice").click(function() {
	if ($(this).text() == questions[num].answer) {
		// alert("wew");
		numbercorrect++;
		correctanswer();
		// stop();
		$(this).addClass("correct");
	} else {
		// alert("nerp");
		numberwrong++;
		stop();
		$(this).addClass("wrong");
	};
});

function correctanswer() {
	$(".question").html("Correct");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

// $(".choice").hover(function() {
// 	$(this).css({"width": "+=5px"})
// })

// $(".choice").click(function() {
// 	alert($(this).text());
// });
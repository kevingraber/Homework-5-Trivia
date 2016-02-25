var first = {
	question: "What is the name of Black Sabbath's first album?",
	choice1: "Black Sabbath",
	choice2: "Paranoid",
	choice3: "Masters of Reality",
	choice4: "Volume 4",
	answer: "Black Sabbath"
};

var second = {
	question: "Who plays bass for Black Sabbath?",
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

var questions = [first, second];
var num = 0;
var time = 10;
var numbercorrect = 0;
var numberwrong = 0;

function increment() {
	time--
	$(".timer").html("<h1>" + time + "</h1>")
	if (time == 0) {
		stop();
	};
};

function stop() {
	clearInterval(counter);
	setTimeout(nextquestion, 5000);
	num++;
}

function nextquestion() {
	time = 10;
	$(".timer").html("<h1>" + time + "</h1>")
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
		stop();
		$(this).addClass("correct");
	} else {
		// alert("nerp");
		numberwrong++;
		stop();
		$(this).addClass("wrong");
	};
});

// $(".choice").click(function() {
// 	alert($(this).text());
// });
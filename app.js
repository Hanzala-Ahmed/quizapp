var quizStartBtn = document.getElementsByClassName("quizStartBtn");
var quizForm = document.getElementsByClassName("quizForm");
var quizBtn = document.getElementById("quizBtn");
var setUserName = document.getElementById("setUserName");
var setEmail = document.getElementById("setEmail");

function onSubmit() {
  var formName = document.getElementById("formName");
  var formEmail = document.getElementById("formEmail");
  var formCell = document.getElementById("formCell");
  var formSchool = document.getElementById("formSchool");
  var formNameError = document.getElementById("formNameError");
  var formEmailError = document.getElementById("formEmailError");
  var formCellError = document.getElementById("formCellError");
  var formSchoolError = document.getElementById("formSchoolError");

  if (formName.value != "") {
    if (!(formName.value.length < 3)) {
      formNameError.innerHTML = "";
    } else {
      formNameError.innerHTML = "Please enter a correct name";
      formName.style.borderBottom = "2px solid red";
    }
  } else {
    formNameError.innerHTML = "Please enter your name";
  }

  var email_valid = /^[a-zA-Z0-9_.]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}$/;

  if (formEmail.value != "") {
    if (formEmail.value.match(email_valid)) {
      formEmailError.innerHTML = "";
    } else {
      formEmailError.innerHTML = "Please enter a correct Email..";
      formEmail.style.borderBottom = "2px solid red";
    }
  } else {
    formEmailError.innerHTML = "Please enter  Your Email..";
  }

  if (formCell.value != "") {
    if (formCell.value.length == 11) {
      formCellError.innerHTML = "";
    } else {
      formCellError.innerHTML = "Please enter a correct Cell #..";
    }
  } else {
    FormCellError.innerHTML = "Please enter a  Cell #..";
  }

  if (formSchool.value != "") {
    if (formSchool.value.length > 2) {
      formSchoolError.innerHTML = "";
    } else {
      formSchoolError.innerHTML = "Please enter a correct Institute Name..";
    }
  } else {
    formSchoolError.innerHTML = "Please enter your Institute Name..";
  }

  if (
    formNameError.innerHTML == "" &&
    formEmailError.innerHTML == "" &&
    formCellError.innerHTML == "" &&
    formSchoolError.innerHTML == ""
  ) {
    quizForm[0].classList.add("hide");
    quizStartBtn[0].classList.remove("hide");
    setUserName.innerText = `Name: ${formName.value}`;
    setEmail.innerText = `Email: ${formEmail.value}`;
  }
}

var quizQuestions = [
  {
    num: 1,
    question: "What is the sum of 130+125+191?",
    Option: {
      a: "335",
      b: "456",
      c: "446",
      d: "426",
    },
    answer: "446",
  },
  {
    num: 2,
    question: "If we minus 712 from 1500, how much do we get?",
    Option: {
      a: "788",
      b: "778",
      c: "768",
      d: "758",
    },
    answer: "788",
  },
  {
    num: 3,
    question: "50 times of 8 is equal to:",
    Option: {
      a: "80",
      b: "400",
      c: "800",
      d: "4000",
    },
    answer: "400",
  },
  {
    num: 4,
    question: "110 divided by 10 is:",
    Option: {
      a: "11",
      b: "10",
      c: "5",
      d: "None of these",
    },
    answer: "11",
  },
  {
    num: 5,
    question: "20+(90÷2) is equal to:",
    Option: {
      a: "50",
      b: "55",
      c: "65",
      d: "60",
    },
    answer: "65",
  },
  {
    num: 6,
    question: "The product of 82 and 5 is:",
    Option: {
      a: "400",
      b: "410",
      c: "420",
      d: "None of these",
    },
    answer: "410",
  },
  {
    num: 7,
    question: "Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
    Option: {
      a: "10",
      b: "11",
      c: "12",
      d: "13",
    },
    answer: "12",
  },
  {
    num: 8,
    question: "Solve 24÷8+2.",
    Option: {
      a: "5",
      b: "6",
      c: "8",
      d: "12",
    },
    answer: "5",
  },
  {
    num: 9,
    question: "Solve: 300 - (150x2)",
    Option: {
      a: "150",
      b: "100",
      c: "50",
      d: "0",
    },
    answer: "0",
  },
  {
    num: 10,
    question: "The product of 121 x 0 x 200 x 25 is",
    Option: {
      a: "1500",
      b: "0",
      c: "4000",
      d: "None of these",
    },
    answer: "0",
  },
];

var rightCount = document.getElementById("rightCount");
var wrongCount = document.getElementById("wrongCount");
var resultMainBox = document.getElementById("resultMainBox");
var optionUl = document.getElementsByClassName("optionUl");
var optionLists = document.getElementsByClassName("option");
var questBox = document.getElementsByClassName("questBox");
var count = 0;
var quizquestion = document.getElementById("quizquestion");
var quesNum = document.getElementById("quesNum");
var nextQuest = document.getElementById("nextQuest");
var score = 0;
var wrongCouting = 0;
quizBtn.onclick = function () {
  quizStartBtn[0].classList.add("hide");
  questBox[0].classList.remove("hide");
  quesChange(0);
  quesNum.innerHTML = `${count + 1} / ${quizQuestions.length}`;
  nextQuest.style.display = "none";
  for (var i = 0; i < optionLists.length; i++) {
    optionLists[i].setAttribute("onclick", "optionSelected(this)");
  }
};

function nextQuestion() {
  count++;
  if (count < quizQuestions.length) {
    quesChange(count);
    quesNum.innerHTML = `${count + 1} / ${quizQuestions.length}`;
    nextQuest.style.display = "none";
  } else {
    questBox[0].classList.add("hide");
    resultMainBox.classList.remove("hide");
  }
}

function quesChange(index) {
  quizquestion.innerText = quizQuestions[index].question;
  optionLists[0].innerHTML = quizQuestions[index].Option.a;
  optionLists[1].innerHTML = quizQuestions[index].Option.b;
  optionLists[2].innerHTML = quizQuestions[index].Option.c;
  optionLists[3].innerHTML = quizQuestions[index].Option.d;

  for (var i = 0; i < optionLists.length; i++) {
    optionLists[i].classList.remove("success");
    optionLists[i].classList.remove("wrong");
  }
  for (var i = 0; i < optionLists.length; i++) {
    optionLists[i].classList.remove("disabled");
  }
}

function optionSelected(answer) {
  if (answer.innerHTML === quizQuestions[count].answer) {
    console.log("correct");
    nextQuest.style.display = "block";
    answer.classList.add("success");
    score += 1;
    console.log(score);
    rightCount.lastChild.nodeValue = `${score} Corrects`;
  } else {
    console.log("wrong");
    nextQuest.style.display = "block";
    answer.classList.add("wrong");
    wrongCouting += 1;
    console.log(wrongCouting);
    wrongCount.lastChild.nodeValue = `${wrongCouting} Wrongs`;

    for (var i = 0; i < optionLists.length; i++) {
      if (optionLists[i].innerHTML === quizQuestions[count].answer) {
        optionLists[i].classList.add("success");
      }
    }
  }

  for (var i = 0; i < optionLists.length; i++) {
    optionLists[i].classList.add("disabled");
  }
}

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var minjs = 9;
var secjs = 60;
min.innerHTML = minjs;
sec.innerHTML = secjs;
document.getElementById("quizBtn").addEventListener("click", function(){
    var interval = setInterval(function(){
        secjs--;
        sec.innerHTML = secjs;
        if (secjs <= 0) {
          minjs--;
          min.innerHTML = minjs;
          secjs = 60;
        }
        if(minjs < 0){
          questBox[0].classList.add("hide");
          resultMainBox.classList.remove("hide");
          console.log("heel");
          clearInterval(interval)
        }}, 1000)});
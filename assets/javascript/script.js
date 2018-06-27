var lastScroll = window.pageYOffset || document.documentElement.scrollTop;
var y;
var pShow = false;
var off = false;
var onresize = function (e) {
    width = e.target.outerWidth;
    height = e.target.outerHeight;
};

var onscroll = function () {
    console.log("scroll");
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScroll) {
        s = -5;
        s2 = y + s;
        $("#projectDiv").attr("style", "top: " + y + s + "px;");
        y = s2;
    } else {
        s = 5
        s2 = y + s;
        $("#projectDiv").attr("style", "top: " + y + s + ";");
        y = s2;
    }
    lastScroll = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

function initProjectDiv() {

    var new1 = $("<h1>").attr("id", "projectTitle");
    var new2 = $("<h2>").attr("id", "projectP");
    var new3 = $("<a>").attr("id", "imgLink");
    new3.append($("<img>").attr("id", "projectImg"));
    var new4 = $("<p>").attr("id", "projectDes");


    var newDiv = $("<div>").attr("id", "projectDiv");
    newDiv.append(new1).append(new2).append(new3).append(new4);
    $("#container").append(newDiv);

};

function projectTrainSchedule() {
    if (off) {
        $("#projectTitle").remove();
        $("#projectDiv").remove();
        initProjectDiv();
    }

    $("#projectTitle").text("Train Schedule");
    $("#projectP").text("A train scheduling application.");
    $("#imgLink").attr("href", "https://jlarge1.github.io/TrainSchedule/").attr("target", "_blank");
    $("#projectImg").attr("src", "assets/media/TS.png");
    $("#projectDes").text("This train schedule uses firebase to store data.").append("<br><br><br><br><br><br><br><br><br><br><br><br>").append("more coming soon");
};

function projectCrystalGame() {
    if (off) {
        $("#projectTitle").remove();
        $("#projectDiv").remove();
        initProjectDiv();
    }

    $("#projectTitle").text("Crystal Collector Game");
    $("#projectP").text("A simple Javascript game.");
    $("#imgLink").attr("href", "https://jlarge1.github.io/unit-4-game/").attr("target", "_blank");
    $("#projectImg").attr("src", "assets/media/CC.png");
    $("#projectDes").text("This project allowed me to experiment with the design of the site.").append("<br><br><br><br><br><br><br><br><br><br><br><br>").append("more coming soon");
};

function projectTweetAnalysis() {
    if (off) {
        $("#projectTitle").remove();
        $("#projectDiv").remove();
        initProjectDiv();
    }

    $("#projectTitle").text("Politician Tweet Analysis");
    $("#projectP").text("A tool to analysis the words of politicians.");
    $("#imgLink").attr("href", "https://jlarge1.github.io/Project1/").attr("target", "_blank");
    $("#projectImg").attr("src", "assets/media/PTA.png");
    $("#projectDes").text("This was a group project. My role was to work on the text anaylsis. I used the Indico API for anaylsis and displayed the data in charts created with Chart.js").append("<br><br><br><br><br><br><br><br><br><br><br><br>").append("more coming soon");
};

function about() {
    $("#projectTitle").text("coming soon");
    $("#projectP").remove();
    $("#imgLink").remove();
    $("#projectImg").remove();
    $("#projectDes").remove();
    off = true;
};


width = window.outerHeight;
height = window.innerHeight;
window.addEventListener("resize", onresize);
$("#projectDiv").scroll(function () {
    console.log("scroll happened");
    y = y - 5
    $("projectDiv2").attr("style", "transform: translate(0.0," + y + ";");
});

$("#projects").on("click", function () {
    if (pShow) {
        $("#projectList").attr("style", "display:none;");
        pShow = false;
    }
    else {
        $("#projectList").attr("style", "display:inline;");
        pShow = true;
    }
});

initProjectDiv();
$("#TS").on("click", function () {

    projectTrainSchedule();
});
$("#cc").on("click", function () {
 
    projectCrystalGame();
});
$("#pta").on("click", function () {

    projectTweetAnalysis();
});
$("#about").on("click", function () {

    about();
});

// console.log("hello");

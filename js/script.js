let userchoice = "";
let computerchoice = "";
let winner = "";
let randomnumber = 0;
$(".shoot").click(function() {
  randomnumber = Math.random();
  userchoice = $(".input").val();
  $(".result").text(userchoice) 
});

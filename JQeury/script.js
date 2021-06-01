$("h2").addClass("add-color"); //in order to add class
$("h2").removeClass("slider");

$("button").html("<em>Hey</em>");
///how to add event listener
/* $("button").click(function () {
  $("h1").css("color", "red");
}); */

/* $(document).click(function () {
  $("h1").css("color", "green");
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h2").on("mouseover", function () {
  $("h2").css("color", "lightblue");
});
 */

$("button").on("click", function () {
  $("h1").animate({ margin: "20px" });
});

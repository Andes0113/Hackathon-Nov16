var animals = ["a1","a2","a3","a4","a5","a6","a7","a8"];
var back = "card";
var rand = -1;
let count = [0,0,0,0,0,0,0,0];
console.log(animals);


function addCards(section){
    console.log(section);
    $(".game").html('');
    if(section == "select"){
    }
    if(section == "animals"){
        for(let i = 0; i < 16; i++){
            rand = Math.floor(Math.random() * animals.length);
            while(count[rand] > 1){
                rand = Math.floor(Math.random() * animals.length);
            }
            count[rand]++;
            $(".game").html(`${$(".game").html()}<img src = "images/${animals[rand]}.png" class = "${animals[rand]}${count[rand]}" id = "image"></img>`);
            $(".game").html(`${$(".game").html()}<img src = "images/card.png" class = "card${animals[rand]}" id="card${count[rand]}"></img>`);
            $(`.${animals[rand]}${count[rand]}`).hide();
        }
    }
    for(let i = 0; i < 8; i++){
        count[i] = 0;
    }
}
$("#animalprompt").hide();
$("#sportsprompt").hide();
$("#peopleprompt").hide();
$("#bearsprompt").hide();

$("#dropdown").change(function() {
    addCards($("#dropdown").val());
    play($("#dropdown").val());
    $("#animalprompt").hide();
    $("#sportsprompt").hide();
    $("#peopleprompt").hide();
    $("#bearsprompt").hide();
    if ($(this).val() == "animals") {
        $("#animalprompt").show();
    }
    if ($(this).val() == "sports") {
        $("#sportsprompt").show();
    }
    if ($(this).val() == "people") {
        $("#peopleprompt").show();
    }
    if ($(this).val() == "bears") {
        $("#bearsprompt").show();
    }
});


function play(section){
$("img").on("click", function(){
    let cl = $(this).attr("class");
    $(this).hide();
    if(cl.indexOf("card")!= -1){
        $(this).hide();
        console.log($(this).attr("class").substring(4));
        console.log($(this).attr("id").substring(4));
        $(`.${$(this).attr("class").substring(4)}${$(this).attr("id").substring(4)}`).show();
    }
})};
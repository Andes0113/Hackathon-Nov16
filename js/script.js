var imagenames = ["a1","a2","a3","a4","a5","a6","a7","a8"];
var back = "card";
var rand = -1;
let count = [0,0,0,0,0,0,0,0];
let cardarr = [];
let hiderarr = [];
let lastcardid = -1;
let turn = 0;

function addCards(section){
    $(".game").html('');
    if(section == "select"){
    }
    else{
        for(let i = 0; i < 16; i++){
            rand = Math.floor(Math.random() * imagenames.length);
            while(count[rand] > 1){
                rand = Math.floor(Math.random() * imagenames.length);
            }
            count[rand]++;
            $(".game").html(`${$(".game").html()}<img src = "images/${section}/${imagenames[rand]}.png" id = "${imagenames[rand]}${count[rand]}" class = "image"></img>`);
            $(".game").html(`${$(".game").html()}<img src = "images/card.png" id = "card${imagenames[rand]}" class="card${count[rand]}"></img>`);
            $(".game").html(`${$(".game").html()}<img src = "images/correctcard.png" class = "blank${count[rand]}" id="blank${imagenames[rand]}${count[rand]}"></img>`);
            cardarr.push($(`.${imagenames[rand]}${count[rand]}`));
        }
        $(".card1").hide()
        $(".card2").hide()
        $(".blank1").hide()
        $(".blank2").hide()

    }
    for(let i = 0; i < 8; i++){
        count[i] = 0;
    }
}
$("#animalprompt").hide();
$("#sportsprompt").hide();
$("#celebrityprompt").hide();

$("#dropdown").change(function() {
    addCards($("#dropdown").val());
    play($("#dropdown").val());
    $("#animalprompt").hide();
    $("#sportsprompt").hide();
    $("#celebrityprompt").hide();
    if ($(this).val() == "animals") {
        $("#animalprompt").show();
    }
    if ($(this).val() == "sports") {
        $("#sportsprompt").show();
    }
    if ($(this).val() == "celebrities") {
        $("#celebrityprompt").show();
    }
});

$("#hide").click(function() {
    $('.image').hide();
    $('.card1').show();
    $('.card2').show();
})

function hideCards(){
    for(x = 0; x < cardarr.length(); x++){
        cardarr[i].hide()
        hiderarr[i].show()
    }
}

function play(section){
$("img").on("click", function(){
    let cl = $(this).attr("id");
    if(cl.indexOf("card")!= -1){
        $(this).hide();
        cclass = $(this).attr("class").substring(4);
        cid = $(this).attr("id").substring(4);
        console.log('cardid ' + lastcardid)
        console.log(cid)
        if(lastcardid === -1){
            lastcardid = [cid, cclass]
            $(`#${cid}${cclass}`).show();
            if($(".main").html().indexOf('Correct!')!= -1){
                $(".main").html(`${$(".main").html().substring(18)}`);
            }
            turn++;
        }
        else if(lastcardid[0] == cid){
            $(`#${cid}1`).hide()
            $(`#${cid}2`).hide()
            $(`#blank${cid}1`).show()
            $(`#blank${cid}2`).show()
            lastcardid = -1
            $(".main").html(`<h1>Correct!</h1>${$(".main").html()}`);
            turn++;
        }else{
            $(this).show();
            $(`#${lastcardid[0]}${lastcardid[1]}`).hide();
            $(`[id=card${lastcardid[0]}]`).show();
            if($(".main").html().indexOf('Correct!')!= -1){
                $(".main").html(`${$(".game").html().substring(18)}`);
            }
            lastcardid = -1
            turn = 0;
        }
        if(turn > 1){
            play(section);
        }
    }
})};
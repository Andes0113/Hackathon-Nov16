var animalimagenames = ["https://sites.google.com/site/thechildrensbiblicalzoo/_/rsrc/1381088818868/daniel-and-the-lions-den/cartoon_lion_photo_sculptures-r379990951a4a44e0b13f1b36307b8098_x7saw_8byvr_512%5B1%5D.jpg?height=400&width=400,", "https://t3.ftcdn.net/jpg/02/76/01/28/360_F_276012802_FlDSc7fFPY6nqYq66EK8otlWp9XHjieo.jpg", "https://www.clipartsfree.net/vector/small/lemmling_Cartoon_cat_Clipart_Free.png", 
"https://img2.pngio.com/baby-bunny-cartoon-clipart4png-400400-cartoon-bunny-rabbit-cartoon-rabbit-png-400_400.png", "https://lh3.googleusercontent.com/proxy/UUYPSTw0efvRwn6xxTBdoYnE2RdfYCFq81ylBQirCS-IS845N3LJnLISIOEH0HG3k01GzOCyuHNCQI_H8Hf10zIVME2sAXjg73Bdp7FK2LprgaRXwNGZe2MlZNa7OvQ7fV8AgxDFz8uBsQdytuTqZu8qzA", "https://www.clipartmax.com/png/middle/120-1202341_baby-girl-giraffe-cartoon-cute-animated-giraffe.png", "https://lh3.googleusercontent.com/proxy/DOXIdZxPUzBhzJvfyDLDGn3HD7RJpYLU3r8M9mgC8CYbOrz4jYZJTMBnxdW4aBeYC-t3SkgRTfcSMsVxNNtMAmq-J-z7UUE", "https://lh3.googleusercontent.com/proxy/jD0QQheQl49U4JrRkmdObLJHMoMGes7ennhu1Yzug8SuGVGCej5mpDASf4QHlxGVMAeZ8Hn70k9QeDqWZ8mFNu82"]
var celebrityimagenames = ["https://m.media-amazon.com/images/M/MV5BMTQwMTk3NDU2OV5BMl5BanBnXkFtZTcwNTA3MTI0Mw@@._V1_.jpg", "https://i.pinimg.com/originals/9f/3b/a9/9f3ba9e001e61f021af9d5961a7cccc7.jpg", "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MzMxMjc5ODgz/richard-nixon-9424076-1-402.jpg", "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjUxNTk3ODM3/tom-hanks-9327661-1-402.jpg", "https://i.insider.com/5ec2ed09191824076a1837e4?width=1100&format=jpeg&auto=webp",
"https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/07/Oprah-Winfrey-Photo-Credit-Harpo-Inc.-Ruven-Afanador-e1594678409848.png", "https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2018/08/29/22d69e08-aa71-11e8-8796-d12ba807e6e9_1280x720_113417.JPG?itok=Y1Fzf3rv", "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg"]
var sportsimagenames = ["https://i.pinimg.com/originals/84/a9/75/84a975dc4e74b0931e8314b54d5f2b6b.png", "https://images.beautifulhalo.com/images/400x400/201806/R/creative-cartoon-football-boys-kid-s-room-lighting-led-flush-ceiling-lighting-fixture-red-blue-green-yellow_1529551276165.jpg", "https://i.pinimg.com/474x/d1/14/50/d11450c9371e5cc6d58f618537548fdb.jpg", "https://www.seekpng.com/png/full/9-90867_cartoon-baseball-png-clip-art-royalty-free-stock.png", "https://lh3.googleusercontent.com/proxy/e1atCxXPv_pV6q5aWVO0YOMU13uitSndgiZ1YMl-DR1Sn6vZmPYTgQv8g3aB1Er5DxwDD82C4YTiuPO8Mk435JgZB31lHbo",
"https://www.clipartsfree.net/vector/small/bowling_ball_Clipart_Free.png", "https://res.tinkleo.com/uploads/goods/14/20191017/67eb426fa3b44942b0250b9a170c4216_400X400.jpg", "https://static.wikia.nocookie.net/warehouse13/images/9/9d/Baylor_Dodgeball_%28Cut%29.png/revision/latest?cb=20130920183546"]
var imagenames2 = ["a1","a2","a3","a4","a5","a6","a7","a8"];
var imagenames = [];
var back = "card";
var rand = -1;
let count = [0,0,0,0,0,0,0,0];
let cardarr = [];
let hiderarr = [];
let lastcardid = -1;
let turn = 0;

function addCards(section){
    $(".game").html('');
    if(section == "animals"){
        imagenames = animalimagenames;
    }else if(section == "celebrities"){
        imagenames = celebrityimagenames;
    }else if(section == "sports"){
        imagenames = sportsimagenames;
    }
    if(section == "select"){
    }
    else{
        for(let i = 0; i < 16; i++){
            rand = Math.floor(Math.random() * imagenames.length);
            while(count[rand] > 1){
                rand = Math.floor(Math.random() * imagenames.length);
            }
            count[rand]++;
            $(".game").html(`${$(".game").html()}<img src = "${imagenames[rand]}" id = "${imagenames2[rand]}${count[rand]}" class = "image"></img>`);
            $(".game").html(`${$(".game").html()}<img src = "images/card.png" id = "card${imagenames2[rand]}" class="card${count[rand]}"></img>`);
            $(".game").html(`${$(".game").html()}<img src = "images/correctcard.png" class = "blank${count[rand]}" id="blank${imagenames2[rand]}${count[rand]}"></img>`);
            cardarr.push($(`.${imagenames2[rand]}${count[rand]}`));
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
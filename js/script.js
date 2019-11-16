var animals = ["a1","a2","a3","a4","a5","a6","a7","a8"];
var back = "card";
console.log(animals);

function addcards(section){
    console.log(section);
    if(section == "animals"){
        $(".main").html(`<img src = "images/${animals[0]}"`);
    }
}
$("#dropdown").change(()=>{
    addcards($("#dropdown").val());
})
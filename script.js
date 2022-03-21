window.addEventListener("load", init);
var kepek = [
    {
        cim: "Kylian Mbappé",
        eleresiut:"./kepek/01.jpg",
        leírás:"Kylian Mbappé",
    },
    {
        cim: "Cristiano Ronaldo",
        eleresiut:"./kepek/02.jpg",
        leírás:"Cristiano Ronaldo",
    },
    {
        cim: "Karim Benzema",
        eleresiut:"./kepek/03.jpg",
        leírás:"Karim Benzema",
    },
    {
        cim: "Paul Pogba",
        eleresiut:"./kepek/04.jpg",
        leírás:"Paul Pogba",
    },
    {
        cim: "Robert Lewandowski",
        eleresiut:"./kepek/05.jpg",
        leírás:"Robert Lewandowski",
    },
    {
        cim: "Zlatan Ibrahimović",
        eleresiut:"./kepek/06.jpg",
        leírás:"Zlatan Ibrahimović",
    },
]
function ID(elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return  document.getElementsByClassName(elem)
}
function $(elem){
    return  document.querySelectorAll(elem)
}
var aktualiskepIndex = 0;
function init(){
    kiirKepek()
    kepkeret()
    $("#bal")[0].addEventListener("click",bal)
    $("#jobb")[0].addEventListener("click",jobb)
}
function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img src='"+ kepek[i].eleresiut+ "' class='kepek' id='"+i +"' alt='cicás képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;

}

function kepkeret() {
    for (let index = 0; index < kepek.length; index++) {
        $("#galeria div img")[index].addEventListener("click",kattintás)
    }
}
function kattintás(event) {
    aktualiskepIndex= event.target.id
    kepMegjelenit();
}
function kepMegjelenit() {
    var txt = "<img src='"+kepek[aktualiskepIndex].eleresiut +"' alt='nagykep'/>"
    ID("nagykep").innerHTML = txt;
    
}

function bal() {
    aktualiskepIndex--;
    if (aktualiskepIndex < 0) {
        aktualiskepIndex=kepek.length-1
    }
    kepMegjelenit()
}
function jobb() {
    aktualiskepIndex++;
    if (aktualiskepIndex > kepek.length-1) {
        aktualiskepIndex=0
    }
    kepMegjelenit()
}
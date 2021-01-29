menu_list = ["Chicken Tandoori Pizza",
            "Veg Supreeeme Pizza",
            "Panner Tikka Pizza",
            "Deluxe Veggie Pizza",
            "Chicken Supreeme Pizza"];


function getmenu(){
    var htmldata;

    htmldata = "<ol class='menulist'>"

    menu_list.sort();

    for (var i = 0; i < menu_list.length; i++){
        htmldata = htmldata+ '<li>' + menu_list[i] + '</li>'
    }

    htmldata= htmldata + "</ol>"
    
    document.getElementById("display-menu").innerHTML = htmldata;
}


function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list.push(item);
    menu_list.sort();
    htmldata = "<section class='cards'>" 
    for (var i = 0; i < menu_list.length; i++){

        htmldata = htmldata+ '<div class="card">' + '<img src = "pizzaImg.png"/>' + menu_list[i] + '</div>'
    }
    htmldata=htmldata + "</section>"
    document.getElementById("display_addmenu").innerHTML= htmldata;
} 
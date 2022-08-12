function menu(e){
    if(e.name === "menu"){
        e.name = 'close';
        document.getElementById('menu').style.left = "0";

    }
    else{
        e.name = 'menu';
        document.getElementById('menu').style.left = "-100%";

    }
}
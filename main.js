function menu(e){
    if(e.name === "menu"){
        e.name = 'close';
        document.getElementById('menu').style.right = "0";

    }
    else{
        e.name = 'menu';
        document.getElementById('menu').style.right = "-100%";

    }
}
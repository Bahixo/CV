function card(){
    if(document.querySelector("body").offsetWidth>600){
        if($("#carte").css("display")==="none"){
            $("#carte").css("display","block");
            $("#carteDeVisite").css("width","393.75px");
        }else{
            $("#carte").css("display","none");
            $("#carteDeVisite").css("width","262.5px");
        }
    }
}

function cardZoom(){
    if(document.querySelector("body").offsetWidth<=600){
        let cShape=document.getElementById("carte");
        if(cShape.className!= "cBig"){
            $("#carte").removeClass();
            $("#carte").addClass("cBig");
        }else if(cShape.className==="cBig"){
            $("#carte").removeClass("cBig");
            $("#carte").addClass("cLittle");
        }
    }
}

function alertInfo(){
    alert("Ce formulaire n'est là qu'à titre démonstratif pour l'instant.\nMerci d'avoir pris le temps d'explorer mon CV.\nN'hésitez pas à me contacter par mail (Voir carte de visite)")
}

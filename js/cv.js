function card(){
    if($("#carte").css("display")==="none"){
        $("#carte").css("display","block");
        $("#carteDeVisite").css("width","393.75px");
    }else{
        $("#carte").css("display","none");
        $("#carteDeVisite").css("width","262.5px");
    }
}

function alertInfo(){
    alert("Ce formulaire n'est là qu'à titre démonstratif pour l'instant.\nMerci d'avoir pris le temps d'explorer mon CV.\nN'hésitez pas à me contacter par mail (Voir carte de visite)")
}

function card(){
    if($("#carte").css("display")==="none"){
        $("#carte").css("display","block");
        $("#carteDeVisite").css("width","393.75px");
    }else{
        $("#carte").css("display","none");
        $("#carteDeVisite").css("width","262.5px");
    }
}

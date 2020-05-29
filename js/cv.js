function card(){
    if($("#carte").css("display")==="none"){
        $("#carte").css("display","block");
        $("#carteDeVisite").css("width","225px");
    }else{
        $("#carte").css("display","none");
        $("#carteDeVisite").css("width","150px");
    }
}

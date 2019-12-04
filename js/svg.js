xOffset = 10;
yOffset = 10;

this.zoom_image = function () {

    $("path").hover(function (e) {

        monImage = "";
        monImage = this.id;
        monImage += ".jpg";

        this.texte = this.title;
        this.title = "";

        var montitre = "<br>" + $(this).attr('title'); // rentre le contenu de l'attribut title dans une variable   

        //console.log(montitre);
        // alert( montitre);
        // alert($(this).attr(""+this.title));

        $("body").append("<p id='zoom'><img src= img/" + monImage + " />" + montitre + "</p>");
        var iWindowsSize = $(window).width();
        //console.log(iWindowsSize);
        if (iWindowsSize <= 768) {
            //console.log(e.pageX);
            if(e.pageX>230){
            xOffset2 = 300;
            
            var a = (e.pageX - xOffset2);
            $("#zoom").css("top", (e.pageY - yOffset) + "px").css("left", (a)).fadeIn("slow"); //vers la gauche
        }else{

            $("#zoom").css("top", (e.pageY - yOffset) + "px").css("left", (e.pageX + xOffset) + "px").fadeIn("slow"); //vers la droite

        } }else {

            $("#zoom").css("top", (e.pageY - yOffset) + "px").css("left", (e.pageX + xOffset) + "px").fadeIn("slow");
        }
    },
        function () {
            this.title = this.texte;
            //alert(" je sors d e la vignette");
            $("#zoom").remove();
        });
};

$(document).ready(function () {
    zoom_image();
});
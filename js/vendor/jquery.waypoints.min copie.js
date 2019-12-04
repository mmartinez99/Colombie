xOffset = 20;
yOffset = 10;
this.zoom_image = function () {

    $("path").hover(function (e) {
        //alert(this.id);
        //alert(this.title);
        monImage="";
        monImage=this.id;
        monImage+=".jpg";
      
        console.log(monImage);
        //alert(monImage);
        $("body").append("<p id='zoom'><img src=" + monImage +" /> </p>");

        $("#zoom").css("top", (e.pageY - xOffset) + "px").css("left", (e.pageX + yOffset) + "px").fadeIn("slow");
    },//position de la souris en x et y 
        function () {
           // this.title = this.texte;
            //alert(" je sors d e la vignette");
            $("#zoom").remove();//retire grande image
        });
    };



$(document).ready(function () {
    zoom_image();
});

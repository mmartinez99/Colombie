var tableauMarker = new Array();

function initialiser() {
    var latlng = new google.maps.LatLng(4.419513441281213,-74.48081636176164);
    var options = {
        center: latlng,
        zoom: 5.8,
        mapTypeId: google.maps.MapTypeId.hybrid
    };
    var carte = new google.maps.Map(document.getElementById("carte"), options);

    DataPourMarker = new Array();
    DataPourMarker.latitude = 3.27905;
    DataPourMarker.longitude = -76.5287;
    DataPourMarker.titre = "Cristo Rey";
    DataPourMarker.url = "https://www.colombia.com/turismo/sitios-turisticos/cali/atractivos-turisticos/sdi212/51376/monumento-a-cristo-rey";

    DataPourMarker1 = new Array();
    DataPourMarker1.latitude = 4.60971;
    DataPourMarker1.longitude = -74.08175;
    DataPourMarker1.titre = "HOSPITAL FUNDACION SANTA FÉ    ";
    DataPourMarker1.icon = 'img/hopital.png';



    DataPourMarker2 = new Array();
    DataPourMarker2.latitude = 7.0625358;
    DataPourMarker2.longitude = -73.0858228;
    DataPourMarker2.titre = " Ecoparque Cerro del Santisimo    ";
    DataPourMarker2.url = "https://cerrodelsantisimo.com";

    DataPourMarker3 = new Array();
    DataPourMarker3.latitude = 5.02208;
    DataPourMarker3.longitude = -74.00481;
    DataPourMarker3.titre = "Catedral de Sal";
    DataPourMarker3.url = "https://www.catedraldesal.gov.co";



    DataPourMarker4 = new Array();
    DataPourMarker4.latitude = 10.39972;
    DataPourMarker4.longitude = -75.51444;
    DataPourMarker4.titre = "Monumento India Catalina";
    DataPourMarker4.url = "https://www.colombia.com/turismo/sitios-turisticos/cartagena/atractivos-turisticos/sdi463/72531/monumento-a-la-india-catalina";

    DataPourMarker5 = new Array();
    DataPourMarker5.latitude = 4.818199396580395;
    DataPourMarker5.longitude =-75.69900579107238;
    DataPourMarker5.titre = "HOSPITAL SAN JORGE";
    DataPourMarker5.icon = 'img/hopital.png';

    DataPourMarker6 = new Array();
    DataPourMarker6.latitude = 10.96854;
    DataPourMarker6.longitude = -74.78132;
    DataPourMarker6.titre = " Monumento Ventana Al Mundo    ";
    DataPourMarker6.url = "https://www.tripadvisor.fr/Attraction_Review-g297473-d15606617-Reviews-Monumento_Ventana_Al_Mundo-Barranquilla_Atlantico_Department.html";

    DataPourMarker7 = new Array();
    DataPourMarker7.latitude =10.39972;
    DataPourMarker7.longitude =-75.51444;
    DataPourMarker7.titre = "Monumento Pedro de Heredia    ";
    DataPourMarker7.url = "https://www.tripadvisor.fr/Attraction_Review-g297476-d8282518-Reviews-Monumento_Pedro_de_Heredia-Cartagena_Cartagena_District_Bolivar_Department.html";

    DataPourMarker8 = new Array();
    DataPourMarker8.latitude = 4.5907471;
    DataPourMarker8.longitude = -77.41667;
    DataPourMarker8.titre = "Las Lajas Sanctuary    ";
    DataPourMarker8.url = "http://santuariolavirgendelaslajas.com/index.html";


    DataPourMarker9 = new Array();
    DataPourMarker9.latitude =-3.6683968338062325;
    DataPourMarker9.longitude = -70.04312092687267;
    DataPourMarker9.titre = "HOSPITAL SAN RAFAEL";
    DataPourMarker9.icon = 'img/hopital.png';


    DataPourMarker10 = new Array();
    DataPourMarker10.latitude = 4.8170927;
    DataPourMarker10.longitude = -75.7150784;
    DataPourMarker10.titre = "Catedral de Nuestra Senora de la Pobreza";
    DataPourMarker10.url = "http://diocesisdepereira.org.co/parroquia/nuestra-senora-de-la-pobreza/";

    DataPourMarker11 = new Array();
    DataPourMarker11.latitude = 4.8170927;
    DataPourMarker11.longitude = -75.7150784;
    DataPourMarker11.titre = "Monumento a los Colonizadores";
    DataPourMarker11.url = "https://www.colombia.com/turismo/sitios-turisticos/manizales/atractivos-turisticos/sdi328/78469/monumento-a-los-colonizadores";

    DataPourMarker12 = new Array();
    DataPourMarker12.latitude =5.7390888;
    DataPourMarker12.longitude = -73.071709;
    DataPourMarker12.titre = "Pantano de Vargas Monumento a los 14 lanceros    ";
    DataPourMarker12.url = "https://colombia.travel/es/paipa/admira-el-monumento-del-pantano-de-vargas";

    DataPourMarker13 = new Array();
    DataPourMarker13.latitude = 1.9273077;
    DataPourMarker13.longitude = -76.4492841;
    DataPourMarker13.titre = "La Chaquira    ";
    DataPourMarker13.url = "https://colombia.travel/fr/san-agustin/el-tablon-la-chaquira-y-la-pelota/";


    DataPourMarker14 = new Array();
    DataPourMarker14.latitude =4.6911686;
    DataPourMarker14.longitude =-74.1807121;
    DataPourMarker14.titre = "Embajada de Francia";
    DataPourMarker14.url = "https://co.ambafrance.org";
    DataPourMarker14.icon = 'img/ambassade2.png';

    DataPourMarker15 = new Array();
    DataPourMarker15.latitude =2.43823;
    DataPourMarker15.longitude =-76.61316;
    DataPourMarker15.titre = "    HOPITAL SUSANA LOPEZ DE VALENCIA ";
    DataPourMarker15.icon = 'img/hopital.png';

    DataPourMarker16 = new Array();
    DataPourMarker16.latitude =1.8804976;
    DataPourMarker16.longitude =-76.2697416;
    DataPourMarker16.titre = "    HOSPITAL ARSENIO REPIZO VANEGAS    ";
    DataPourMarker16.icon = 'img/hopital.png';



    tabMarker = new Array();
    tabMarker.push(DataPourMarker);
    tabMarker.push(DataPourMarker1);
    tabMarker.push(DataPourMarker2);
    tabMarker.push(DataPourMarker3);
    tabMarker.push(DataPourMarker4);
    tabMarker.push(DataPourMarker5);
    tabMarker.push(DataPourMarker6);
    tabMarker.push(DataPourMarker7);
    tabMarker.push(DataPourMarker8);
    tabMarker.push(DataPourMarker9);
    tabMarker.push(DataPourMarker10);
    tabMarker.push(DataPourMarker11);
    tabMarker.push(DataPourMarker12);
    tabMarker.push(DataPourMarker13);
    tabMarker.push(DataPourMarker14);
    tabMarker.push(DataPourMarker15);
    tabMarker.push(DataPourMarker16);


    for (i = 0; i < tabMarker.length; i++) {
        x = tabMarker[i]['latitude'];
        y = tabMarker[i]['longitude'];
        monTitre = tabMarker[i]['titre'];
        url=tabMarker[i]['url'];
        icon=tabMarker[i]['icon'];

        monMarker = new google.maps.Marker({
            position: new google.maps.LatLng(x, y),
            title: monTitre,
            url:url,
            icon:icon
        });
        tableauMarker[i] = monMarker;
        monMarker.setMap(carte);
    }

    for (i = 0; i < tableauMarker.length; i++) {
        google.maps.event.addListener(tableauMarker[i], 'click', function () {
            window.location.href = this.url;
        });  
    }
}

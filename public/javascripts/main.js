/**
 * Created by Stefan Aleksik on 13.5.2017.
 */
//JS
var m_menu;
var m_menuBtn;
var m_mapElem;
var m_ARBtn;

var map;
var mapArElem;

function init()
{
    m_mapElem = document.getElementById('map');
    m_menu = document.getElementsByClassName('final-menu')[0];
    m_menuBtn = document.getElementById('menu');
    m_ARBtn = document.getElementById('check');
    mapArElem = document.getElementById('ar');

    m_menu.style.display = "none";
    mapArElem.style.display = "none";
    menuOptions();
    AROptions();
    loadDoc();
}

function menuOptions()
{
    m_menuBtn.addEventListener("click", showMenu);
    console.log("menu");
}

function AROptions()
{
    m_ARBtn.addEventListener("click", mapOptions);
    console.log(document.getElementById('check').checked);
}

function mapOptions()
{
    if(m_ARBtn.checked == true)
    {

        m_mapElem.style.display = "none";
        mapArElem.style.display = "inline";
        //  mapArElem.innerHTML = "<div id='ar'> <img src='img/AR.png'> </div>";
        //m_mapElem.innerHTML = "<img src='img/AR.png'>";
    }
    else
    {
        mapArElem.style.display = "none";
        m_mapElem.style.display = "inline";

    }
}

function showMenu()
{
    if(m_menu.style.display == "none") m_menu.style.display = 'block';
    else m_menu.style.display = "none";
}

function initMap()
{
    m_mapElem = document.getElementById('map');
    m_mapElem.style.display = "inline";

    var location = {lat: 56.8417765, lng: 14.7477541};
    map = new google.maps.Map(m_mapElem, {
        zoom: 9,
        center: location,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false
    });
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var weather = JSON.parse(this.responseText);
            document.getElementById("weather").src = 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
            //console.log(weather);
            //alert(weather);
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Vaxjo&APPID=69a43687fbe16c2e579431b72a1a04a5", true);
    xhttp.send();
}



window.addEventListener("load", init);

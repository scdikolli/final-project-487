$(document).ready(function(){
  console.log('scripts loaded');
  });

//start Youtube API
  // 2. This code loads the IFrame Player API code asynchronously.
       var tag = document.createElement('script');

       tag.src = "https://www.youtube.com/iframe_api";
       var firstScriptTag = document.getElementsByTagName('script')[0];
       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

       // 3. This function creates an <iframe> (and YouTube player)
       //    after the API code downloads.
       var player;
       function onYouTubeIframeAPIReady() {
         player = new YT.Player('player', {
           height: '250%',
           width: '100%',
           videoId: 'RMW3fAructY',
           events: {
             'onReady': onPlayerReady,
             'onStateChange': onPlayerStateChange
           }
         });
       }

       // 4. The API will call this function when the video player is ready.
       function onPlayerReady(event) {
         event.target.playVideo();
       }

       // 5. The API calls this function when the player's state changes.
       //    The function indicates that when playing a video (state=1),
       //    the player should play for six seconds and then stop.
       var done = false;
       function onPlayerStateChange(event) {
         if (event.data == YT.PlayerState.PLAYING && !done) {
           setTimeout(stopVideo, 6000);
           done = true;
         }
       }
       function stopVideo() {
         player.stopVideo();
       }
//end Youtube API

//start Google Maps API
// Initialize and add the map
function initMap() {
  // The locations
  var glendale = {lat: 33.5275, lng: -112.2625};
  var santaclara = {lat: 37.403, lng: -121.970};
  var pasadena = {lat: 34.161, lng: -118.168};
  var seattle = {lat: 47.5952, lng: -122.3316};
  var denver = {lat: 39.743889, lng: -105.02};
  var chicago = {lat: 41.8623, lng: -87.6167};
  var louisville = {lat: 38.205833, lng: -85.758889};
  var columbus = {lat: 40.001667, lng: -83.019722};
  var landover = {lat: 38.907778, lng: -76.864444};
  var philadelphia = {lat: 39.900833, lng: -75.167};
  var cleveland = {lat: -75.1675, lng: -81.699444};
  var eastrutherford = {lat: 40.813528, lng: -74.074361};
  var foxborough = {lat: 42.090944, lng: -71.264344};
  var pittsburgh = {lat: 40.446667, lng: -80.015833};
  var atlanta = {lat: 33.755, lng: -84.401};
  var tampa = {lat: 27.975833, lng:  -82.503333};
  var miamigardens = {lat: 25.958056, lng: -80.238889};
  var nashville = {lat: 36.166389, lng: -86.771389};
  var detroit = {lat: 42.34, lng:  -83.045556};
  var minneapolis = {lat: 44.974, lng: -93.258};
  var kansascity = {lat: 39.048889, lng: -94.483889};
  var indianapolis = {lat: 39.760056, lng: -86.163806};
  var stlouis = {lat: 38.632778, lng: -90.188611};
  var neworleans = {lat: 33.755, lng: -84.401};
  var houston = {lat: 29.684722, lng: -95.410833};
  var arlington = {lat: 32.747778, lng: -97.092778};

  // The map, centered at Glendale
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: glendale});

      var contentString2 = '<div id="content">'+
                 '<div id="siteNotice">'+
                 '</div>'+
                 '<h1>University of Phoenix Stadium</h1>'+ '<h2>City: Glendale</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 59,157</h2>'+
                 '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                 'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                 '</div>'+
                 '</div>';
       var contentString3 = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1>Levis Stadium</h1>'+ '<h2>City: Santa Clara</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 107,550</h2>'+
                  '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                  'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                  '</div>'+
                  '</div>';
        var contentString4 = '<div id="content">'+
                   '<div id="siteNotice">'+
                   '</div>'+
                   '<h1>Rose Bowl</h1>'+ '<h2>City: Pasadena</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 118,084</h2>'+
                   '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                   'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                   '</div>'+
                   '</div>';
       var contentString5 = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1>CenturyLink Field</h1>'+ '<h2>City: Seattle</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 56,021</h2>'+
                  '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                  'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                  '</div>'+
                  '</div>';
      var contentString6 = '<div id="content">'+
                 '<div id="siteNotice">'+
                 '</div>'+
                 '<h1>Sports Authority Field at Mile High</h1>'+ '<h2>City: Denver</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 57,140</h2>'+
                 '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                 'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                 '</div>'+
                 '</div>';
     var contentString7 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1>Soldier Field</h1>'+ '<h2>City: Chicago</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 105,208</h2>'+
                '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                '</div>'+
                '</div>';
      var contentString8 = '<div id="content">'+
                 '<div id="siteNotice">'+
                 '</div>'+
                 '<h1>Papa Johns Cardinal Stadium</h1>'+ '<h2>City: Louisville</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 52,138</h2>'+
                 '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                 'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                 '</div>'+
                 '</div>';
     var contentString9 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1>Ohio Stadium</h1>'+ '<h2>City: Columbus</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 62,897</h2>'+
                '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                '</div>'+
                '</div>';
    var contentString10 = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
               '<h1>FedEx Field</h1>'+ '<h2>City: Landover</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 95,672</h2>'+
               '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
               'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
               '</div>'+
               '</div>';
     var contentString11 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1>Lincoln Financial Field</h1>'+ '<h2>City: Philadelphia</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 107,378</h2>'+
                '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                '</div>'+
                '</div>';
      var contentString12 = '<div id="content">'+
                 '<div id="siteNotice">'+
                 '</div>'+
                 '<h1>FirstEnergy Stadium</h1>'+ '<h2>City: Cleveland</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 51,323</h2>'+
                 '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                 'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                 '</div>'+
                 '</div>';
     var contentString13 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1>MetLife Stadium</h1>'+ '<h2>City: East Rutherford</h2>' + '<h2>Number of Shows: 3</h2>' + '<h2>Capacity: 165,654</h2>'+
                '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                '</div>'+
                '</div>';
    var contentString14 = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
               '<h1>Gillette Stadium</h1>'+ '<h2>City: Foxborough</h2>' + '<h2>Number of Shows: 3</h2>' + '<h2>Capacity: 174,764</h2>'+
               '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
               'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
               '</div>'+
               '</div>';
   var contentString15 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1>Heinz Field</h1>'+ '<h2>City: Pittsburgh</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 56,445</h2>'+
              '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
              'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
              '</div>'+
              '</div>';
    var contentString16 = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
               '<h1>Mercedes-Benz Stadium</h1>'+ '<h2>City: Atlanta</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 116,746</h2>'+
               '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
               'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
               '</div>'+
               '</div>';
     var contentString17 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1>Raymond James Stadium</h1>'+ '<h2>City: Tampa</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 55,909</h2>'+
                '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                '</div>'+
                '</div>';
    var contentString18 = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
               '<h1>Hard Rock Stadium</h1>'+ '<h2>City: Miami Gardens</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 47,818</h2>'+
               '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
               'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
               '</div>'+
               '</div>';
     var contentString19 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1>Nissan Stadium</h1>'+ '<h2>City: Nashville</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 56,112</h2>'+
                '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                '</div>'+
                '</div>';
      var contentString20 = '<div id="content">'+
                 '<div id="siteNotice">'+
                 '</div>'+
                 '<h1>Ford Field</h1>'+ '<h2>City: Detroit</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 49,464</h2>'+
                 '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                 'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                 '</div>'+
                 '</div>';
     var contentString21 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1>U.S. Bank Stadium</h1>'+ '<h2>City: Minneapolis</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 98,774</h2>'+
                '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                '</div>'+
                '</div>';
      var contentString22 = '<div id="content">'+
                 '<div id="siteNotice">'+
                 '</div>'+
                 '<h1>Arrowhead Stadium</h1>'+ '<h2>City: Kansas City</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 58,611</h2>'+
                 '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                 'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                 '</div>'+
                 '</div>';
     var contentString23 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1>Lucas Oil Stadium</h1>'+ '<h2>City: Indianapolis</h2>' + '<h2>Number of Shows: 2</h2>' + '<h2>Capacity: 55,729</h2>'+
                '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
                'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
                '</div>'+
                '</div>';
    var contentString24 = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
               '<h1>The Dome at Americas Center</h1>'+ '<h2>City: St. Louis</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 47,831</h2>'+
               '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
               'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
               '</div>'+
               '</div>';
   var contentString25 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1>Mercedes-Benz Superdome</h1>'+ '<h2>City: New Orleans</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 53,172</h2>'+
              '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
              'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
              '</div>'+
              '</div>';
    var contentString26 = '<div id="content">'+
               '<div id="siteNotice">'+
               '</div>'+
               '<h1>NRG Stadium</h1>'+ '<h2>City: Houston</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 53,800</h2>'+
               '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
               'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
               '</div>'+
               '</div>';
   var contentString27 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1>AT&T Stadium</h1>'+ '<h2>City: Arlington</h2>' + '<h2>Number of Shows: 1</h2>' + '<h2>Capacity: 105,002</h2>'+
              '<p>Attribution: Wikipedia, <a href="https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour">'+
              'https://en.wikipedia.org/wiki/Taylor_Swift%27s_Reputation_Stadium_Tour</a> '+
              '</div>'+
              '</div>';

             var infowindow2 = new google.maps.InfoWindow({
               content: contentString2
             });
             var infowindow3 = new google.maps.InfoWindow({
               content: contentString3
             });
             var infowindow4 = new google.maps.InfoWindow({
               content: contentString4
             });
             var infowindow5 = new google.maps.InfoWindow({
               content: contentString5
             });
             var infowindow6 = new google.maps.InfoWindow({
               content: contentString6
             });
             var infowindow7 = new google.maps.InfoWindow({
               content: contentString7
             });
             var infowindow8 = new google.maps.InfoWindow({
               content: contentString8
             });
             var infowindow9 = new google.maps.InfoWindow({
               content: contentString9
             });
             var infowindow10 = new google.maps.InfoWindow({
               content: contentString10
             });
             var infowindow11 = new google.maps.InfoWindow({
               content: contentString11
             });
             var infowindow12 = new google.maps.InfoWindow({
               content: contentString12
             });
             var infowindow13 = new google.maps.InfoWindow({
               content: contentString13
             });
             var infowindow14 = new google.maps.InfoWindow({
               content: contentString14
             });
             var infowindow15 = new google.maps.InfoWindow({
               content: contentString15
             });
             var infowindow16 = new google.maps.InfoWindow({
               content: contentString16
             });
             var infowindow17 = new google.maps.InfoWindow({
               content: contentString17
             });
             var infowindow18 = new google.maps.InfoWindow({
               content: contentString18
             });
             var infowindow19 = new google.maps.InfoWindow({
               content: contentString19
             });
             var infowindow20 = new google.maps.InfoWindow({
               content: contentString20
             });
             var infowindow21 = new google.maps.InfoWindow({
               content: contentString21
             });
             var infowindow22 = new google.maps.InfoWindow({
               content: contentString22
             });
             var infowindow23 = new google.maps.InfoWindow({
               content: contentString23
             });
             var infowindow24 = new google.maps.InfoWindow({
               content: contentString24
             });
             var infowindow25 = new google.maps.InfoWindow({
               content: contentString25
             });
             var infowindow26 = new google.maps.InfoWindow({
               content: contentString26
             });
             var infowindow27 = new google.maps.InfoWindow({
               content: contentString27
             });
  // The markers positioned at locations
  var marker2 = new google.maps.Marker({position: glendale, map: map});
  var marker3 = new google.maps.Marker({position: santaclara, map: map});
  var marker4 = new google.maps.Marker({position: pasadena, map: map});
  var marker5 = new google.maps.Marker({position: seattle, map: map});
  var marker6 = new google.maps.Marker({position: denver, map: map});
  var marker7 = new google.maps.Marker({position: chicago, map: map});
  var marker8 = new google.maps.Marker({position: louisville, map: map});
  var marker9 = new google.maps.Marker({position: columbus, map: map});
  var marker10 = new google.maps.Marker({position: landover, map: map});
  var marker11 = new google.maps.Marker({position: philadelphia, map: map});
  var marker12 = new google.maps.Marker({position: cleveland, map: map});
  var marker13 = new google.maps.Marker({position: eastrutherford, map: map});
  var marker14 = new google.maps.Marker({position: foxborough, map: map});
  var marker15 = new google.maps.Marker({position: pittsburgh, map: map});
  var marker16 = new google.maps.Marker({position: atlanta, map: map});
  var marker17 = new google.maps.Marker({position: tampa, map: map});
  var marker18 = new google.maps.Marker({position: miamigardens, map: map});
  var marker19= new google.maps.Marker({position: nashville, map: map});
  var marker20 = new google.maps.Marker({position: detroit, map: map});
  var marker21 = new google.maps.Marker({position: minneapolis, map: map});
  var marker22 = new google.maps.Marker({position: kansascity, map: map});
  var marker23 = new google.maps.Marker({position: indianapolis, map: map});
  var marker24 = new google.maps.Marker({position: stlouis, map: map});
  var marker25 = new google.maps.Marker({position: neworleans, map: map});
  var marker26 = new google.maps.Marker({position: houston, map: map});
  var marker27 = new google.maps.Marker({position: arlington, map: map});

  marker2.addListener('click', function() {
         infowindow2.open(map, marker2);
       });
   marker3.addListener('click', function() {
          infowindow3.open(map, marker3);
        });
  marker4.addListener('click', function() {
         infowindow4.open(map, marker4);
       });
   marker5.addListener('click', function() {
            infowindow5.open(map, marker5);
          });
  marker6.addListener('click', function() {
         infowindow6.open(map, marker6);
       });
 marker7.addListener('click', function() {
        infowindow7.open(map, marker7);
      });
  marker8.addListener('click', function() {
         infowindow8.open(map, marker8);
       });
 marker9.addListener('click', function() {
        infowindow9.open(map, marker9);
      });
  marker10.addListener('click', function() {
         infowindow10.open(map, marker10);
       });
 marker11.addListener('click', function() {
        infowindow11.open(map, marker11);
      });

  marker12.addListener('click', function() {
         infowindow12.open(map, marker12);
       });

   marker13.addListener('click', function() {
          infowindow13.open(map, marker13);
        });

  marker14.addListener('click', function() {
         infowindow14.open(map, marker14);
       });

   marker15.addListener('click', function() {
          infowindow15.open(map, marker15);
        });

  marker16.addListener('click', function() {
         infowindow16.open(map, marker16);
       });

 marker17.addListener('click', function() {
        infowindow17.open(map, marker17);
      });

  marker18.addListener('click', function() {
         infowindow18.open(map, marker18);
       });

   marker19.addListener('click', function() {
          infowindow19.open(map, marker19);
        });

  marker20.addListener('click', function() {
         infowindow20.open(map, marker20);
       });

 marker21.addListener('click', function() {
        infowindow21.open(map, marker21);
      });

  marker22.addListener('click', function() {
         infowindow22.open(map, marker22);
       });

   marker23.addListener('click', function() {
          infowindow23.open(map, marker23);
        });

  marker24.addListener('click', function() {
         infowindow24.open(map, marker24);
       });

 marker25.addListener('click', function() {
        infowindow25.open(map, marker25);
      });

  marker26.addListener('click', function() {
         infowindow26.open(map, marker26);
       });

 marker27.addListener('click', function() {
        infowindow27.open(map, marker27);
      });
}
//end Google Maps API

//start Music API
  var myKey = config.MY_API_KEY;
 var url = 'https://api.musixmatch.com/ws/1.1/album.tracks.get?format=jsonp&callback=callback&album_id=26806100&apikey=' + myKey;
 var data = [];
 var albums = [];
 var html = '';

 $.ajax({
   type:'GET',
   crossOrigin: true,
   url:url,
   dataType:'jsonp',
   async:true,
   data:data,
   success:function(data){
     console.log(data);

     albums=data.message.body.track_list;

     albums.forEach(function(album){
       console.log(album.track);

       html += '<div class="track-cards flex">';
         html += '<div class="track-title">' + album.track.track_name + '</div>';
         html += '<a href="' + album.track.track_edit_url + '" target="_blank">' + '</div>';
        html += '</div>';
     });
     $('#results').html(html);
   },//close success function
   error:function(msg){
     console.log("WTF");
   }
 });//close AJAX request

//Quote Jquery Flip
 $(document).on("click", ".flip-container", function () {
    $(this).toggleClass('hover');
});
 //end Music API

//Typewriter Plugin
new TypeIt('#element', {
  strings: ["26 cities.", "38 shows.", "Over 2 million tickets sold.", "The highest-grossing tour in U.S. history."],
  speed: 75,
  autoStart:false
})

//Sources Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//Slideshow Plugin
// function slideSwitch() {
//         var $active = $('div#slideshow IMG.active');
//         var $next = $active.next();
//
//         $next.addClass('active');
//
//         $active.removeClass('active');
//     }
//
//     $(function() {
//         setInterval( "slideSwitch()", 5000 );
//     });

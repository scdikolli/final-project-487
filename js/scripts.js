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
           height: '100%',
           width: '100%',
           videoId: 'wIft-t-MQuE',
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
}

//end Google Maps API

//start Music API
 var url = 'https://api.musixmatch.com/ws/1.1/album.tracks.get?format=jsonp&callback=callback&album_id=26806100&apikey=4f16df4711bb025849083471398b8803';
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
 //end Music API

//Typewriter Plugin
new TypeIt('#element', {
  strings: ["7 months.", "38 shows.", "Over 2 million tickets sold.", "The highest-grossing tour in U.S. history."],
  speed: 75,
  autoStart:false
})

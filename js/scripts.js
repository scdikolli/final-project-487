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
  // The location of Glendale
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
  var atlanta = {lat: 33.5275, lng: -112.2625};
  var tampa = {lat: 33.5275, lng: -112.2625};
  var miamigardens = {lat: 33.5275, lng: -112.2625};
  var nashville = {lat: 33.5275, lng: -112.2625};
  var detroit = {lat: 33.5275, lng: -112.2625};
  var minneapolis = {lat: 33.5275, lng: -112.2625};
  var kansascity = {lat: 33.5275, lng: -112.2625};
  var indianapolis = {lat: 33.5275, lng: -112.2625};
  var stlouis = {lat: 33.5275, lng: -112.2625};
  var neworleans = {lat: 33.5275, lng: -112.2625};
  var houston = {lat: 33.5275, lng: -112.2625};
  var arlington = {lat: 33.5275, lng: -112.2625};
  // The map, centered at Glendale
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: glendale});
  // The marker, positioned at Glendale
  var marker = new google.maps.Marker({position: glendale, map: map});
}

//end Google Maps API

//start Music API
 var url = 'https://api.musixmatch.com/ws/1.1/artist.albums.get?format=jsonp&callback=callback&artist_id=259675&apikey=4f16df4711bb025849083471398b8803';
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

     albums=data.message.body.album_list;

     albums.forEach(function(album){
       console.log(album);
       html += '<div class="album-link">' + album.album_edit_url + '</div>';
     });
     $('#results').html(html);
   },//close success function
   error:function(msg){
     console.log("WTF");
   }
 });//close AJAX request

 function getLyrics(){

var artistSearch = document.getElementById("artistSearch").value;
document.getElementById("lyrics").textContent = "";
  $.ajax({
    type: "GET",
    data: {
        apikey:"445d6196c08dc2b7490929f18149d684",
        q_artist: artistSearch,
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "https://api.musixmatch.com/ws/1.1/track.search",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        console.log(data.message.body.track_list[0].track.album_coverart_350x350)
        console.log(data.message.body.track_list[0].track.lyrics_id)
        var rand = data.message.body.track_list[Math.floor(Math.random() * data.message.body.track_list.length)];
        console.log(rand.track.track_id)
        var thisTrack = (rand.track.track_id)
        var thisPic = rand.track.album_coverart_350x350;
        console.log(thisPic)

        var p = document.createElement("p");
        p.textContent = thisTrack;
        p.id = thisTrack;

        var img = document.createElement("img")
        img.setAttribute("src",thisPic)

        document.getElementById("lyrics").appendChild(p).style.opacity = 0;
        document.getElementById("lyrics").appendChild(img);
        document.getElementById("ghost").click();

    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    }
  });
 };


 function getLyricsNow(){
    var trackId = document.getElementById("lyrics").textContent;
    console.log(trackId)
  $.ajax({
    type: "GET",
    data: {
        apikey:"445d6196c08dc2b7490929f18149d684",
        track_id: trackId,
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
       console.log(data); console.log(data.message.body.lyrics.lyrics_body);
      var lyricsBody = data.message.body.lyrics.lyrics_body.split(/\s+/).slice(0,100).join(" ")+ "...";

        var j = document.createElement("p")
        j.textContent = lyricsBody
        document.getElementById("lyrics").appendChild(j)
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    }
  });
 };
 //end Music API

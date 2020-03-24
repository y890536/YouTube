var channelName = 'TechGuyWeb';
var vidWidth = 300;
var vidHeight = 200;
var vidResults = 10;

$(document).ready(function() {
    $.get(
        "https://www.googleapis.com/youtube/v3/channels", {
            part: 'contentDetails',
            forUsername: channelName,
            key: 'AIzaSyAFNRcBYd3ODoZJ1OF40Kkv3D3JA0TKV8s'
        },
        function(data) {
            $.each(data.items, function(i, item) {
                console.log(item);
                pid = item.contentDetails.relatedPlaylists.uploads;
                getVids(pid);
            })
        }
    );

    function getVids(pid) {
        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems", {
                part: 'snippet',
                maxResults: vidResults,
                playlistId: pid,
                key: 'AIzaSyAFNRcBYd3ODoZJ1OF40Kkv3D3JA0TKV8s'
            },
            function(data) {
                $.each(data.items, function(i, item) {
                    var output;
                    console.log(item);
                    videoTitle = item.snippet.title;
                    videoId = item.snippet.resourceId.videoId;


                    output = '<h1>test1</h1><br><li><iframe height="' + vidHeight + '" width="' + vidWidth + '" src=\"//www.youtube.com/embed/' + videoId + '\"></iframe></li>'

                    //Append to results listStyleTpe
                    $('#results').append(output);
                })
            }
        );
    }
});
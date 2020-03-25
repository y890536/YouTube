var vidWidth = 250;
var vidHeight = 150;

$(document).ready(function() {
    $.get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=10&key=AIzaSyAq3uHFSrfgmmfv8-GtOPF5ICpzpeQFz-k",
        function(data) {
            $.each(data.items, function(i, item) {
                console.log(item);
                vidTitle = item.snippet.title;
                vidId = item.id;
                vidDescription = item.snippet.description;
                vidDuration = item.contentDetails.duration;
                vidDuration1 = vidDuration.substring(2, 4);
                vidDuration2 = vidDuration.substring(5, 7);
                vidDuration3 = vidDuration.substring(8, 10);
                if (vidDuration3.length == 0) {
                    // document.write("影片標題：" + videoTitle + "<br>影片描述：" + vidDescription + "<br>影片長度：" + vidDuration1 + ":" + vidDuration2);
                } else {
                    // document.write("影片標題：" + videoTitle + "<br>影片描述：" + vidDescription + "<br>影片長度：" + vidDuration1 + ":" + vidDuration2 + ":" + vidDuration3);
                }
                var output;
                output = '<li><iframe src=\"//www.youtube.com/embed/' + vidId + '\"></iframe><h5>' + vidTitle + '</h5><h6>' + vidDescription + '</h6></li>'

                $('#results').append(output);
            })
        }
    );
});
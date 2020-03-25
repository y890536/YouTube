var vidWidth = 250;
var vidHeight = 150;

$(document).ready(function() {
    $.get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=8&key=AIzaSyAq3uHFSrfgmmfv8-GtOPF5ICpzpeQFz-k",
        function(data) {
            $.each(data.items, function(i, item) {
                console.log(item);
                vidTitle = item.snippet.title;
                vidId = item.id;
                vidDescription = item.snippet.description;
                vidDuration = item.contentDetails.duration;

                join = vidDuration.match(/\d/g).join("");
                // alert(join.length);

                join1 = join.substring(0, 1);
                join2 = join.substring(1, 2);
                join3 = join.substring(2, 3);
                join4 = join.substring(3, 4);
                join5 = join.substring(4, 5);

                var output;
                if (join.length == 3) {
                    vidDuration = join1 + ':' + join2 + join3;
                    // alert(vidDuration);
                } else if (join.length == 4) {
                    vidDuration = join1 + join2 + ':' + join3 + join4;
                    // alert(vidDuration);
                } else if (join.length == 5) {
                    vidDuration = join1 + ':' + join2 + join3 + ':' + join4 + join5;
                    // alert(vidDuration);
                }


                output = '<li><div class="box"><iframe src=\"//www.youtube.com/embed/' + vidId + '\"></iframe><h5>影片標題：' + vidTitle + '</h5><small>影片長度：' + vidDuration + '</small><h6>影片描述：' + vidDescription + '</h6></div></li>'
                $('#results').append(output);
            })
        },
    );
});
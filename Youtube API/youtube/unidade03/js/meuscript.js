$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/videos", {
            part: 'statistics',
            id: 'zHN6mFXEzKY',
            key: 'AIzaSyB49WfTkgfK2menTbmVCkLG0f9cYWQ9XKU'},
            function(data) {
                console.log(data);
            }
    )
});
$(document).ready(function() {
    setInterval(function() {
        let date = moment();
        $('#clock').text(date.tz('Europe/Paris').format('H:mm:ss'));

    },10);
});
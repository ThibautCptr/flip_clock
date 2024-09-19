
function updateTimeHours(tick) {
    Tick.helper.interval(function() {
        let _current_date = moment().tz('Europe/Paris');
        tick.value = _current_date.format('HH');
    }, 10);
}

function updateTimeMinutes(tick) {
    Tick.helper.interval(function() {
        let _current_date = moment().tz('Europe/Paris');
        tick.value = _current_date.format('mm');
    }, 10);
}

function updateTimeSeconds(tick) {
    Tick.helper.interval(function() {
        let _current_date = moment().tz('Europe/Paris');
        tick.value = _current_date.format('ss');
    }, 10);
}
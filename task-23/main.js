
var time = 46;

function checking() {
    var result = '';
    if(time >= 0 && time < 15){
        result = 'Первая четверть';
    }
    if(time >= 15 && time < 30){
        result = 'Вторая четверть';
    }
    if(time >= 30 && time < 45){
        result = 'Третья четверть';
    }
    if(time >= 45 && time <= 59){
        result = 'Четвертая четверть';
    }
    return alert(result);
}

checking();



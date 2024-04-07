document.addEventListener('DOMContentLoaded', function() {
    var stationChoice = document.getElementById('station-choice');
    var stationList = ['Station 1', 'Station 2', 'Station 3']; // Example station list

    stationList.forEach(function(station) {
        var option = new Option(station, station);
        stationChoice.add(option);
    });
});
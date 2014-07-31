google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Hours', 'Down', 'Up'],
        ['1',  20,      50],
        ['2',  30,      30],
        ['3',  10,       20],
        ['3',  30,       10],
        ['3',  40,       40],
        ['3',  80,       100],
        ['3',  90,       10],
        ['3',  100,       20],
        ['3',  10,       0],
        ['4',  40,      70]
    ]);

    var dataline = google.visualization.arrayToDataTable([
        ['Hours', 'Down'],
        ['1',  100],
        ['2',  40],
        ['3',  20],
        ['4',  10],
        ['5',  50],
        ['6',  80],
        ['7',  90],
        ['8',  30],
        ['9',  10],
        ['10',  40]
    ]);
    var datapie = google.visualization.arrayToDataTable([
        ['Hours', 'Down'],
        ['Free',  300],
        ['Used',  196.8]
    ]);

    var options = {


        chartArea:{left:0,top:30,width:"100%"},
        backgroundColor: 'transparent',
        hAxis: {textPosition: 'none', color: 'black', gridlines: {color: 'gray', count: 5}},
        vAxis: {textPosition: 'none', color: 'black', gridlines: {color: 'gray', count: 5}},

        colors:['#fff','#000']
    };
    var optionsline = {
        title: '17% | 3.59 Ghz',
        titleTextStyle: { color: '#fff',fontSize: 14,bold: false,italic: false },
        chartArea:{left:0,top:30,width:"100%"},
        backgroundColor: 'transparent',
        pointSize: 5,
        hAxis: {textPosition: 'none', color: 'black', gridlines: {color: 'gray', count: 5}},
        vAxis: {textPosition: 'none', color: 'black', gridlines: {color: 'gray', count: 5}},

        colors:['#000']

    };
    var optionsbar = {
        chartArea:{left:0,top:30,width:"100%"},
        backgroundColor: 'transparent',
        colors:['#666666'],

        hAxis: {textPosition: 'none'}

    };
    var optionspie = {
        chartArea:{left:0,top:30,width:"100%"},
        backgroundColor: 'transparent',
        title: '500gb Total',
        titleTextStyle: { color: '#fff',fontSize: 20,bold: false,italic: false },
        pieHole: 0.7,
        colors:['#C8C8C8','#909090']

    };



    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    var line = new google.visualization.LineChart(document.getElementById('line_div'));
    line.draw(dataline, optionsline);
    var bar = new google.visualization.ColumnChart(document.getElementById('bar_div'));
    bar.draw(dataline, optionsbar);
    var pie = new google.visualization.PieChart(document.getElementById('pie_div'));
    pie.draw(datapie, optionspie);
}
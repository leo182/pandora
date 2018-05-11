      google.charts.load('current', {'packages':['timeline']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Eventos');
      data.addColumn('date', 'Inicio ');
      data.addColumn('date', 'Encerramento');

      data.addRows([
        ['Amostra Cientifica',     new Date(2000, 8, 5), new Date(2001, 1, 5)],
        ['Palestra TI', new Date(2001, 8, 5), new Date(2002, 1, 5)],
        ['Feira Cientifica', new Date(2002, 8, 5), new Date(2003, 1, 5)],
        ['Mesa Redonda', new Date(2003, 8, 5), new Date(2004, 1, 5)],
        ['Palestra TI', new Date(2004, 8, 5), new Date(2005, 1, 5)],
        ['Mesa Redonda',   new Date(2006, 8, 5), new Date(2007, 1, 5)],
        ['Feira Cientifica',      new Date(2007, 8, 5), new Date(2008, 1, 5)],
        ['Mesa Redonda',  new Date(2008, 8, 5), new Date(2009, 1, 5)],
      ]);

      var options = {
        height: 450,
        timeline: {
          groupByRowLabel: true
        }
      };

      var chart = new google.visualization.Timeline(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

var myChart = echarts.init(document.getElementById('main'));

$.get('data.json').done(function (data) {
		myChart.setOption({
				title: {
						text: 'asynchronous data loading example'
				},
				tooltip: {},
				legend: {
						data:['Sales']
				},
				xAxis: {
						data: ["shirts","cardigan","chiffon shirt","pants","heels","sockes"]
				},
				yAxis: {},
				series: [{
						name: 'Sales',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
				}]
		});
});

var myChart = echarts.init(document.getElementById('main'));
// show title. legend and empty axis
myChart.setOption({
		title: {
				text: 'asynchronous data loading example'
		},
		tooltip: {},
		legend: {
				data:['Sales']
		},
		xAxis: {
				data: []
		},
		yAxis: {},
		series: [{
				name: 'Sales',
				type: 'bar',
				data: []
		}]
});

// Asynchronous data loading
$.get('data.json').done(function (data) {
		// fill in data
		myChart.setOption({
				xAxis: {
						data: data.categories
				},
				series: [{
						// find series by name
						name: 'Sales',
						data: data.data
				}]
		});
});

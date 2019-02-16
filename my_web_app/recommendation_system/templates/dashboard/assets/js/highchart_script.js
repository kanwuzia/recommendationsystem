$(document).ready(function(){
Highcharts.chart('kimono_chart', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Transaction Count'
    },

    xAxis: {
        type: "datetime",
        tickInterval: 24 * 3600 * 1000,
        labels: {
            rotation: -45,
            align: 'right'
        },
        dateTimeLabelFormats: { // don't display the dummy year
            day: '%e. %b'
        }
    },
    yAxis: {
        title: {
            text: 'Count'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    credits: {
        enabled: false
    },
    //tooltip: {
    //    pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    //},
    plotOptions: {
        area: {
            pointStart: 2010,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'SuccessfulTransactions',
        data: [400, 591, 602, 110, 235, 369, 640
           ]
    }, {
        name: 'Failed Transactions',
        data: [55, 125, 50, 120, 150, 200, 426]
    }]
});







Highcharts.chart('etop_chart', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Transaction Count'
    },

    xAxis: {
        type: "datetime",
        tickInterval: 24 * 3600 * 1000,
        labels: {
            rotation: -45,
            align: 'right'
        },
        dateTimeLabelFormats: { // don't display the dummy year
            day: '%e. %b'
        }
    },
    yAxis: {
        title: {
            text: 'Count'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    credits: {
        enabled: false
    },
    //tooltip: {
    //    pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    //},
    plotOptions: {
        area: {
            pointStart: 2010,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'SuccessfulTransactions',
        data: [600, 491, 32, 310, 235, 369, 640
        ]
    }, {
        name: 'Failed Transactions',
        data: [55, 125, 50, 120, 150, 200, 426]
    }]
});







Highcharts.chart('itex_chart', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Transaction Count'
    },

    xAxis: {
        type: "datetime",
        tickInterval: 24 * 3600 * 1000,
        labels: {
            rotation: -45,
            align: 'right'
        },
        dateTimeLabelFormats: { // don't display the dummy year
            day: '%e. %b'
        }
    },
    yAxis: {
        title: {
            text: 'Count'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    credits: {
        enabled: false
    },
    //tooltip: {
    //    pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    //},
    plotOptions: {
        area: {
            pointStart: 2010,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'SuccessfulTransactions',
        data: [400, 591, 302, 110, 235, 369, 640
        ]
    }, {
        name: 'Failed Transactions',
        data: [55, 125, 50, 120, 150, 200, 426]
    }]
});

});
var pod = "";
var xData = [];
var nameData = [];
var seriesData = [];

var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});

var dom1 = document.getElementById("chart-container-diff1");
var myChart1 = echarts.init(dom1, null, {
  renderer: "canvas",
  useDirtyRect: false
});

var dom2 = document.getElementById("chart-container-diff2");
var myChart2 = echarts.init(dom2, null, {
  renderer: "canvas",
  useDirtyRect: false
});

function setChart(myChart, nameData, xData, seriesData, title = "数据") {
  var option = {
    title: {
      text: title
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: nameData
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xData
    },
    yAxis: {
      type: "value"
    },
    series: seriesData
  };

  myChart.setOption(option);
  window.addEventListener("resize", myChart.resize);
  myChart.hideLoading();
}

function setTable(allTable) {
  Object.keys(allTable).map((item, index) => {
    $("#table-tr").append(`<th scope="col">${item}</th>`);
    $("#table-body").append(`
      <tr id="table-body-tr">
        <th scope="row">${index + 1}</th>
        ${Object.keys(allTable).map(
          (value) =>
            `<th scope="row">${
              allTable[value][index].toFixed
                ? allTable[value][index]?.toFixed(1)
                : allTable[value][index]
            }</th>`
        )}
      </tr>
    `);
  });
}

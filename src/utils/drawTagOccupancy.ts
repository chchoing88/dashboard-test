import Highcharts from "highcharts";
import sunburst from "highcharts/modules/sunburst";
import boost from "highcharts/modules/boost";
import { IOccupancyItem } from "types";
sunburst(Highcharts);
boost(Highcharts);

interface IExtendSunburstLevelsOption {
  level?: number;
  colorByPoint?: boolean;
  levelIsConstant?: boolean;
}

// function makePlotSunBurstOptions(): Highcharts.PlotSunburstOptions {
//   // shared options for all sunburst series
//   return {};
// }

// function makePlotSeriesOptions(): Highcharts.PlotSeriesOptions {
//   // general options for all series
//   return {};
// }

function makeSunburstSeries(
  sunburstDataList: IOccupancyItem[]
): Highcharts.SeriesSunburstOptions {
  return {
    type: "sunburst",
    data: sunburstDataList,
    allowTraversingTree: true,
    levelIsConstant: false,
    // colorByPoint: true,
    cursor: "pointer",
    dataLabels: {
      format: "{point.partname}",
      filter: {
        property: "innerArcLength",
        operator: ">",
        value: 16
      }
    },
    colors: [
      "#7095CC",
      "#708FCC",
      "#7089CC",
      "#7084CC",
      "#707ECC",
      "#7078CC",
      "#7072CC",
      "#7470CC",
      "#7A70CC",
      "#8070CC",
      "#8570CC",
      "#8B70CC",
      "#9170CC",
      "#9770CC",
      "#9D70CC",
      "#A270CC",
      "#A870CC",
      "#AE70CC",
      "#B470CC",
      "#BA70CC"
    ],
    levels: [
      {
        level: 1,
        dataLabels: {
          filter: {
            property: "outerArcLength",
            operator: ">",
            value: 64
          }
        }
      },
      {
        level: 2,
        colorByPoint: true
      },
      {
        level: 3,
        colorVariation: {
          key: "brightness",
          to: 0.3
        }
      },
      {
        level: 4,
        colorVariation: {
          key: "brightness",
          to: 0.3
        }
      }
    ] as (Highcharts.PlotSunburstLevelsOptions & IExtendSunburstLevelsOption)[]
  };
}

function makeSunburstChartOption(
  sunburstDataList: IOccupancyItem[]
): Highcharts.Options {
  return {
    boost: {
      useGPUTranslations: true
    },
    chart: {
      height: "100%"
    },
    title: {
      text: ""
    },
    credits: { enabled: false },
    series: [makeSunburstSeries(sunburstDataList)],
    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.fullname}</b>: {point.value}%"
    }
  };
}

function drawTagOccupancy(
  $container: HTMLDivElement,
  dataList: IOccupancyItem[]
) {
  // 태그별 점유도에 사용되는 선버스트 그래프
  Highcharts.chart($container, makeSunburstChartOption(dataList));
}

export default drawTagOccupancy;

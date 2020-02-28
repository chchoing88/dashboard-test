import Highcharts from "highcharts";
import { comma } from "utils";
import {
  IUfoCategoryIdValue,
  IUfoCategoryEnName,
  IUFOTagTop,
  IUFOTag
} from "types";

// Top20 태그에 사용되는 막대그래프

const TAG_TYPE: Pick<IUfoCategoryEnName, "ALL" | "I" | "P" | "C"> = {
  ALL: "overall",
  I: "interest",
  P: "poi",
  C: "consume"
};

const BAR_COLOR = {
  overall: "#ababd3",
  interest: "#7095CC",
  poi: "#a682c9",
  consume: "#B456A2"
};

function makeBarChartOption(
  topTagList: IUFOTag[],
  color: string
): Highcharts.Options {
  return {
    title: {
      text: ""
    },
    credits: { enabled: false },
    legend: {
      enabled: false
    },
    xAxis: {
      categories: topTagList.map(d => d.tag),
      title: {
        text: null
      },
      labels: {
        formatter() {
          return this.value.toString().replace(/.+-/, "");
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "대상자수",
        align: "high"
      },
      labels: {
        overflow: "justify"
      }
    },
    tooltip: {
      formatter() {
        return this.x + "<br><b>" + comma(this.y) + "</b>명";
      }
    },
    series: [
      {
        type: "bar",
        // name: topData.label,
        data: topTagList.map(d => +d.usercnt),
        // color: topData.barColor
        // color: "#7084CC"
        color
      }
    ]
  };
}

function drawTagTopBar(
  $container: HTMLDivElement,
  tagTopData: IUFOTagTop,
  tabId: Exclude<IUfoCategoryIdValue, "L" | "A">
) {
  // 태그별 점유도에 사용되는 선버스트 그래프

  Highcharts.chart(
    $container,
    makeBarChartOption(tagTopData[TAG_TYPE[tabId]], BAR_COLOR[TAG_TYPE[tabId]])
  );
}

export default drawTagTopBar;

import { createClassFromSpec } from "react-vega";

export default createClassFromSpec({
  mode: "vega",
  spec: {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    width: 1200,
    // height: 1500,
    padding: 5,
    background: "white",
    autosize: { type: "fit-x", contains: "padding" },
    data: [
      {
        name: "tree",
        // values: [# 데이터가 들어갈 영역],
        transform: [
          {
            type: "stratify",
            key: "id",
            parentKey: "parent"
          },
          {
            type: "tree",
            method: "tidy",
            size: [{ signal: "height" }, { signal: "width" }],
            // nodeSize: [25, 210], // root까지 총 뎁스 5라고 가정 1200 / 5
            separation: true,
            as: ["y", "x", "depth", "children"]
          },
          {
            type: "formula",
            expr: "slice(datum.id, 0, 1)",
            as: "type"
          }
        ]
      },
      {
        name: "links",
        source: "tree",
        transform: [
          { type: "treelinks" },
          {
            type: "linkpath",
            orient: "horizontal",
            shape: "diagonal"
          }
        ]
      }
    ],

    marks: [
      {
        type: "path",
        from: { data: "links" },
        encode: {
          update: {
            path: { field: "path" },
            stroke: { value: "#ddd" }
          }
        }
      },
      {
        type: "symbol",
        from: { data: "tree" },
        encode: {
          enter: {
            size: { value: 100 },
            stroke: { value: "#fff" }
          },
          update: {
            x: { field: "x" },
            y: { field: "y" },
            fill: { value: "#e4cccc" }
          }
        }
      },
      {
        type: "text",
        from: { data: "tree" },
        encode: {
          enter: {
            text: { signal: "datum.id + ' ' + datum.name" },
            fontSize: { value: 12 },
            baseline: { value: "middle" }
          },
          update: {
            x: { field: "x" },
            y: { field: "y" },
            dx: { signal: "datum.children ? -7 : 7" },
            align: { signal: "datum.children ? 'right' : 'left'" }
          }
        }
      }
    ]
  }
});

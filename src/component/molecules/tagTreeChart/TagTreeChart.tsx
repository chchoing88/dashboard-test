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
    signals: [
      // 동적인 변수를 만들어 내는 곳
      { name: "colorIn", value: "firebrick" },
      { name: "colorOut", value: "forestgreen" },
      {
        name: "active",
        value: null,
        on: [
          { events: "text:mouseover", update: "datum.id" },
          { events: "mouseover[!event.item]", update: "null" }
        ]
      },
      {
        name: "activeNode",
        value: null,
        on: [
          { events: "text:mouseover", update: "datum" },
          { events: "mouseover[!event.item]", update: "null" }
        ]
      },
      {
        name: "activeParent",
        value: null,
        on: [
          { events: "text:mouseover", update: "datum.parent" },
          { events: "mouseover[!event.item]", update: "null" }
        ]
      }
    ],
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
      },
      {
        name: "ancestors", // 기존 tree 데이터에서 ancestor를 생성한 파생된 데이터
        source: "tree",
        transform: [
          {
            type: "formula",
            expr: "treeAncestors('tree', datum.id)", // 리턴 배열
            as: "ancestors",
            initonly: true
          }
        ]
      },
      {
        name: "treeAncestorsFlatten", // ancestors 데이터에서 배열값인 ancestors 열 값을 flatten 하게 만듬
        source: "ancestors",
        transform: [{ type: "flatten", fields: ["ancestors"] }]
      },
      {
        name: "selected",
        source: "treeAncestorsFlatten",
        transform: [
          {
            type: "filter",
            expr:
              "datum.id === active || datum.parent === active || datum.id === activeParent || datum.ancestors.id === active"
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
            stroke: [
              {
                test:
                  "indata('selected', 'id', datum.source.id) && indata('selected', 'id', datum.target.id)",
                signal: "colorIn"
              },
              {
                test:
                  "indata('selected', 'ancestors.id', datum.source.id) && indata('selected', 'ancestors.id', datum.target.id)",
                signal: "colorIn"
              },
              { value: "#ddd" }
            ]
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
            fill: [
              { test: "datum.id === active", value: "red" },
              { test: "indata('selected', 'id', datum.id)", signal: "colorIn" },
              {
                test: "indata('selected', 'ancestors.id', datum.id)",
                signal: "colorIn"
              },
              { value: "#e4cccc" }
            ]
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
            align: { signal: "datum.children ? 'right' : 'left'" },
            tooltip: { signal: "datum.name" },
            fill: [
              { test: "datum.id === active", value: "red" },
              { test: "indata('selected', 'id', datum.id)", signal: "colorIn" },
              {
                test: "indata('selected', 'ancestors.id', datum.id)",
                signal: "colorIn"
              },

              { value: "#333" }
            ]
          }
        }
      }
    ]
  }
});

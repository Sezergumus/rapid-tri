import vegaEmbed from "vega-embed";
import { useEffect } from "react";

function MarkBar({ contentHeight }: { contentHeight: number }) {
  const data = Array.from({ length: 100 }, (_, i) => ({
    index: i + 1,
    value: Math.floor(Math.random() * 100) + 1,
  }));

  useEffect(() => {
    var vlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      data: { values: data },
      mark: { type: "bar" as const },
      encoding: {
        x: { field: "index", type: "ordinal" as const, axis: null },
        y: { field: "value", type: "quantitative" as const, axis: null },
        tooltip: [
          { field: "value", type: "quantitative" as const, title: "Value" },
        ],
      },
      width: "container" as const,
      height: 400,
      background: "transparent",
    };

    vegaEmbed("#bar-chart", vlSpec, { renderer: "svg", actions: false });
  }, []);

  return <div id="bar-chart" />;
}

export default MarkBar;

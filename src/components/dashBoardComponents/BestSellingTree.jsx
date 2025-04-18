import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import useAllInformation from "../../hooks/useAllInformation";

const BestSellingTree = () => {
  const { allInfo, allinfoLoading } = useAllInformation();
  const [treeData, setTreeData] = useState([
    {
      name: "Loading...",
      children: [],
    },
  ]);

  useEffect(() => {
    if (allInfo?.bestSellingData?.length > 0) {
      const children = allInfo.bestSellingData.map((item) => ({
        name: item.title?.length > 25 ? item.title.slice(0, 25) + "..." : item.title,
        attributes: {
          Sold: item.count,
        },
      }));

      setTreeData([
        {
          name: "Best Sellers",
          children,
        },
      ]);
    } else {
      setTreeData([
        {
          name: "No Data",
          children: [],
        },
      ]);
    }
  }, [allInfo]);

  const renderCustomNode = ({ nodeDatum }) => (
    <g>
      <rect width="200" height="60" x="-100" y="-30" fill="#facc15" rx={10} />
      <text fill="black" x="0" y="-10" textAnchor="middle" fontWeight="medium">
        {nodeDatum.name}
      </text>
      {nodeDatum.attributes &&
        Object.entries(nodeDatum.attributes).map(([key, val], i) => (
          <text key={key} x="0" y={15 + i * 15} textAnchor="middle">
            {key}: {val}
          </text>
        ))}
    </g>
  );

  return (
    <div style={{ width: "100%", height: "600px" }}>
      {!allinfoLoading ? (
        <Tree
          data={treeData}
          nodeSize={{ x: 250, y: 150 }}
          translate={{ x: 1200, y: 100 }}
          renderCustomNodeElement={renderCustomNode}
          orientation="vertical"
          zoomable
        />
      ) : (
        <p className="text-center text-xl font-semibold">Loading Tree...</p>
      )}
    </div>
  );
};

export default BestSellingTree;

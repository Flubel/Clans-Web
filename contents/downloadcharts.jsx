import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import styles from "@/styles/Home.module.css";

const DownloadBars = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [spigotRes, modrinthRes, githubRes, hangarRes] = await Promise.all([
          fetch("https://api.spiget.org/v2/resources/123903").then((r) => r.json()),
          fetch("https://api.modrinth.com/v2/project/simple-clans").then((r) => r.json()),
          fetch("https://api.github.com/repos/Flubel/Clans/releases").then((r) => r.json()),
          fetch("https://hangar.papermc.io/api/v1/projects/MrFiend/Clans").then((r) => r.json()),
        ]);

        const githubDownloads = githubRes.reduce(
          (sum, rel) => sum + rel.assets.reduce((a, asset) => a + asset.download_count, 0),
          0
        );

        let formatted = [
          { name: "SpigotMC", downloads: spigotRes.downloads || 0, fill: "#f39c12" },
          { name: "Modrinth", downloads: modrinthRes.downloads || 0, fill: "#1bd96a" },
          { name: "GitHub", downloads: githubDownloads, fill: "#686b6eff" },
          { name: "Hangar", downloads: hangarRes.stats?.downloads || 0, fill: "#00a8ff" },
        ];

        // Sort descending (highest first)
        formatted = formatted.sort((a, b) => b.downloads - a.downloads);

        setData(formatted);
      } catch (err) {
        console.error("Failed to fetch download data:", err);
      }
    }

    fetchData();
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;
    const entry = payload[0].payload;
    return (
      <div className={styles.tooltipBox}>
        <p
          className={styles.tooltipTitle}
          style={{ color: entry.fill, fontWeight: "600" }}
        >
          {entry.name}
        </p>
        <p>{entry.downloads.toLocaleString()} downloads</p>
      </div>
    );
  };

  return (
    <div className={styles.chartBoxotr}>
      <div className={styles.chartBox}>
        <div className={styles.hdng}>
            Total Downloads
        </div>
        <ResponsiveContainer width="100%" aspect={35 / 9} style={{marginLeft: '-50px'}}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 40, left: 80, bottom: 20 }}
          >
            <XAxis type="number" stroke="#aaa" fontSize={12}  />
            <YAxis dataKey="name" type="category" fontSize={12}  stroke="#aaa" width={100} />
            <Tooltip content={<CustomTooltip />} 
              cursor={{ fill: "#1b1b22" }} />

            <Bar
              dataKey="downloads"
              radius={[0, 10, 10, 0]}
              barSize={25}
              isAnimationActive={true}
              activeBar={false}
            >
              {data.map((entry, index) => (
                <cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList
                dataKey="downloads"
                position="right"
                formatter={(value) => value.toLocaleString()}
                style={{ fill: "#ccc", fontSize: 12, fontWeight: 600 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DownloadBars;

import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import styles from "@/styles/Home.module.css";
import DownloadTreemap from "./downloadcharts";
import DownloadBars from "./downloadcharts";
import VersionRadarCharts from "./radarcharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className={styles.tooltipBox}>
      <p className={styles.tooltipDate}>{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} style={{ color: entry.color }}>
          {entry.name}: {entry.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const Charts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [playersRes, serversRes] = await Promise.all([
          fetch("https://bstats.org/api/v1/plugins/25416/charts/players/data?chart=day"),
          fetch("https://bstats.org/api/v1/plugins/25416/charts/servers/data?chart=day"),
        ]);

        const playersData = await playersRes.json();
        const serversData = await serversRes.json();

        // Merge datasets, convert timestamps to 24-hour time format
        const merged = playersData.map(([date, players], i) => ({
          date: new Date(date).toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          players,
          servers: serversData[i] ? serversData[i][1] : 0,
        }));

        setData(merged);
      } catch (err) {
        console.error("Failed to fetch bStats data:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <div className={styles.chartBoxotr}>
      <div className={styles.chartBox}>
        <div className={styles.hdng}>
            <span style={{color: '#178ad6' }}>Players</span>&nbsp;&&nbsp;<span style={{color: '#9b5de5' }}>Servers</span>&nbsp; over the last 24 hours
        </div>
        <ResponsiveContainer width="100%" aspect={30 / 9}>
          <AreaChart data={data}>
            <XAxis dataKey="date" stroke="#aaa" fontSize={12} />
            <YAxis stroke="#aaa" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="players"
              name="Players"
              stroke="#178ad6"
              fill="#178ad6"
              fillOpacity={0.3}
              animationDuration={700}
            />

            <Area
              type="monotone"
              dataKey="servers"
              name="Servers"
              stroke="#9b5de5"
              fill="#9b5de5"
              fillOpacity={0.25}
              animationDuration={700}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    <DownloadBars />
    <VersionRadarCharts />
    </>
  );
};

export default Charts;

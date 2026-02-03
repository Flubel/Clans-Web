"use client";
import React, { useEffect, useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import styles from "@/styles/Home.module.css";

const VersionPieCharts = () => {
    const [dataSets, setDataSets] = useState({
        mc: [],
        plugin: [],
        java: [],
    });

    // ✅ Works with all bStats formats
    const fetchChartData = async (chartId) => {
        const res = await fetch(`https://bstats.org/api/v1/plugins/25416/charts/${chartId}/data`);
        const json = await res.json();

        if (json.seriesData && Array.isArray(json.seriesData)) {
            return json.seriesData.map((item) => ({
                name: item.name,
                value: item.y,
            }));
        }

        if (Array.isArray(json) && json.length && json[0].name && json[0].y !== undefined) {
            return json.map((item) => ({
                name: item.name,
                value: item.y,
            }));
        }

        if (Array.isArray(json) && json.length) {
            const latest = json.at(-1);
            const dataObj = latest?.[1] || latest?.data;
            if (dataObj && typeof dataObj === "object") {
                return Object.entries(dataObj).map(([name, value]) => ({
                    name,
                    value,
                }));
            }
        }

        return [];
    };

    useEffect(() => {
        (async () => {
            try {
                const [mc, plugin, java] = await Promise.all([
                    fetchChartData("minecraftVersion"),
                    fetchChartData("pluginVersion"),
                    fetchChartData("javaVersion"),
                ]);

                setDataSets({ mc, plugin, java });
                console.log("✅ Version data loaded:", { mc, plugin, java });
            } catch (err) {
                console.error("❌ Failed to load version data", err);
            }
        })();
    }, []);

    const COLORS = [
  "#1abc9c",  // teal
  "#3498db",  // blue
  "#9b59b6",  // purple
  "#f39c12",  // orange
  "#e74c3c",  // red
  "#2ecc71",  // green
  "#16a085",  // dark teal
  "#8e44ad",  // violet
  "#27ae60",  // emerald
  "#2980b9",  // denim blue
  "#d35400",  // dark orange
  "#c0392b",  // brick red
  "#f1c40f",  // yellow gold
  "#7f8c8d",  // gray
  "#e67e22",  // carrot orange
  "#34495e",  // navy gray-blue
];


    const CustomTooltip = ({ active, payload }) => {
        if (!active || !payload || !payload.length) return null;
        const entry = payload[0].payload;
        return (
            <div className={styles.tooltipBox}>
                <p
                    className={styles.tooltipTitle}
                    style={{
                        color: payload[0].fill,
                        fontWeight: 600,
                        marginBottom: "4px",
                        zIndex: 1000,
                        position: "relative",
                    }}
                >
                    {entry.name}
                </p>
                <p>{entry.value.toLocaleString()} servers</p>
            </div>
        );
    };


    const renderPie = (data, title) => (
        <div className={styles.chartBoxindiv} style={{overflow: 'visible'}}>
            <div className={styles.hdng}>{title}</div>
            <ResponsiveContainer width="100%" aspect={1/0.8} style={{overflow: 'visible'}}>
                <PieChart style={{overflow: 'visible'}}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(1)}%`
                        }
                        fontSize={10}
                        labelStyle={{
                            fill: "#fff",
                            fontSize: 12,
                            textShadow: "0 0 3px #000",
                        }}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                                <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <div className={styles.chartBoxotr}>
      <div className={styles.chartGrid}>
                {renderPie(dataSets.mc, "Minecraft Versions")}
                {renderPie(dataSets.plugin, "Plugin Versions")}
                {renderPie(dataSets.java, "Java Versions")}
            </div>
        </div>
    );
};

export default VersionPieCharts;

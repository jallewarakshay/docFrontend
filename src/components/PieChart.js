import React, { useState } from "react";
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4567", "#1ABC9C"];

const renderCustomizedLabel = ({ name, percent }) => {
  return `${name}: ${(percent * 100).toFixed(1)}%`;
};

function HealthcarePieChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { name: "Hospitals", value: 500000 },
    { name: "Physicians", value: 400000 },
    { name: "Other Services", value: 300000 },
    { name: "Nursing Care", value: 250000 },
    { name: "Prescription Drugs", value: 200000 },
    { name: "Home Health Care", value: 150000 },
    { name: "Dental", value: 180000 }
  ];

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h3 style={{ color: "brown" }}>
         <b><u>HEALTH INDIA</u></b>
        </h3>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", flexWrap: "wrap" }}>

        {/* Left Column: Pie Chart */}
        <div style={{ flex: 1, minWidth: "300px", display: "flex", justifyContent: "center" }}>
          <ResponsiveContainer width="100%" height={400}>
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{ opacity: activeIndex === index ? 0.7 : 1, cursor: "pointer", transition: "0.3s" }}
                  />
                ))}
              </Pie>
              <Tooltip />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>

        {/* Right Column: Legend */}
        <div style={{ flex: 1, minWidth: "250px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: "10px" }}>
          <h3 style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "bold", color: "#333", textAlign: "center" }}>
            Category Breakdown
          </h3>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            {data.map((entry, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px", 
                  justifyContent: "center",
                  paddingLeft: "10px",
                }}
              >
                <div
                  style={{
                    width: "20px", // Increased size for visibility
                    height: "20px", // Increased size for visibility
                    backgroundColor: COLORS[index % COLORS.length],
                    marginRight: "12px",
                    borderRadius: "3px",
                  }}
                />
                <span style={{ fontSize: "16px", color: "#555" }}>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default HealthcarePieChart;

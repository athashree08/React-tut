import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function App() {
  const [study, setStudy] = useState(2);
  const [sleep, setSleep] = useState(6);
  const [revision, setRevision] = useState(1);

  // 🎯 Logic Engine
  const calculateScore = () => {
    let score = 0;

    score += study * 10;
    score += revision * 15;
    score += sleep >= 6 ? 10 : -10;

    return score;
  };

  const score = calculateScore();

  // 🧠 Verdict
  let verdict = "";
  if (score > 60) verdict = "Pass 🎉";
  else if (score > 40) verdict = "Borderline 😬";
  else verdict = "Fail 💀";

  // 📊 Chart
  const chartData = {
    labels: ["Study", "Sleep", "Revision"],
    datasets: [
      {
        label: "Your Habits",
        data: [study, sleep, revision],
        backgroundColor: ["blue", "green", "orange"]
      }
    ]
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Exam Survival Simulator</h1>

      {/* 🔹 Sliders */}
      <div>
        <p>Study Hours: {study}</p>
        <input type="range" min="0" max="10" value={study}
          onChange={(e) => setStudy(Number(e.target.value))} />

        <p>Sleep Hours: {sleep}</p>
        <input type="range" min="0" max="10" value={sleep}
          onChange={(e) => setSleep(Number(e.target.value))} />

        <p>Revision: {revision}</p>
        <input type="range" min="0" max="5" value={revision}
          onChange={(e) => setRevision(Number(e.target.value))} />
      </div>

      {/* 🔹 Output */}
      <h2>Score: {score}</h2>
      <h2>{verdict}</h2>

      {/* 🔹 Chart */}
      <div style={{ width: "300px", margin: "auto" }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default App;
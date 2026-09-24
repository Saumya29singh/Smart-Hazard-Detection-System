export const HAZARDS = [
  { name: "Pothole", dept: "PWD" },
  { name: "Garbage Dumping", dept: "Municipal Corporation" },
  { name: "Broken Streetlight", dept: "Electricity Dept." },
  { name: "Waterlogging", dept: "Drainage Dept." },
  { name: "Open Manhole", dept: "PWD" },
];

export const SEVERITIES = ["Low", "Medium", "High", "Critical"];

export function generateRandomDetection() {
  const hazard = HAZARDS[Math.floor(Math.random() * HAZARDS.length)];
  const severity = SEVERITIES[Math.floor(Math.random() * SEVERITIES.length)];
  const conf = (91 + Math.random() * 8).toFixed(0);

  const left = 16 + Math.random() * 18;
  const top = 32 + Math.random() * 16;
  const width = 42 + Math.random() * 20;
  const height = 26 + Math.random() * 16;

  return {
    hazard: hazard.name,
    dept: hazard.dept,
    severity,
    conf,
    bbox: { left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }
  };
}


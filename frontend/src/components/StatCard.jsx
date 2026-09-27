export default function StatCard({label,value,icon}){return <div className="stat-card"><div className="stat-icon">{icon}</div><div><p>{label}</p><h3>{value}</h3></div></div>}

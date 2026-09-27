import { getComplaints } from '../services/storage';
import ComplaintCard from '../components/ComplaintCard';
export default function Complaints(){const complaints=getComplaints();return <main className="page"><div className="page-heading"><div><div className="eyebrow">CITIZEN SPACE</div><h1>My complaints</h1><p>Track every report created during your session.</p></div></div>{complaints.length?<div className="cards">{complaints.map(c=><ComplaintCard key={c.id} complaint={c}/>)}</div>:<div className="empty"><h3>No complaints found</h3><p>Start by reporting a civic issue.</p></div>}</main>}

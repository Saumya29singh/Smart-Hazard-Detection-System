// Initial default complaints list
export const INITIAL_COMPLAINTS = [
  { id: 2041, issue: "Pothole", status: "In Progress", location: "Sector 62, Noida", date: "2 days ago", photo: null },
  { id: 2038, issue: "Broken Streetlight", status: "Resolved", location: "MG Road, Bengaluru", date: "1 week ago", photo: null },
  { id: 2035, issue: "Waterlogging", status: "Pending", location: "Andheri West, Mumbai", date: "3 days ago", photo: null },
  { id: 2029, issue: "Garbage Dumping", status: "Resolved", location: "Salt Lake, Kolkata", date: "2 weeks ago", photo: null },
];

export function calculateKPIs(complaints) {
  return {
    total: complaints.length,
    resolved: complaints.filter(c => c.status === 'Resolved').length,
    pending: complaints.filter(c => c.status === 'Pending').length,
    inProgress: complaints.filter(c => c.status === 'In Progress').length,
  };
}

export function badgeClass(status) {
  if (status === 'Resolved') return 'badge-resolved';
  if (status === 'Pending') return 'badge-pending';
  if (status === 'In Progress') return 'badge-progress';
  return 'badge-reported';
}


const KEY = 'civicai_complaints';
export const getComplaints = () => JSON.parse(localStorage.getItem(KEY) || '[]');
export const saveComplaints = (items) => localStorage.setItem(KEY, JSON.stringify(items));
export const addComplaint = (complaint) => { const items = getComplaints(); saveComplaints([complaint, ...items]); return complaint; };
export const resetDemo = () => localStorage.removeItem(KEY);

import React from 'react';
import { badgeClass } from '../services/complaintsStore';

export default function ComplaintTable({ complaints }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Issue</th>
          <th>Status</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map((c) => (
          <tr key={c.id}>
            <td>
              {c.photo ? (
                <img className="row-thumb" src={c.photo} alt={c.issue} />
              ) : (
                <div className="row-thumb icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 8C4 6.9 4.9 6 6 6H7.5L8.5 4H15.5L16.5 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8Z" stroke="#0F172A" strokeWidth="1.6"/>
                  </svg>
                </div>
              )}
            </td>
            <td className="issue-name">{c.issue}</td>
            <td>
              <span className={`badge ${badgeClass(c.status)}`}>{c.status}</span>
            </td>
            <td className="row-loc">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 21C12 21 19 14.5 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8"/>
              </svg>
              {c.location}
            </td>
            <td className="mono" style={{ color: 'var(--muted)', fontSize: '12px' }}>
              {c.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

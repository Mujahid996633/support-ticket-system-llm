import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tickets/';

function App() {
  const [tickets, setTickets] = useState([]);
  const [stats, setStats] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [filters, setFilters] = useState({ category: '', priority: '', status: '', search: '' });
  
  const [formData, setFormData] = useState({
    title: '', description: '', category: 'general', priority: 'medium'
  });

  // Fetch tickets and stats
  const fetchData = async () => {
    const params = new URLSearchParams(Object.fromEntries(Object.entries(filters).filter(([_, v]) => v)));
    const tRes = await axios.get(`${API_URL}?${params}`);
    const sRes = await axios.get(`${API_URL}stats/`);
    setTickets(tRes.data);
    setStats(sRes.data);
  };

  useEffect(() => { fetchData(); }, [filters]);

  [span_1](start_span)// LLM Classification Trigger on Blur[span_1](end_span)
  const handleDescriptionBlur = async () => {
    if (formData.description.length < 15) return;
    setLoadingAI(true);
    try {
      const res = await axios.post(`${API_URL}classify/`, { description: formData.description });
      setFormData(prev => ({
        ...prev,
        category: res.data.suggested_category,
        priority: res.data.suggested_priority
      }));
    } catch (err) {
      [span_2](start_span)console.error("AI service unavailable, proceed manually.");[span_2](end_span)
    } finally {
      setLoadingAI(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, formData);
    setFormData({ title: '', description: '', category: 'general', priority: 'medium' });
    fetchData(); [span_3](start_span)// Auto-refresh[span_3](end_span)
  };

  const updateStatus = async (id, newStatus) => {
    await axios.patch(`${API_URL}${id}/`, { status: newStatus });
    fetchData();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Support Ticket System</h1>

      [span_4](start_span){/* Stats Dashboard[span_4](end_span) */}
      {stats && (
        <div style={{ display: 'flex', gap: '20px', background: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
          <div><strong>Total:</strong> {stats.total_tickets}</div>
          <div><strong>Open:</strong> {stats.open_tickets}</div>
          <div><strong>Technical:</strong> {stats.category_breakdown.technical || 0}</div>
        </div>
      )}

      [span_5](start_span){/* Ticket Form[span_5](end_span) */}
      <form onSubmit={handleSubmit} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '15px' }}>
        <h3>Submit New Ticket</h3>
        <input placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required style={{ display: 'block', marginBottom: '10px', width: '100%' }} />
        <textarea 
          placeholder="Describe the problem..." 
          value={formData.description} 
          onBlur={handleDescriptionBlur}
          onChange={e => setFormData({...formData, description: e.target.value})} 
          required 
          style={{ display: 'block', marginBottom: '10px', width: '100%', height: '80px' }}
        />
        [span_6](start_span){loadingAI && <p style={{ color: 'blue' }}>🤖 AI is analyzing your description...</p>}[span_6](end_span)
        
        <label>Category: </label>
        <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
          <option value="billing">Billing</option><option value="technical">Technical</option>
          <option value="account">Account</option><option value="general">General</option>
        </select>

        <label style={{ marginLeft: '10px' }}>Priority: </label>
        <select value={formData.priority} onChange={e => setFormData({...formData, priority: e.target.value})}>
          <option value="low">Low</option><option value="medium">Medium</option>
          <option value="high">High</option><option value="critical">Critical</option>
        </select>
        
        <button type="submit" style={{ display: 'block', marginTop: '10px' }}>Submit Ticket</button>
      </form>

      [span_7](start_span){/* Filters[span_7](end_span) */}
      <div style={{ marginBottom: '20px' }}>
        <input placeholder="Search title/desc..." onChange={e => setFilters({...filters, search: e.target.value})} />
      </div>

      [span_8](start_span){/* Ticket List[span_8](end_span) */}
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr><th>Title</th><th>Category</th><th>Priority</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          {tickets.map(t => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.category}</td>
              <td>{t.priority}</td>
              <td>{t.status}</td>
              <td>
                <select value={t.status} onChange={(e) => updateStatus(t.id, e.target.value)}>
                  <option value="open">Open</option><option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option><option value="closed">Closed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
        

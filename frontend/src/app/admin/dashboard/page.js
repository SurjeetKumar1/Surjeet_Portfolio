'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LogOut,
  Mail,
  FileText,
  ExternalLink,
  Loader2,
  RefreshCw,
  Inbox,
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  X,
  Download,
  MessageCircle,
  TrendingUp,
  Calendar,
} from 'lucide-react';

/* ─── Colour tokens ────────────────────────────────────────────── */
const C = {
  bg0: '#121212',
  bg1: '#1a1a1b',
  bg2: '#2b2b2c',
  bg3: '#323234',
  border: 'rgba(255,255,255,0.05)',
  borderHover: 'rgba(45,212,191,0.2)',
  teal: '#2dd4bf',
  tealDim: 'rgba(45,212,191,0.1)',
  tealGlow: 'rgba(45,212,191,0.05)',
  text: '#ffffff',
  textMuted: 'rgba(255,255,255,0.6)',
  textDim: 'rgba(255,255,255,0.3)',
};

/* ─── Stat Card ─────────────────────────────────────────────────── */
function StatCard({ icon: Icon, label, value, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="stat-card"
      style={{
        background: C.bg2,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: '18px 22px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flex: '1 1 200px',
        minWidth: 0,
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: accent || C.tealDim,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={16} color={C.teal} />
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ fontSize: 22, fontWeight: 700, color: C.text, margin: 0, lineHeight: 1 }}>{value}</p>
        <p style={{ fontSize: 11, color: C.textMuted, margin: '5px 0 0', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{label}</p>
      </div>
    </motion.div>
  );
}

/* ─── Avatar ────────────────────────────────────────────────────── */
function Avatar({ name }) {
  const initials = name?.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
  const hue = (name?.charCodeAt(0) || 0) * 47 % 360;
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 14, flexShrink: 0,
      background: `hsl(${hue},55%,18%)`,
      border: `1.5px solid hsl(${hue},55%,30%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 14, fontWeight: 700, color: `hsl(${hue},80%,75%)`,
      letterSpacing: '0.03em',
    }}>{initials}</div>
  );
}

/* ─── Contact Card ──────────────────────────────────────────────── */
function ContactCard({ contact, index, onViewPdf }) {
  const [hovered, setHovered] = useState(false);
  const date = new Date(contact.createdAt);
  const dateStr = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="contact-card"
      style={{
        background: hovered ? C.bg3 : C.bg2,
        border: `1px solid ${hovered ? C.borderHover : C.border}`,
        borderRadius: 20,
        padding: '24px 28px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 18,
        transition: 'all 0.22s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow accent on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 3, height: '100%',
        background: C.teal,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.22s ease',
        borderRadius: '3px 0 0 3px',
      }} />

      <Avatar name={contact.name} />

      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Row 1 – Name + date */}
        <div className="card-header-row" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
          <div style={{ minWidth: 0 }}>
            <h3 className="card-name" style={{ fontSize: 16, fontWeight: 700, color: C.text, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {contact.name}
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="card-email"
              style={{ fontSize: 12, color: C.teal, display: 'flex', alignItems: 'center', gap: 5, marginTop: 3, textDecoration: 'none', opacity: 0.8 }}
            >
              <Mail size={11} /> {contact.email}
            </a>
          </div>

          <div className="card-meta" style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: C.bg1, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: '5px 10px',
            }}>
              <Calendar size={10} color={C.textDim} />
              <span style={{ fontSize: 11, color: C.textMuted, fontWeight: 500 }}>{dateStr}</span>
              <Clock size={10} color={C.textDim} />
              <span style={{ fontSize: 11, color: C.textMuted }}>{timeStr}</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <p style={{
          fontSize: 14, color: hovered ? 'rgba(240,242,248,0.7)' : C.textMuted,
          lineHeight: 1.65, margin: '10px 0 14px',
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
          transition: 'color 0.22s ease',
        }}>
          {contact.message}
        </p>

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {contact.fileUrl && (
            <button
              onClick={() => onViewPdf(contact.fileUrl)}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                background: hovered ? C.tealDim : C.bg1,
                border: `1px solid ${hovered ? 'rgba(45,212,191,0.35)' : C.border}`,
                borderRadius: 10, padding: '7px 14px',
                fontSize: 12, fontWeight: 600, color: C.teal,
                cursor: 'pointer', transition: 'all 0.2s ease',
                letterSpacing: '0.04em',
              }}
            >
              <FileText size={13} /> View PDF <ExternalLink size={11} />
            </button>
          )}

        </div>
      </div>
    </motion.div>
  );
}

/* ─── PDF Modal ─────────────────────────────────────────────────── */
function PdfModal({ url, onClose }) {
  return (
    <AnimatePresence>
      {url && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="pdf-modal-overlay"
          style={{
            position: 'fixed', inset: 0, zIndex: 60,
            background: 'rgba(8,9,11,0.88)',
            backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <motion.div
            initial={{ scale: 0.93, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
            className="pdf-modal-inner"
            style={{
              width: '100%', maxWidth: 900,
              height: '88vh',
              background: C.bg1,
              border: `1px solid ${C.border}`,
              borderRadius: 24,
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Modal header */}
            <div className="pdf-modal-header" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 22px',
              borderBottom: `1px solid ${C.border}`,
              background: C.bg2,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: C.tealDim, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FileText size={14} color={C.teal} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>Document Preview</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <a
                  href={url} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontSize: 12, color: C.teal, textDecoration: 'none', fontWeight: 500,
                    background: C.tealDim, padding: '7px 12px', borderRadius: 8,
                    border: `1px solid rgba(45,212,191,0.2)`,
                  }}
                >
                  <Download size={12} /> Download
                </a>
                <button
                  onClick={onClose}
                  style={{
                    width: 32, height: 32, borderRadius: 9,
                    background: C.bg3, border: `1px solid ${C.border}`,
                    color: C.textMuted, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.15s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.12)'; e.currentTarget.style.color = '#f87171'; }}
                  onMouseOut={e => { e.currentTarget.style.background = C.bg3; e.currentTarget.style.color = C.textMuted; }}
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* iframe */}
            <div style={{ flex: 1, background: '#fff' }}>
              <iframe 
                src={`${url}#view=Fit`} 
                style={{ width: '100%', height: '100%', border: 'none' }} 
                title="PDF Preview" 
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Pagination ────────────────────────────────────────────────── */
function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 48 }}>
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        style={{
          width: 38, height: 38, borderRadius: 10,
          background: C.bg2, border: `1px solid ${C.border}`,
          color: current === 1 ? C.textDim : C.teal,
          cursor: current === 1 ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.15s',
        }}
      >
        <ChevronLeft size={16} />
      </button>

      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          style={{
            width: 38, height: 38, borderRadius: 10, fontSize: 13, fontWeight: 600,
            background: current === i + 1 ? C.teal : C.bg2,
            border: `1px solid ${current === i + 1 ? C.teal : C.border}`,
            color: current === i + 1 ? '#08090b' : C.textMuted,
            cursor: 'pointer', transition: 'all 0.15s',
          }}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        style={{
          width: 38, height: 38, borderRadius: 10,
          background: C.bg2, border: `1px solid ${C.border}`,
          color: current === total ? C.textDim : C.teal,
          cursor: current === total ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

/* ─── Loading Skeleton ───────────────────────────────────────────── */
function Skeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{
          background: C.bg2, border: `1px solid ${C.border}`,
          borderRadius: 20, padding: '24px 28px', display: 'flex', gap: 18,
        }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: C.bg3, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ width: '30%', height: 14, background: C.bg3, borderRadius: 6, marginBottom: 8 }} />
            <div style={{ width: '55%', height: 10, background: C.bg3, borderRadius: 6, marginBottom: 16 }} />
            <div style={{ width: '90%', height: 10, background: C.bg3, borderRadius: 6, marginBottom: 6 }} />
            <div style={{ width: '75%', height: 10, background: C.bg3, borderRadius: 6 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Dashboard ────────────────────────────────────────────── */
export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [adminName, setAdminName] = useState('Admin');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalContacts, setTotalContacts] = useState(0);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const router = useRouter();

  const fetchContacts = async (isRefresh = false, page = 1) => {
    if (isRefresh) setRefreshing(true);
    const token = localStorage.getItem('adminToken');
    if (!token) { router.push('/admin/login'); return; }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/contact?page=${page}&limit=5`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const result = await res.json();
      if (result.success) {
        setContacts(result.data);
        setTotalPages(result.pagination.totalPages);
        setCurrentPage(result.pagination.currentPage);
        setTotalContacts(result.pagination.total || result.data.length);
      } else {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    setAdminName(localStorage.getItem('adminName') || 'Admin');
    fetchContacts(false, 1);
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) fetchContacts(true, page);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
    router.push('/admin/login');
  };

  const todayCount = contacts.filter(c => {
    const d = new Date(c.createdAt);
    const now = new Date();
    return d.toDateString() === now.toDateString();
  }).length;

  const pdfCount = contacts.filter(c => c.fileUrl).length;

  /* ── Full-page loader ── */
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', background: C.bg0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 16,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: C.tealDim, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Loader2 size={22} color={C.teal} style={{ animation: 'spin 1s linear infinite' }} />
        </div>
        <p style={{ color: C.textDim, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Loading dashboard…</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div className="dashboard-root" style={{ minHeight: '100vh', background: C.bg0, color: C.text, fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif" }}>

      {/* ── Header ── */}
      <header className="dash-header" style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(18,18,18,0.82)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.border}`,
        padding: '0 32px',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: C.teal,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 800, color: '#08090b', letterSpacing: '-0.03em',
          }}>S</div>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: C.text, margin: 0, letterSpacing: '-0.02em' }}>
              Surjeet <span style={{ color: C.teal }}>Portal</span>
            </p>
            <p style={{ fontSize: 10, color: C.textDim, margin: 0, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Admin Console</p>
          </div>
        </div>

        {/* Right side */}
        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div className="admin-badge" style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: C.bg2, border: `1px solid ${C.border}`,
            borderRadius: 10, padding: '7px 12px',
          }}>
            <User size={13} color={C.teal} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{adminName}</span>
          </div>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: 'transparent', border: `1px solid rgba(248,113,113,0.25)`,
              borderRadius: 10, padding: '7px 14px',
              fontSize: 12, fontWeight: 600, color: '#f87171',
              cursor: 'pointer', transition: 'all 0.15s',
            }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(248,113,113,0.08)'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            <LogOut size={13} /> Sign Out
          </button>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="dash-main" style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: 32 }}
        >
          <h1 style={{ fontSize: 28, fontWeight: 800, color: C.text, margin: '0 0 6px', letterSpacing: '-0.03em' }}>
            Inbound <span style={{ color: C.teal }}>Inquiries</span>
          </h1>
          <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>
            All contact form submissions from your portfolio
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
          <StatCard icon={Inbox} label="Total Messages" value={totalContacts || contacts.length} />
          <StatCard icon={TrendingUp} label="This Page" value={contacts.length} />
          <StatCard icon={Calendar} label="Today" value={todayCount} />
          <StatCard icon={FileText} label="With PDF" value={pdfCount} />
        </div>

        {/* ── Toolbar ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <p style={{ fontSize: 12, color: C.textDim, margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => fetchContacts(true, currentPage)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: C.bg2, border: `1px solid ${C.border}`,
              borderRadius: 10, padding: '8px 16px',
              fontSize: 12, fontWeight: 600, color: C.teal,
              cursor: 'pointer', transition: 'all 0.15s',
              letterSpacing: '0.04em',
            }}
            onMouseOver={e => e.currentTarget.style.borderColor = C.borderHover}
            onMouseOut={e => e.currentTarget.style.borderColor = C.border}
          >
            <RefreshCw size={13} style={{ animation: refreshing ? 'spin 0.8s linear infinite' : 'none' }} />
            {refreshing ? 'Syncing…' : 'Refresh'}
          </button>
        </div>

        {/* ── Contact list ── */}
        {loading ? <Skeleton /> : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <AnimatePresence>
              {contacts.map((contact, i) => (
                <ContactCard key={contact._id} contact={contact} index={i} onViewPdf={setSelectedPdf} />
              ))}
            </AnimatePresence>

            {contacts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  textAlign: 'center', padding: '80px 24px',
                  background: C.bg2, border: `1px dashed ${C.border}`,
                  borderRadius: 20,
                }}
              >
                <Inbox size={36} color={C.textDim} style={{ marginBottom: 16 }} />
                <p style={{ fontSize: 15, fontWeight: 600, color: C.textMuted, margin: '0 0 6px' }}>No messages yet</p>
                <p style={{ fontSize: 13, color: C.textDim, margin: 0 }}>
                  Inquiries from your portfolio contact form will appear here.
                </p>
              </motion.div>
            )}
          </div>
        )}

        {/* ── Pagination ── */}
        <Pagination current={currentPage} total={totalPages} onChange={handlePageChange} />
      </main>

      {/* ── PDF Modal ── */}
      <PdfModal url={selectedPdf} onClose={() => setSelectedPdf(null)} />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

        @media (max-width: 768px) {
          .dash-header { padding: 0 16px !important; }
          .admin-badge { display: none !important; }
          .dash-main { padding: 24px 16px 80px !important; }
          .stat-card { flex: 1 1 100% !important; }
          .contact-card { flex-direction: column !important; padding: 20px !important; }
          .card-meta { margin-top: 12px !important; }
          .card-header-row { flex-direction: column !important; gap: 8px !important; }
          
          .pdf-modal-overlay { padding: 12px !important; }
          .pdf-modal-inner { height: 95vh !important; border-radius: 16px !important; }
          .pdf-modal-header { padding: 12px 16px !important; }
        }

        @media (max-width: 480px) {
          .header-right { gap: 8px !important; }
          .card-name { font-size: 14px !important; }
          .card-email { font-size: 11px !important; }
        }
      `}</style>
    </div>
  );
}
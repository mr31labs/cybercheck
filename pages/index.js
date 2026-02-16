import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="center-screen">
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto', paddingTop: '5vh' }}>
          <h1 className="fade-in" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1', color: '#1e293b' }}>
            Cybersecurity <br /> <span style={{ color: 'var(--accent-primary)' }}>Maturity Assessment</span>
          </h1>
          <p className="fade-in" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem', animationDelay: '0.1s', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Evaluate your organization's security posture or validate your personal cyber hygiene with our professional assessment engine.
          </p>

          <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', animationDelay: '0.2s', width: '100%' }}>
            {/* Persona 1: Company */}
            <Link href="/company" className="card-link">
              <div className="glass-panel" style={{ padding: '2.5rem', height: '100%', transition: 'all 0.2s ease' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Head of Security</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Validate strategic alignment, risk management, and compliance posture for your organization.</p>
              </div>
            </Link>

            {/* Persona 2: Employee */}
            <Link href="/employee" className="card-link">
              <div className="glass-panel" style={{ padding: '2.5rem', height: '100%', transition: 'all 0.2s ease' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Employee</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Assess tactical awareness regarding phishing, passwords, and device safety.</p>
              </div>
            </Link>

            {/* Persona 3: Individual */}
            <Link href="/individual" className="card-link">
              <div className="glass-panel" style={{ padding: '2.5rem', height: '100%', transition: 'all 0.2s ease' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Individual</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Understand your personal cybersecurity hygiene and digital footprint.</p>
              </div>
            </Link>

            {/* Persona 4: Kids */}
            <Link href="/kids" className="card-link">
              <div className="glass-panel" style={{ padding: '2.5rem', height: '100%', transition: 'all 0.2s ease' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Kids & Teens</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Learn how to stay safe online, handle bullies, and spot tricks.</p>
              </div>
            </Link>

          </div>
        </div>
      </div>

      <style jsx>{`
        .card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .card-link:hover .glass-panel {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-primary);
        }
      `}</style>
    </Layout>
  );
}

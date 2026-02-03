'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">CONTACT</h2>
        
        <p className="text-hw-text-dim section-subtitle font-mono">
          // Send me a message
        </p>

        <div className="contact-grid">
          <div className="debugger-panel contact-form-panel">
            <div className="bg-hw-grey contact-header">
              <span className="text-hw-terminal font-mono contact-title">$ send_message --to=hyusband</span>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="text-hw-text-dim font-mono form-label">
                  <span className="text-hw-terminal">$</span> name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="terminal-input"
                  placeholder="your_name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="text-hw-text-dim font-mono form-label">
                  <span className="text-hw-terminal">$</span> email:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="terminal-input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="text-hw-text-dim font-mono form-label">
                  <span className="text-hw-terminal">$</span> message:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="terminal-input terminal-textarea"
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary submit-button"
              >
                {status === 'sending' ? 'SENDING...' : 'SEND_MESSAGE()'}
              </button>

              {status === 'success' && (
                <div className="terminal-box status-message success-message">
                  <span className="text-hw-terminal font-mono">✓ Message sent successfully!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="terminal-box status-message error-message">
                  <span className="text-hw-rust font-mono">✗ Failed to send. Try email directly: hyusband@protonmail.com</span>
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="terminal-box contact-info-box">
              <div className="text-hw-terminal font-mono info-prompt">
                <span className="text-hw-text-dim">$</span> cat contact_info.txt
              </div>
              <div className="info-content">
                <div className="info-item">
                  <span className="text-hw-text-dim font-mono">EMAIL:</span>
                  <a href="mailto:hyusband@protonmail.com" className="text-hw-terminal font-mono info-link">
                    hyusband@protonmail.com
                  </a>
                </div>
                <div className="info-item">
                  <span className="text-hw-text-dim font-mono">GITHUB:</span>
                  <a href="https://github.com/hyusband" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono info-link">
                    github.com/hyusband
                  </a>
                </div>
                <div className="info-item">
                  <span className="text-hw-text-dim font-mono">TIMEZONE:</span>
                  <span className="text-hw-text font-mono">UTC-4 (EST)</span>
                </div>
                <div className="info-item">
                  <span className="text-hw-text-dim font-mono">RESPONSE_TIME:</span>
                  <span className="text-hw-text font-mono">~24h</span>
                </div>
              </div>
            </div>

            <div className="terminal-box availability-info">
              <div className="text-hw-text-dim font-mono">
                <span className="text-hw-terminal">$</span> echo $AVAILABILITY
              </div>
              <div className="text-hw-terminal font-mono availability-status">
                Open for backend/systems projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

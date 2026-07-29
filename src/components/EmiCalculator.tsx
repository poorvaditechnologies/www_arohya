import { useState } from 'react';
import { calculateEmi, fmtINR, fmtShort } from '../lib/format';
import { BLUE, GOLD, NAVY } from '../lib/theme';

export function EmiCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(15);

  const { emi, total, interest, principalPercent } = calculateEmi(amount, rate, tenure);

  return (
    <section id="calculator" style={{ background: '#fff', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '10%', right: -140, width: 540, height: 540, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.12), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -120, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.1), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 52px' }}>
          <div style={{ color: BLUE, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, marginBottom: 14 }}>SMART FINANCIAL TOOLS</div>
          <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 38, fontWeight: 600, margin: '0 0 16px', color: NAVY }}>Plan your EMI before you borrow</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#64748b', margin: 0 }}>Adjust the sliders to see your monthly commitment instantly. Free eligibility consultation available on request.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 28, background: 'rgba(248,250,252,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 26, padding: 40, boxShadow: '0 14px 44px rgba(15,23,42,0.07)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#334155' }}>Loan Amount</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{fmtShort(amount)}</span>
              </div>
              <input type="range" min={100000} max={20000000} step={100000} value={amount} onChange={(e) => setAmount(+e.target.value)} style={{ width: '100%' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginTop: 6 }}>
                <span>₹1 Lakh</span>
                <span>₹2 Crore</span>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#334155' }}>Interest Rate (p.a.)</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{rate}%</span>
              </div>
              <input type="range" min={6} max={24} step={0.25} value={rate} onChange={(e) => setRate(+e.target.value)} style={{ width: '100%' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginTop: 6 }}>
                <span>6%</span>
                <span>24%</span>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#334155' }}>Tenure</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>
                  {tenure}
                  {tenure === 1 ? ' year' : ' years'}
                </span>
              </div>
              <input type="range" min={1} max={30} step={1} value={tenure} onChange={(e) => setTenure(+e.target.value)} style={{ width: '100%' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginTop: 6 }}>
                <span>1 year</span>
                <span>30 years</span>
              </div>
            </div>
          </div>
          <div style={{ background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 34, color: '#fff', display: 'flex', flexDirection: 'column', gap: 22, justifyContent: 'center' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: 1.5, color: 'rgba(255,255,255,0.55)', fontWeight: 600, marginBottom: 6 }}>MONTHLY EMI</div>
              <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 40, fontWeight: 600, color: GOLD }}>{fmtINR(emi)}</div>
            </div>
            <div style={{ height: 8, borderRadius: 999, overflow: 'hidden', display: 'flex', background: 'rgba(255,255,255,0.12)' }}>
              <span style={{ width: principalPercent + '%', background: BLUE, transition: 'width 0.3s' }} />
              <span style={{ width: 100 - principalPercent + '%', background: GOLD, transition: 'width 0.3s' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 9, height: 9, borderRadius: 3, background: BLUE }} />
                  Principal
                </span>
                <span style={{ fontWeight: 600 }}>{fmtShort(amount)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 9, height: 9, borderRadius: 3, background: GOLD }} />
                  Total Interest
                </span>
                <span style={{ fontWeight: 600 }}>{fmtShort(interest)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 12 }}>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Total Payable</span>
                <span style={{ fontWeight: 700, color: '#10B981' }}>{fmtShort(total)}</span>
              </div>
            </div>
            <a href="#apply" className="btn-gold" style={{ textAlign: 'center', background: `linear-gradient(135deg, ${GOLD}, #c19d2e)`, color: NAVY, fontWeight: 700, fontSize: 14, padding: 13, borderRadius: 999, marginTop: 4 }}>
              Check My Eligibility
            </a>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', margin: '18px 0 0' }}>Indicative calculation only. Final rates and eligibility depend on the lender's assessment of your profile.</p>
      </div>
    </section>
  );
}

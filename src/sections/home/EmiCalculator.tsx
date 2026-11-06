import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calculateEmi, fmtINR } from '@/lib/format';

export function EmiCalculator() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(15);
  const { emi, total, interest, principalPercent } = calculateEmi(amount, rate, tenure);

  return (
    <section id="calculator" className="emi-section">
      <div className="emi-inner">
        <div className="emi-heading">
          <div className="section-eyebrow">{t('emi.eyebrow')}</div>
          <h2>{t('emi.title')}</h2>
        </div>
        <div className="emi-panel">
          <div className="emi-controls">
            <label className="emi-control">
              <span className="emi-control-heading">
                <strong>{t('emi.loanAmount')}</strong>
                <b>{fmtINR(amount)}</b>
              </span>
              <input
                aria-label={t('emi.loanAmount')}
                type="range"
                min={100000}
                max={10000000}
                step={100000}
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
              />
              <span className="emi-range-labels">
                <span>{t('emi.ranges.oneLakh')}</span>
                <span>{t('emi.ranges.fiftyLakhs')}</span>
                <span>{t('emi.ranges.oneCrore')}</span>
              </span>
            </label>
            <label className="emi-control">
              <span className="emi-control-heading">
                <strong>{t('emi.interestRate')}</strong>
                <b>{rate}%</b>
              </span>
              <input
                aria-label={t('emi.interestRate')}
                type="range"
                min={7}
                max={16}
                step={0.25}
                value={rate}
                onChange={(event) => setRate(Number(event.target.value))}
              />
              <span className="emi-range-labels">
                <span>7.0%</span>
                <span>11.5%</span>
                <span>16.0%</span>
              </span>
            </label>
            <label className="emi-control">
              <span className="emi-control-heading">
                <strong>{t('emi.tenure')}</strong>
                <b>{t('emi.years', { count: tenure })}</b>
              </span>
              <input
                aria-label={t('emi.tenure')}
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenure}
                onChange={(event) => setTenure(Number(event.target.value))}
              />
              <span className="emi-range-labels">
                <span>{t('emi.years', { count: 1 })}</span>
                <span>{t('emi.years', { count: 15 })}</span>
                <span>{t('emi.years', { count: 30 })}</span>
              </span>
            </label>
            <p className="emi-note">
              <span aria-hidden="true">ⓘ</span>
              {t('emi.note')}
            </p>
          </div>
          <aside className="emi-results">
            <span className="emi-results-title">{t('emi.resultsTitle')}</span>
            <div className="emi-monthly">
              <span>{t('emi.monthly')}</span>
              <strong>{fmtINR(emi)}</strong>
            </div>
            <dl className="emi-breakdown">
              <div>
                <dt>{t('emi.principalAmount')}</dt>
                <dd>{fmtINR(amount)}</dd>
              </div>
              <div>
                <dt>{t('emi.totalInterest')}</dt>
                <dd>{fmtINR(interest)}</dd>
              </div>
              <div className="emi-total">
                <dt>{t('emi.totalRepayment')}</dt>
                <dd>{fmtINR(total)}</dd>
              </div>
            </dl>
            <div className="emi-ratio">
              <span>{t('emi.ratio')}</span>
              <div
                className="emi-ratio-bar"
                aria-label={t('emi.ratioAria', {
                  principal: principalPercent,
                  interest: 100 - principalPercent,
                })}
              >
                <span style={{ width: `${principalPercent}%` }} />
              </div>
              <div className="emi-legend">
                <span>
                  <i />
                  {t('emi.principal')}
                </span>
                <span>
                  <i />
                  {t('emi.interest')}
                </span>
              </div>
            </div>
            <a href="#apply" className="emi-apply">
              {t('emi.apply')} →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { motion, useSpring, useTransform } from 'motion/react';
import { useEffect, useState, type CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { SplitText } from '@/components/animations';
import { Guilloche } from '@/components/patterns';
import { Icon } from '@/components/ui';
import { calculateEmi, fmtINR, fmtShort } from '@/lib/format';
import styles from './EmiCalculator.module.css';

/** A number that springs to its new value instead of jumping. */
function AnimatedINR({ value, className }: { value: number; className?: string }) {
  const spring = useSpring(value, { stiffness: 90, damping: 22 });
  const text = useTransform(spring, (v) => fmtINR(v));
  useEffect(() => spring.set(value), [spring, value]);
  return <motion.span className={className}>{text}</motion.span>;
}

interface SliderProps {
  id: string;
  label: string;
  display: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  marks: [string, string];
}

function Slider({ id, label, display, min, max, step, value, onChange, marks }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={styles.control}>
      <div className={styles.controlHead}>
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id} className="mono">
          {display}
        </output>
      </div>
      <input
        id={id}
        className={styles.range}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--p': `${pct}%` } as CSSProperties}
      />
      <div className={`mono ${styles.marks}`}>
        <span>{marks[0]}</span>
        <span>{marks[1]}</span>
      </div>
    </div>
  );
}

const R = 52;
const C = 2 * Math.PI * R;

export function EmiCalculator() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(15);
  const { emi, total, interest, principalPercent } = calculateEmi(amount, rate, tenure);

  const share = useSpring(principalPercent / 100, { stiffness: 80, damping: 20 });
  useEffect(() => share.set(principalPercent / 100), [share, principalPercent]);
  const dash = useTransform(share, (s) => `${s * C} ${C}`);

  return (
    <section id="calculator" className={styles.section}>
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">{t('emi.eyebrow')}</span>
          <SplitText className="section-title" text={t('emi.title')} />
          <p className="lead">{t('emi.description')}</p>
        </header>

        <div className={styles.panel}>
          <div className={styles.controls}>
            <Slider
              id="emi-amount"
              label={t('emi.loanAmount')}
              display={fmtShort(amount)}
              min={100000}
              max={10000000}
              step={100000}
              value={amount}
              onChange={setAmount}
              marks={[t('emi.ranges.oneLakh'), t('emi.ranges.oneCrore')]}
            />
            <Slider
              id="emi-rate"
              label={t('emi.interestRate')}
              display={`${rate.toFixed(2)}%`}
              min={7}
              max={16}
              step={0.25}
              value={rate}
              onChange={setRate}
              marks={['7%', '16%']}
            />
            <Slider
              id="emi-tenure"
              label={t('emi.tenure')}
              display={t('emi.years', { count: tenure })}
              min={1}
              max={30}
              step={1}
              value={tenure}
              onChange={setTenure}
              marks={[t('emi.years', { count: 1 }), t('emi.years', { count: 30 })]}
            />
            <p className={styles.note}>
              <Icon name="info" size={16} />
              {t('emi.note')}
            </p>
          </div>

          <aside className={styles.result} aria-live="polite">
            <Guilloche className={styles.resultRosette} speed={240} draw={false} opacity={0.32} />
            <span className={`mono ${styles.resultLabel}`}>{t('emi.resultsTitle')}</span>

            <div className={styles.monthly}>
              <span>{t('emi.monthly')}</span>
              <AnimatedINR value={emi} className={styles.emi} />
            </div>

            <div className={styles.split}>
              <svg
                viewBox="0 0 120 120"
                className={styles.donut}
                role="img"
                aria-label={t('emi.ratioAria', {
                  principal: principalPercent,
                  interest: 100 - principalPercent,
                })}
              >
                <circle cx="60" cy="60" r={R} className={styles.donutTrack} />
                <motion.circle
                  cx="60"
                  cy="60"
                  r={R}
                  className={styles.donutValue}
                  style={{ strokeDasharray: dash }}
                />
                <text x="60" y="58" textAnchor="middle" className={styles.donutPct}>
                  {principalPercent}%
                </text>
                <text x="60" y="76" textAnchor="middle" className={styles.donutCaption}>
                  {t('emi.principal')}
                </text>
              </svg>

              <dl className={styles.breakdown}>
                <div>
                  <dt>
                    <i className={styles.keyPrincipal} />
                    {t('emi.principalAmount')}
                  </dt>
                  <dd className="mono">{fmtINR(amount)}</dd>
                </div>
                <div>
                  <dt>
                    <i className={styles.keyInterest} />
                    {t('emi.totalInterest')}
                  </dt>
                  <dd>
                    <AnimatedINR value={interest} className="mono" />
                  </dd>
                </div>
                <div className={styles.total}>
                  <dt>{t('emi.totalRepayment')}</dt>
                  <dd>
                    <AnimatedINR value={total} className="mono" />
                  </dd>
                </div>
              </dl>
            </div>

            <a href="#apply" className={`btn btn-accent ${styles.apply}`}>
              {t('emi.apply')}
              <span className="btn-arrow">
                <Icon name="arrow" size={14} />
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

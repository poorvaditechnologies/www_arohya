export function fmtINR(v: number): string {
  return '₹' + Math.round(v).toLocaleString('en-IN');
}

export function fmtShort(v: number): string {
  if (v >= 1e7) return '₹' + (v / 1e7).toFixed(v % 1e7 ? 2 : 0).replace(/\.00$/, '') + ' Cr';
  if (v >= 1e5) return '₹' + (v / 1e5).toFixed(v % 1e5 ? 1 : 0).replace(/\.0$/, '') + ' Lakh';
  return fmtINR(v);
}

export interface EmiResult {
  emi: number;
  total: number;
  interest: number;
  principalPercent: number;
}

export function calculateEmi(principal: number, annualRatePercent: number, tenureYears: number): EmiResult {
  const monthlyRate = annualRatePercent / 1200;
  const months = tenureYears * 12;
  const emi =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const total = emi * months;
  const interest = total - principal;
  const principalPercent = Math.round((principal / total) * 100);
  return { emi, total, interest, principalPercent };
}

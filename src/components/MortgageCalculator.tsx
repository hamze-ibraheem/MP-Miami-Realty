import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function MortgageCalculator() {
  const { t } = useLanguage();
  
  const [price, setPrice] = useState<number>(500000);
  const [downPayment, setDownPayment] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);

  const monthlyPayment = useMemo(() => {
    const principal = price - (price * (downPayment / 100));
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) return principal / numberOfPayments;

    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return isNaN(payment) || !isFinite(payment) ? 0 : payment;
  }, [price, downPayment, interestRate, loanTerm]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1A1D23] p-8 md:p-10 rounded-2xl border border-sky-500/20 shadow-2xl relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-sky-300"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5 text-sky-400" />
        </div>
        <div>
          <h4 className="text-xl font-serif font-bold text-white">{t('calc.title')}</h4>
          <p className="text-xs text-slate-400 uppercase tracking-wider">{t('calc.desc')}</p>
        </div>
      </div>

      <div className="space-y-6 flex-grow">
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm font-medium text-slate-300">{t('calc.price')}</label>
            <span className="text-sm font-bold text-white">${price.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="50000"
            max="5000000"
            step="10000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          />
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm font-medium text-slate-300">{t('calc.down')}</label>
            <span className="text-sm font-bold text-white">{downPayment}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">{t('calc.rate')}</label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">{t('calc.years')}</label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all appearance-none"
              style={{ paddingRight: '1.5rem' }}
            >
              <option value={15} className="bg-slate-800 text-white">15</option>
              <option value={20} className="bg-slate-800 text-white">20</option>
              <option value={30} className="bg-slate-800 text-white">30</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-sm text-slate-400 mb-2">{t('calc.result')}</p>
        <p className="text-4xl font-bold text-sky-400 font-serif tracking-tight">
          ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}<span className="text-xl text-slate-500 font-sans font-normal tracking-normal"> /mo</span>
        </p>
      </div>
    </motion.div>
  );
}

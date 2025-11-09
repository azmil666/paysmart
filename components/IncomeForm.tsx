
import React, { useState } from 'react';
import { Income } from '../types';

interface IncomeFormProps {
  addIncome: (income: Omit<Income, 'id'>) => void;
}

const IncomeForm: React.FC<IncomeFormProps> = ({ addIncome }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !date) return;
    addIncome({ amount: parseFloat(amount), date, description });
    setAmount('');
    setDate('');
    setDescription('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Add Income</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="income-amount" className="block text-sm font-medium text-slate-600">Amount (₹)</label>
          <input
            id="income-amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="e.g., 5000"
            required
          />
        </div>
        <div>
          <label htmlFor="income-date" className="block text-sm font-medium text-slate-600">Date</label>
          <input
            id="income-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="income-description" className="block text-sm font-medium text-slate-600">Description (Optional)</label>
          <input
            id="income-description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="e.g., Freelance Project"
          />
        </div>
        <button type="submit" className="w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
          Add Income
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;

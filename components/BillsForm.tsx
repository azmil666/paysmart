
import React, { useState } from 'react';
import { Bill } from '../types';

interface BillsFormProps {
  addBill: (bill: Omit<Bill, 'id'>) => void;
}

const BillsForm: React.FC<BillsFormProps> = ({ addBill }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount || !dueDate) return;
    addBill({ name, amount: parseFloat(amount), dueDate });
    setName('');
    setAmount('');
    setDueDate('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Add Bill</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="bill-name" className="block text-sm font-medium text-slate-600">Bill Name</label>
          <input
            id="bill-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="e.g., Internet"
            required
          />
        </div>
        <div>
          <label htmlFor="bill-amount" className="block text-sm font-medium text-slate-600">Amount (₹)</label>
          <input
            id="bill-amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="e.g., 800"
            required
          />
        </div>
        <div>
          <label htmlFor="bill-due-date" className="block text-sm font-medium text-slate-600">Due Date</label>
          <input
            id="bill-due-date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
          Add Bill
        </button>
      </form>
    </div>
  );
};

export default BillsForm;

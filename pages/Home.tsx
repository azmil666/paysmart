
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import IncomeForm from '../components/IncomeForm';
import BillsForm from '../components/BillsForm';
import useLocalStorage from '../hooks/useLocalStorage';
import { Income, Bill, ScheduledBill } from '../types';
import { generateSchedule } from '../utils/scheduler';

const Home: React.FC = () => {
  const [incomes, setIncomes] = useLocalStorage<Income[]>('incomes', []);
  const [bills, setBills] = useLocalStorage<Bill[]>('bills', []);
  const [, setSchedule] = useLocalStorage<ScheduledBill[]>('scheduleData', []);
  const navigate = useNavigate();

  const addIncome = (income: Omit<Income, 'id'>) => {
    setIncomes([...incomes, { ...income, id: uuidv4() }]);
  };

  const addBill = (bill: Omit<Bill, 'id'>) => {
    setBills([...bills, { ...bill, id: uuidv4() }]);
  };

  const handleGenerateSchedule = () => {
    const newSchedule = generateSchedule(incomes, bills);
    setSchedule(newSchedule);
    navigate('/schedule');
  };
  
  const clearAllData = () => {
      if(window.confirm("Are you sure you want to clear all incomes, bills, and schedule data? This action cannot be undone.")) {
        setIncomes([]);
        setBills([]);
        setSchedule([]);
      }
  }

  const removeItem = <T extends {id: string}>(items: T[], setItems: React.Dispatch<React.SetStateAction<T[]>>, id: string) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Financial Stability Coach</h1>
        <p className="mt-2 text-lg leading-8 text-slate-600">Enter your incomes and bills to generate a smart payment schedule.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <IncomeForm addIncome={addIncome} />
        <BillsForm addBill={addBill} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Incomes List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Incomes</h3>
          {incomes.length > 0 ? (
            <ul className="divide-y divide-slate-200">
              {incomes.map((income) => (
                <li key={income.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-teal-600">₹{income.amount.toLocaleString('en-IN')}</p>
                    <p className="text-sm text-slate-500">{formatDate(income.date)} {income.description && `- ${income.description}`}</p>
                  </div>
                  <button onClick={() => removeItem(incomes, setIncomes, income.id)} className="text-red-500 hover:text-red-700">&times;</button>
                </li>
              ))}
            </ul>
          ) : <p className="text-sm text-slate-500">No incomes added yet.</p>}
        </div>

        {/* Bills List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Bills</h3>
          {bills.length > 0 ? (
            <ul className="divide-y divide-slate-200">
              {bills.map((bill) => (
                <li key={bill.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-indigo-600">{bill.name} - ₹{bill.amount.toLocaleString('en-IN')}</p>
                    <p className="text-sm text-slate-500">Due: {formatDate(bill.dueDate)}</p>
                  </div>
                  <button onClick={() => removeItem(bills, setBills, bill.id)} className="text-red-500 hover:text-red-700">&times;</button>
                </li>
              ))}
            </ul>
          ) : <p className="text-sm text-slate-500">No bills added yet.</p>}
        </div>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handleGenerateSchedule}
          disabled={incomes.length === 0 || bills.length === 0}
          className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
        >
          Generate Schedule
        </button>
        <button 
          onClick={clearAllData}
          className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
          Clear All Data
        </button>
      </div>
    </div>
  );
};

export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import ImpactSummary from '../components/ImpactSummary';
import { ScheduledBill } from '../types';

const Impact: React.FC = () => {
  const [schedule] = useLocalStorage<ScheduledBill[]>('scheduleData', []);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Impact Report</h1>
            <p className="mt-2 text-lg leading-8 text-slate-600">See how smart planning improves your financial health.</p>
        </div>

      <ImpactSummary schedule={schedule} />

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link to="/" className="w-full sm:w-auto text-center px-6 py-2 text-sm font-medium rounded-md text-slate-700 bg-slate-200 hover:bg-slate-300 transition-colors">
            Back to Home
        </Link>
        <Link to="/schedule" className="w-full sm:w-auto text-center px-6 py-2 text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors">
            View Schedule
        </Link>
      </div>
    </div>
  );
};

export default Impact;

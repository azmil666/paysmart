
import React from 'react';
import { ScheduledBill, ScheduleStatus } from '../types';

interface ImpactSummaryProps {
  schedule: ScheduledBill[];
}

const LATE_FEE = 500;

const ImpactSummary: React.FC<ImpactSummaryProps> = ({ schedule }) => {
  const safeBills = schedule.filter(bill => bill.status === ScheduleStatus.Safe).length;
  const atRiskBills = schedule.filter(bill => bill.status === ScheduleStatus.Risk).length;
  const totalBills = schedule.length;
  const estimatedSavings = safeBills * LATE_FEE;
  const safePercentage = totalBills > 0 ? (safeBills / totalBills) * 100 : 0;

  if (totalBills === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        <h3 className="mt-2 text-sm font-medium text-slate-900">No Impact Data</h3>
        <p className="mt-1 text-sm text-slate-500">Generate a schedule to see your financial impact.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 text-center">Financial Impact Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700 font-medium">Safe Bills</p>
          <p className="text-3xl font-bold text-green-600">{safeBills}</p>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <p className="text-sm text-orange-700 font-medium">At-Risk Bills</p>
          <p className="text-3xl font-bold text-orange-600">{atRiskBills}</p>
        </div>
        <div className="p-4 bg-teal-50 rounded-lg">
          <p className="text-sm text-teal-700 font-medium">Estimated Savings</p>
          <p className="text-3xl font-bold text-teal-600">₹{estimatedSavings.toLocaleString('en-IN')}</p>
          <p className="text-xs text-slate-500">(based on ₹{LATE_FEE} late fee per bill)</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">Payment Safety</h3>
        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${safePercentage}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-slate-500 mt-1">{safePercentage.toFixed(0)}% of bills are safe to pay on time.</p>
      </div>
    </div>
  );
};

export default ImpactSummary;

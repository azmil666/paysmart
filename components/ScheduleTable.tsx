
import React from 'react';
import { ScheduledBill, ScheduleStatus } from '../types';

interface ScheduleTableProps {
  schedule: ScheduledBill[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusClass = (status: ScheduleStatus) => {
    switch (status) {
      case ScheduleStatus.Safe:
        return 'bg-green-100 text-green-800';
      case ScheduleStatus.Risk:
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  if (schedule.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        <h3 className="mt-2 text-sm font-medium text-slate-900">No Schedule Generated</h3>
        <p className="mt-1 text-sm text-slate-500">Add incomes and bills on the Home page first.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Bill Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Due Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Recommended Pay Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                {schedule.map((item) => (
                    <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{formatDate(item.dueDate)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{formatDate(item.payDate)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(item.status)}`}>
                        {item.status}
                        </span>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default ScheduleTable;

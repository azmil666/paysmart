
import { Income, Bill, ScheduledBill, ScheduleStatus } from '../types';

export const generateSchedule = (incomes: Income[], bills: Bill[]): ScheduledBill[] => {
  if (!incomes.length || !bills.length) {
    return [];
  }

  const sortedIncomes = [...incomes].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const schedule: ScheduledBill[] = bills.map(bill => {
    const billDueDate = new Date(bill.dueDate);
    
    const suitableIncome = sortedIncomes.find(income => {
        const incomeDate = new Date(income.date);
        // Find the latest income that is on or before the bill's due date
        return incomeDate.getTime() <= billDueDate.getTime();
    });

    if (suitableIncome) {
      return {
        id: bill.id,
        name: bill.name,
        amount: bill.amount,
        dueDate: bill.dueDate,
        payDate: suitableIncome.date,
        status: ScheduleStatus.Safe,
      };
    } else {
      return {
        id: bill.id,
        name: bill.name,
        amount: bill.amount,
        dueDate: bill.dueDate,
        payDate: null,
        status: ScheduleStatus.Risk,
      };
    }
  });

  return schedule.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
};


export interface Income {
  id: string;
  amount: number;
  date: string;
  description?: string;
}

export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

export enum ScheduleStatus {
  Safe = 'Safe',
  Risk = 'Risk – may be late',
}

export interface ScheduledBill {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  payDate: string | null;
  status: ScheduleStatus;
}

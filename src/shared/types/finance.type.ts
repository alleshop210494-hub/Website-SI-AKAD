import { PaymentStatus } from '../constants/roles';

export interface SppInvoice {
  id: string;
  invoiceNumber: string;
  studentId: string;
  studentName: string;
  nisn: string;
  month: number;
  year: number;
  amount: number;
  dueDate: string;
  status: PaymentStatus;
  paidAt?: string;
  paymentMethod?: string;
  proofUrl?: string;
}
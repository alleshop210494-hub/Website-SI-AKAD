import { SppInvoice } from '@/shared/types/finance.type';
import { PaymentStatus } from '@/shared/constants/roles';

export const mockInvoices: SppInvoice[] = [
  {
    id: 'inv-2026-01',
    invoiceNumber: 'INV/SPP/2026/01/001',
    studentId: 'std-1',
    studentName: 'Ahmad Rizky Pratama',
    nisn: '0012345678',
    month: 1,
    year: 2026,
    amount: 500000,
    dueDate: '2026-01-10',
    status: PaymentStatus.PAID,
    paidAt: '2026-01-08T10:15:00Z',
    paymentMethod: 'Transfer Bank BCA',
  },
  {
    id: 'inv-2026-02',
    invoiceNumber: 'INV/SPP/2026/02/001',
    studentId: 'std-1',
    studentName: 'Ahmad Rizky Pratama',
    nisn: '0012345678',
    month: 2,
    year: 2026,
    amount: 500000,
    dueDate: '2026-02-10',
    status: PaymentStatus.PENDING,
  },
];
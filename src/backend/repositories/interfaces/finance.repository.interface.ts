import { SppInvoice } from '@/shared/types/finance.type';

export interface IFinanceRepository {
  findInvoices(params?: { studentId?: string; status?: string }): Promise<SppInvoice[]>;
  findInvoiceById(id: string): Promise<SppInvoice | null>;
  updateInvoice(id: string, payload: Partial<SppInvoice>): Promise<SppInvoice>;
}
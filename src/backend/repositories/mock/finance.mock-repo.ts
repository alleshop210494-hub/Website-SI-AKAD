import { IFinanceRepository } from '../interfaces/finance.repository.interface';
import { SppInvoice } from '@/shared/types/finance.type';
import { mockInvoices } from '@/backend/mock-data/finance.seed';

let invoiceStore: SppInvoice[] = [...mockInvoices];

export class FinanceMockRepository implements IFinanceRepository {
  async findInvoices(params?: { studentId?: string; status?: string }): Promise<SppInvoice[]> {
    let result = [...invoiceStore];
    if (params?.studentId) {
      result = result.filter((i) => i.studentId === params.studentId);
    }
    if (params?.status) {
      result = result.filter((i) => i.status === params.status);
    }
    return result;
  }

  async findInvoiceById(id: string): Promise<SppInvoice | null> {
    return invoiceStore.find((i) => i.id === id) || null;
  }

  async updateInvoice(id: string, payload: Partial<SppInvoice>): Promise<SppInvoice> {
    const index = invoiceStore.findIndex((i) => i.id === id);
    if (index === -1) {
      throw new Error('Invoice tidak ditemukan');
    }

    invoiceStore[index] = { ...invoiceStore[index], ...payload };
    return invoiceStore[index];
  }
}
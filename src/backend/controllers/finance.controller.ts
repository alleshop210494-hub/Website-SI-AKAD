import { financeService } from '../services/finance.service';

export class FinanceController {
  async getInvoices(params: { studentId?: string | null; status?: string | null }) {
    return financeService.getInvoices({
      studentId: params.studentId || undefined,
      status: params.status || undefined,
    });
  }

  async processPayment(body: any) {
    return financeService.confirmPayment(body);
  }
}

export const financeController = new FinanceController();
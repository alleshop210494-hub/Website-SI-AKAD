import { FinanceMockRepository } from '../repositories/mock/finance.mock-repo';
import { confirmPaymentSchema, ConfirmPaymentInput } from '@/shared/schemas/finance.schema';
import { PaymentStatus } from '@/shared/constants/roles';
import { AppError } from '../errors/app-error';

export class FinanceService {
  private financeRepo = new FinanceMockRepository();

  async getInvoices(params?: { studentId?: string; status?: string }) {
    return this.financeRepo.findInvoices(params);
  }

  async confirmPayment(payload: ConfirmPaymentInput) {
    const parseResult = confirmPaymentSchema.safeParse(payload);
    if (!parseResult.success) {
      throw new AppError('Payload konfirmasi pembayaran tidak valid', 400, parseResult.error.format());
    }

    const invoice = await this.financeRepo.findInvoiceById(payload.invoiceId);
    if (!invoice) {
      throw new AppError('Invoice SPP tidak ditemukan', 404);
    }

    if (invoice.status === PaymentStatus.PAID) {
      throw new AppError('Invoice ini sudah lunas', 400);
    }

    return this.financeRepo.updateInvoice(payload.invoiceId, {
      status: PaymentStatus.PAID,
      paidAt: new Date().toISOString(),
      paymentMethod: payload.paymentMethod,
      proofUrl: payload.proofUrl,
    });
  }
}

export const financeService = new FinanceService();
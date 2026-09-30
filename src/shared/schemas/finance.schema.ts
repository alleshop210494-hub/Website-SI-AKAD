import { z } from 'zod';

export const confirmPaymentSchema = z.object({
  invoiceId: z.string().min(1, 'ID Invoice wajib ada'),
  paymentMethod: z.string().min(1, 'Metode pembayaran wajib dipilih'),
  proofUrl: z.string().optional(),
});

export type ConfirmPaymentInput = z.infer<typeof confirmPaymentSchema>;
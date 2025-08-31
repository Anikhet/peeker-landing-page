import { z } from 'zod';

export const currentCostsSchema = z.object({
  emailSequencerCost: z.number().min(0, 'Email sequencer cost must be 0 or greater'),
  emailSequencerName: z.string().min(1, 'Email sequencer name is required'),
  dailyEmailVolume: z.number().min(1, 'Daily email volume must be at least 1'),
  numberOfDomains: z.number().min(0, 'Number of domains must be 0 or greater').int('Number of domains must be a whole number'),
  inboxesPerDomain: z.number().min(1, 'Inboxes per domain must be at least 1').default(3),
  costPerInbox: z.number().min(0, 'Cost per inbox must be 0 or greater').default(7.2),
  totalMonthlyCost: z.number().min(0, 'Total monthly cost (inbox/infrastructure) must be 0 or greater'),
  domainCost :  z.number().min(0, 'Total domain cos must be 0 or greater'),
});

export const ourOfferSchema = z.object({
  emailSequencerCost: z.number().min(0, 'Email sequencer cost must be 0 or greater'),
  desiredDailyVolume: z.number().min(1, 'Desired daily volume must be at least 1'),
  inboxesPerDomain: z.number().min(1, 'Inboxes per domain must be at least 1').default(3),
  sendsPerInbox: z.number().min(1, 'Sends per inbox must be at least 1').default(30),
  costPerInbox: z.number().min(0, 'Cost per inbox must be 0 or greater').default(3.5),
  costPerDomain: z.number().min(0, 'Cost per domain must be 0 or greater'),
  useExistingDomains: z.boolean(),
  costForDomains: z.number().min(0, 'Cost of domains must be 0 or greater'),
});

export const calculatorFormSchema = z.object({
  currentCosts: currentCostsSchema,
  ourOffer: ourOfferSchema,
});

export type CalculatorFormSchema = z.infer<typeof calculatorFormSchema>; 
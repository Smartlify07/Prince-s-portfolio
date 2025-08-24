import type { Project } from '../types';
import { BlesSoftware } from '@/lib/projects/bles-software';
import { Crawler } from '@/lib/projects/crawler';
import { ExpenseMaster } from '@/lib/projects/expense-master';
import { TabbioSmartCv } from '@/lib/projects/tabbio';
import { Vifzack } from '@/lib/projects/vifzack';
import { KaleriAI } from '@/lib/projects/kaleri-ai';
import { BusBooks } from '../projects/busbooks';
import { maxwellEv } from '../projects/maxwell-ev';

export const projects: Project[] = [
  BusBooks,
  Vifzack,
  BlesSoftware,
  maxwellEv,
  Crawler,
  ExpenseMaster,
  KaleriAI,
  TabbioSmartCv,
];

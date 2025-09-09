import type { Project } from '../types';
import { Laxmii } from '@/lib/projects/laxmii';
import { Tabbio } from '@/lib/projects/tabbio';
import { Radivox } from '@/lib/projects/radivox';
import { PumpDB } from '@/lib/projects/pump-db';
import { Invysion } from '@/lib/projects/invysion';
import { Ableton } from '@/lib/projects/ableton';
import { Aora } from '../projects/aora';
import { QuantCore } from '../projects/quantcore';

export const projects: Project[] = [
  Aora,
  Invysion,
  Laxmii,
  QuantCore,
  Tabbio,
  Ableton,
  Radivox,
  PumpDB,
];

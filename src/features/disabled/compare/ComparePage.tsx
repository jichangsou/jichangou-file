// Archived ComparePage feature (Disabled as of Phase 1-A.14)
// Preserved for future reference if compare feature is re-enabled.

import React from 'react';
import Link from 'next/link';
import { mockAirports, mockCompareItems } from '@/data/mock';
import { Scale, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface ComparePageProps {
  slug?: string;
}

export default function DisabledComparePage({ slug }: ComparePageProps) {
  return null;
}

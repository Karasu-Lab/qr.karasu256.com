import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { withUi } from '@karasu-lab/ui/next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@karasu-lab/ui', '@karasu-lab/utils'],
  devIndicators: false,
};

export default withUi(withNextIntl(nextConfig));

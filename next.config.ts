import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@karasu-lab/ui', '@karasu-lab/utils'],
  devIndicators: false,
};

export default withNextIntl(nextConfig);

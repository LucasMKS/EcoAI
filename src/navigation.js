import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'pt'];

export const {Link, redirect, usePathname, useRouter} =
  createNavigation({locales});

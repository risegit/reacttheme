'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

  export default function DelayScroll() {
    const pathname = usePathname();
    useEffect(() => {
        const hash = window.location.hash;

        if (!hash) return;

        const el = document.querySelector(hash);

        if (el) {
        setTimeout(() => {
            el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            });
        }, 150);
        }
    }, [pathname]);

    return null;
}
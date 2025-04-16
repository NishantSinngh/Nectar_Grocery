

export function generateUpiUrl({ pa, pn, tr, am, cu, tn }: PaymentParams) {
    const amount = am.toFixed(2);
    return `upi://pay?pa=${encodeURIComponent(pa)}&pn=${encodeURIComponent(pn)}&tr=${encodeURIComponent(tr)}&am=${encodeURIComponent(amount)}&cu=${encodeURIComponent(cu)}&tn=${encodeURIComponent(tn)}`;
};

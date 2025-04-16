

// upi://pay — UPI scheme for payment intent.

// pa — Payee address (VPA or UPI ID).

// pn — Payee name.

// tr — Transaction reference ID.

// am — Amount.

// cu — Currency (INR).

// tn — Transaction note.

export function generateUpiUrl({ pa, pn, tr, am, cu, tn }: PaymentParams) {
    const amount = am.toFixed(2);
    return `upi://pay?pa=${encodeURIComponent(pa)}&pn=${encodeURIComponent(pn)}&tr=${encodeURIComponent(tr)}&am=${encodeURIComponent(amount)}&cu=${encodeURIComponent(cu)}&tn=${encodeURIComponent(tn)}`;
};

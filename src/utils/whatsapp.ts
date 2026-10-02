export const WHATSAPP_PHONE_NUMBER = '919838110645';
export const WHATSAPP_DISPLAY_PHONE = '+91 98381 10645';
export const CALL_PHONE_URL = 'tel:+919838110645';

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi KARTONIQ! I'm planning to shift my home from Noida/Greater Noida and need cartons and packing supplies. Please help me choose the right items and quantity.";

export const SMALL_CARTON_MESSAGE =
  "Hi KARTONIQ! I'm planning to shift from Noida/Greater Noida and would like to ask about Small Cartons (12×12×18 inches, 3 Ply, ₹69).";

export const MEDIUM_CARTON_MESSAGE =
  "Hi KARTONIQ! I'm planning to shift from Noida/Greater Noida and would like to ask about Medium Cartons (24×18×18 inches, 5 Ply, ₹149).";

export const BROWN_TAPE_MESSAGE =
  "Hi KARTONIQ! I'm planning to shift from Noida/Greater Noida and would like to order Brown Packaging Tapes (2-inch width, 65m roll, ₹69).";

export const BUBBLE_WRAP_MESSAGE =
  "Hi KARTONIQ! I'm planning to shift from Noida/Greater Noida and would like to order Protective Bubble Wrap (₹19 per meter).";

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface OrderItemEstimate {
  smallQty: number;
  mediumQty: number;
  tapeQty: number;
  bubbleWrapMeters: number;
  total: number;
  freeDelivery: boolean;
}

export function getOrderWhatsAppUrl(
  smallQty: number = 0,
  mediumQty: number = 0,
  total: number = 0,
  freeDelivery: boolean = false,
  tapeQty: number = 0,
  bubbleWrapMeters: number = 0
): string {
  const items: string[] = [];
  if (smallQty > 0) items.push(`${smallQty} × Small Cartons 12x12x18" (₹${smallQty * 69})`);
  if (mediumQty > 0) items.push(`${mediumQty} × Medium Cartons 24x18x18" (₹${mediumQty * 149})`);
  if (tapeQty > 0) items.push(`${tapeQty} × Brown Packaging Tapes 2"x65m (₹${tapeQty * 69})`);
  if (bubbleWrapMeters > 0) items.push(`${bubbleWrapMeters}m × Protective Bubble Wrap (₹${bubbleWrapMeters * 19})`);

  const itemsText = items.length > 0 ? items.join('\n• ') : 'Moving Supplies & Cartons';
  const deliveryText = freeDelivery ? 'FREE (Unlocked above ₹999)' : '₹99 standard flat delivery';

  const text = `Hi KARTONIQ! I'm shifting home in Noida/Greater Noida and would like to order:
• ${itemsText}

- Estimated Total: ₹${total} (Delivery: ${deliveryText})

Please confirm delivery slot, sector address, and payment details.`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

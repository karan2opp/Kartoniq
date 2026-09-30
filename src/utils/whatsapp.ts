export const WHATSAPP_PHONE_NUMBER = '919838110645';
export const WHATSAPP_DISPLAY_PHONE = '+91 98381 10645';

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi KARTONIQ! I'm planning to shift my home from Noida/Greater Noida and need cartons. Please help me choose the right size and quantity.";

export const SMALL_CARTON_MESSAGE =
  "Hi KARTONIQ! I'm planning to shift from Noida/Greater Noida and would like to ask about Small Cartons (12×12×18 inches, 3 Ply, ₹69).";

export const MEDIUM_CARTON_MESSAGE =
  "Hi KARTONIQ! I'm planning to shift from Noida/Greater Noida and would like to ask about Medium Cartons (24×18×18 inches, 5 Ply, ₹149).";

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getOrderWhatsAppUrl(smallQty: number, mediumQty: number, total: number, freeDelivery: boolean): string {
  const items: string[] = [];
  if (smallQty > 0) items.push(`${smallQty} × Small Cartons (₹${smallQty * 69})`);
  if (mediumQty > 0) items.push(`${mediumQty} × Medium Cartons (₹${mediumQty * 149})`);
  
  const itemsText = items.length > 0 ? items.join(' + ') : 'moving cartons';
  const deliveryText = freeDelivery ? 'FREE (Order above ₹999)' : '₹99 standard delivery';
  
  const text = `Hi KARTONIQ! I'm shifting my home from Noida/Greater Noida and would like to order:
- Cartons: ${itemsText}
- Estimated Total: ₹${total} (Delivery: ${deliveryText})

Please confirm availability, sector address, and payment details.`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

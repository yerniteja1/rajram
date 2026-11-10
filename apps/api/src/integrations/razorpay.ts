import Razorpay from "razorpay";

let razorpayClient: Razorpay | null = null;

export function getRazorpayClient(): Razorpay {
  if (razorpayClient) {
    return razorpayClient;
  }
  razorpayClient = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID ?? "",
    key_secret: process.env.RAZORPAY_KEY_SECRET ?? "",
  });
  return razorpayClient;
}

export function verifyRazorpayWebhookSignature(
  body: string,
  signature: string,
  secret: string,
): boolean {
  return Razorpay.validateWebhookSignature(body, signature, secret);
}

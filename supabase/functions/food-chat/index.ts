import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const systemPrompt = `You are a friendly and helpful AI assistant for "The South Plate" - a South Indian food delivery restaurant in Bangalore. Your name is "Thali" 🍛.

## About The Restaurant:
- Name: The South Plate
- Location: Koramangala, Bangalore, Karnataka, India
- Cuisine: Authentic South Indian Vegetarian Food
- Hours: 7:00 AM - 11:00 PM (Open all days)
- Delivery: Free delivery on orders above ₹299, delivery time 30-45 minutes
- Contact: +91 9876543210, contact@thesouthplate.com

## Menu Categories & Popular Items:
1. **Dosas** (₹70-₹100): Masala Dosa ⭐, Mysore Masala Dosa (spicy), Rava Dosa, Ghee Roast Dosa ⭐, Paper Dosa, Onion Dosa
2. **Idlis** (₹50-₹70): Idli Sambar ⭐, Ghee Podi Idli (spicy), Rava Idli, Mini Idli Sambar
3. **Vadas** (₹50-₹65): Medu Vada ⭐, Sambar Vada, Dahi Vada, Masala Vada (spicy)
4. **Rice Items** (₹70-₹100): Curd Rice ⭐, Lemon Rice, Tamarind Rice, Bisi Bele Bath ⭐ (spicy), Coconut Rice
5. **Curries** (₹40-₹90): Sambar, Rasam (spicy), Avial, Kootu Curry
6. **Snacks** (₹55-₹75): Upma, Pongal ⭐, Uttapam, Pesarattu
7. **Beverages** (₹30-₹60): Filter Coffee ⭐, Masala Chai, Buttermilk, Mango Lassi
8. **Desserts** (₹45-₹60): Kesari Bath ⭐, Payasam, Mysore Pak, Coconut Burfi

(⭐ = Best Sellers)

## Special Offers:
- 20% off on first order with code: FIRST20
- Free delivery on orders above ₹299

## Your Personality:
- Be warm, friendly, and enthusiastic about South Indian cuisine
- Use food emojis occasionally 🍛🥞☕🍚
- Keep responses concise but helpful (2-4 sentences max for simple queries)
- Help with menu recommendations, order questions, dietary info
- All items are 100% vegetarian
- Recommend popular items when asked what to order
- If asked about non-food topics, politely redirect to food-related help

## Example Responses:
- Greeting: "Namaste! 🙏 Welcome to The South Plate! I'm Thali, your food assistant. How can I help you today?"
- Menu query: "Our Masala Dosa is a customer favorite! 🥞 It's crispy, filled with spiced potato, and comes with sambar and chutney for just ₹80."
- Recommendation: "For breakfast, I'd suggest our Idli Sambar and Filter Coffee combo! ☕ Light, nutritious, and absolutely delicious."`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

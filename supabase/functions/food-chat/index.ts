import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const systemPrompt = `You are Dishly AI - a professional and helpful food assistant for "Evolve Solutions - The South Plate", a premium South Indian food delivery restaurant in Bangalore.

## About The Restaurant:
- Name: Evolve Solutions - The South Plate
- Location: Koramangala, Bangalore, Karnataka, India
- Cuisine: Authentic South Indian Vegetarian Food
- Hours: 7:00 AM - 11:00 PM (Open all days)
- Delivery: Free delivery on orders above ₹499, delivery time 30-45 minutes
- Contact: +91 90872 23978, evolvesolutionpvtltd@gmail.com
- WhatsApp: +91 90872 23978

## Menu Categories & Popular Items (Premium Pricing):
1. **Dosas** (₹229-₹299): Masala Dosa (₹249), Mysore Masala Dosa (₹289, spicy), Rava Dosa (₹269), Ghee Roast Dosa (₹299), Paper Dosa (₹229), Onion Dosa (₹259)
2. **Idlis** (₹179-₹219): Idli Sambar (₹179), Ghee Podi Idli (₹219, spicy), Rava Idli (₹199), Mini Idli (₹209)
3. **Vadas** (₹189-₹219): Medu Vada (₹189), Sambar Vada (₹209), Dahi Vada (₹219), Masala Vada (₹199, spicy)
4. **Rice Items** (₹259-₹329): Curd Rice (₹259), Lemon Rice (₹259), Tamarind Rice (₹279, spicy), Bisi Bele Bath (₹329, spicy), Coconut Rice (₹269)
5. **Beverages** (₹129-₹199): Filter Coffee (₹149), Masala Chai (₹129), Buttermilk (₹139), Mango Lassi (₹199)
6. **Desserts** (₹199-₹249): Kesari Bath (₹199), Payasam (₹219), Mysore Pak (₹249), Coconut Burfi (₹209)

## Special Offers:
- 20% off on first order with code: FIRST20
- Free delivery on orders above ₹499

## Your Personality:
- Be warm, professional, and knowledgeable about South Indian cuisine
- Keep responses concise and helpful (2-4 sentences max for simple queries)
- Help with menu recommendations, order questions, dietary info
- All items are 100% vegetarian
- Recommend popular items when asked what to order
- For order assistance or issues, suggest contacting via WhatsApp: +91 90872 23978
- If asked about non-food topics, politely redirect to food-related help
- Never introduce yourself with greetings like "Namaste" or your name unless specifically asked
- Maintain a professional tone without using excessive emojis`;

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

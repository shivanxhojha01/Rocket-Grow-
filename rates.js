/* ═══════════════════════════════════════════════════════════
   GXCHANGE — GIFT CARD RATES
   ───────────────────────────────────────────────────────────
   Sirf isi file mein saare rates hain (INR / USDT / PKR).
   Website ki HTML file ko haath lagane ki zaroorat nahi —
   bas yahan value change karo, save karo, GitHub par push
   karo. Site khud-ba-khud naye rates dikhayegi.

   Naya card add karna ho to neeche wale pattern jaisa ek
   naya object GIFT_CARDS array mein daal do.

   Fields:
     name      -> card ka naam
     logo      -> emoji icon
     delivery  -> "⚡ Instant" ya "⏱️ X Days"
     category  -> "gaming" / "shopping" / "entertainment"
     note      -> (optional) card ke niche chhota disclaimer
     denoms    -> denomination list, har ek mein:
                    id    -> unique id (koi bhi unique text)
                    label -> denomination ka naam
                    inr   -> INR price (na ho to field hata do)
                    usdt  -> USDT price (na ho to field hata do)
                    pkr   -> PKR price (na ho to field hata do)
                    msg   -> WhatsApp par jo message jaayega
   ─────────────────────────────────────────────────────────── */
const GIFT_CARDS = [
  {
    name: "Roblox", logo: "👾", delivery: "⚡ Instant", category: "gaming",
    denoms: [
      { id: "roblox-800",  label: "800 Robux",  inr: "₹790",  usdt: "$7.8", pkr: "PKR 2184", msg: "Hi! I want to sell an 800 Robux Roblox gift card." },
      { id: "roblox-1000", label: "1000 Robux", inr: "₹1001", usdt: "$9.9", pkr: "PKR 2772", msg: "Hi! I want to sell a 1000 Robux Roblox gift card." }
    ]
  },
  {
    name: "League of Legends (RP)", logo: "⚔️", delivery: "⚡ Instant", category: "gaming",
    denoms: [
      { id: "lol-100", label: "100 RP", inr: "₹130", usdt: "$1.3", pkr: "PKR 364",  msg: "Hi! I want to sell a 100 RP League of Legends gift card." },
      { id: "lol-575", label: "575 RP", inr: "₹370", usdt: "$3.7", pkr: "PKR 1036", msg: "Hi! I want to sell a 575 RP League of Legends gift card." }
    ]
  },
  {
    name: "Overwatch 2", logo: "🎯", delivery: "⚡ Instant", category: "gaming",
    denoms: [
      { id: "ow2-200",  label: "200 Coins",  inr: "₹150", usdt: "$1.5", pkr: "PKR 420",  msg: "Hi! I want to sell 200 Overwatch 2 Coins." },
      { id: "ow2-1000", label: "1000 Coins", inr: "₹670", usdt: "$6.7",   pkr: "PKR 1876", msg: "Hi! I want to sell 1000 Overwatch 2 Coins." }
    ]
  },
  {
    name: "PlayStation (PSN)", logo: "🎮", delivery: "⚡ Instant", category: "gaming",
    note: "*INR-only card, PKR/USDT on request via WhatsApp",
    denoms: [
      { id: "psn-1000", label: "₹1000 Card", inr: "₹1040", msg: "Hi! I want to sell a ₹1000 PlayStation gift card." },
      { id: "psn-2000", label: "₹2000 Card", inr: "₹2150", msg: "Hi! I want to sell a ₹2000 PlayStation gift card." },
      { id: "psn-3000", label: "₹3000 Card", inr: "₹3200", msg: "Hi! I want to sell a ₹3000 PlayStation gift card." },
      { id: "psn-5000", label: "₹5000 Card", inr: "₹5300", msg: "Hi! I want to sell a ₹5000 PlayStation gift card." }
    ]
  },
  {
    name: "Minecraft", logo: "🧱", delivery: "⚡ Instant", category: "gaming",
    denoms: [
      { id: "minecraft-330", label: "330 Coins", inr: "₹230", usdt: "$2.3", pkr: "PKR 644", msg: "Hi! I want to sell 330 Minecraft Coins." }
    ]
  },
  {
    name: "Sea of Thieves", logo: "🏴‍☠️", delivery: "⏱️ 10 Days", category: "gaming",
    note: "*10-digit code also accepted",
    denoms: [
      { id: "sot-550",  label: "550 Coins",  inr: "₹120", usdt: "$1.2", pkr: "PKR 336", msg: "Hi! I want to sell 550 Sea of Thieves Coins." },
      { id: "sot-1000", label: "1000 Coins", inr: "₹350", usdt: "$3.5", pkr: "PKR 980", msg: "Hi! I want to sell 1000 Sea of Thieves Coins." }
    ]
  },
  {
    name: "PVR Cards", logo: "🍿", delivery: "⏱️ 3 Days", category: "entertainment",
    note: "*INR-only card, PKR/USDT on request via WhatsApp",
    denoms: [
      { id: "pvr-500", label: "₹500 Card", inr: "₹200", msg: "Hi! I want to sell a ₹500 PVR gift card." }
    ]
  },
  {
    name: "Target U.S.", logo: "🛒", delivery: "⏱️ 10 Days", category: "shopping",
    denoms: [
      { id: "target-5", label: "$5 Card", inr: "₹230", usdt: "$2.30", pkr: "PKR 644", msg: "Hi! I want to sell a $5 Target gift card." }
    ]
  },
  {
    name: "Amazon Global (US/UK)", logo: "📦", delivery: "⏱️ 10 Days", category: "shopping",
    denoms: [
      { id: "amazon-1.25", label: "$1.25 Card", inr: "₹40",  usdt: "$1.25", pkr: "PKR 350",  msg: "Hi! I want to sell a $1.25 Amazon gift card." },
      { id: "amazon-5",    label: "$5.00 Card", inr: "₹340", usdt: "$5.00", pkr: "PKR 1400", msg: "Hi! I want to sell a $5 Amazon gift card." },
      { id: "amazon-10",   label: "$10.0 Card", inr: "₹750", usdt: "$10.0", pkr: "PKR 2800", msg: "Hi! I want to sell a $10 Amazon gift card." }
    ]
  }
];

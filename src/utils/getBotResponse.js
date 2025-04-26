// src/utils/getBotResponse.js
export const intents = [
  {
    tag: "greeting",
    patterns: ["hi", "hello", "hey", "good morning", "good evening"],
    responses: [
      "Hello! Welcome to ShohojMart+. How can I assist you today?",
      "Hi there! How can I assist you today?",
    ],
  },
  {
    tag: "name",
    patterns: ["name", "what is your name", "what's name", "who are you", "who you"],
    responses: [
      "My Name Elisha I am a AI Chatbot ",
      "My Name Elisha I am a AI Chatbot. I assist you to give information"
    ],
  },
  {
    tag: "shohojmart",
    patterns: [
      "shohojmart",
      "about shohojmart",
      "tell me about shohojmart",
      "tell me about your site",
      "site description",
      "site name",
      "site",
      "website"
    ],
    responses: [
      "ShohojMart+ is your one-stop online marketplace for electronics, fashion, home essentials, and more. We make shopping simple, fast, and secure.",
      "ShohojMart+ is a modern e-commerce platform offering great deals on quality products with reliable delivery and customer support.",
      "Welcome to ShohojMart+ – an all-in-one online store where convenience meets trust. Shop easily and get your essentials delivered to your doorstep."
    ]
  },
  
  {
    tag: "how are you",
    patterns: ["how are you", "how do you do", "what happened", "how"],
    responses: ["i am fine How can I help you", "i am ok now How can I help you", "i am good How can I help you"],
  },
  {
    tag: "bye",
    patterns: ["bye", "goodbye", "see you"],
    responses: ["Goodbye! Come again soon!", "Take care!"],
  },
  {
    tag: "thanks",
    patterns: ["thanks", "thank you", "ty"],
    responses: ["You're welcome!", "Happy to help!"],
  },
  {
    tag: "order_help",
    patterns: ["how to order","order",'how to buy product', 'how to buy', "place an order", "order guide"],
    responses: [
      "To place an order, browse products and click 'Add to Cart', then checkout.",
    ],
  },
  {
    tag: "payment",
    patterns: ["payment method", "how to pay", "pay options","payment"],
    responses: ["We accept credit card, mobile banking, and cash on delivery."],
  },
  {
    tag: "shipping",
    patterns: ["shipping info", "delivery time","shipping", "delivery", "how long to deliver", "when will my order arrive", "shipping options"],
    responses: [
      "We offer standard and express delivery. Standard shipping takes 3-5 days.",
      "Delivery usually takes 3-5 business days depending on your location."
    ]
  },
  {
    tag: "return_policy",
    patterns: ["return product", "refund", "return policy","return", "can I return", "how to return"],
    responses: [
      "You can return products within 7 days of delivery. Please ensure the product is unused. or Check our help page for full details on refunds and returns.",
    ]
  },
  {
    tag: "contact_support",
    patterns: ["need help","customer","contact","support", "help", "contact", "talk to someone", "contact number"],
    responses: [
      "You can reach our support team via contact page or call us at +8801771814597.",
      "Need help? Contact us using the 'Help' Page or call our number +8801771814597."
    ]
  },
  {
    tag: "product_availability",
    patterns: ["is this available", "available","availability", "in stock","stock", "do you have", "available now"],
    responses: [
      "Let me check that for you! Please share the product name.",
      "Some products may run out fast. Use the 'Notify Me' button if it's out of stock."
    ]
  },
  {
    tag: "discounts_offers",
    patterns: ["discount", "offer", "any promo", "coupon","price","cupon", "sale going on"],
    responses: [
      "We have seasonal discounts! Check our homepage banner or Offers section.",
      "Use promo code 'WELCOME10' for 10% off on your first order!"
    ]
  },
  {
    tag: "track_order",
    patterns: ["track my order","track", "order status", "where is my order", "track delivery"],
    responses: [
      "Please provide your order ID to check the status.",
      "You can track your order from the 'My Orders' section after logging in."
    ]
  },
  {
    tag: "signup_login",
    patterns: ["how to sign up","sign","how to login", "login help","login", "create account", "register"],
    responses: [
      "Click on the 'Sign in' button at the top-right and fill in your details.",
    ]
  }
  
];

export const getBotResponse = (input) => {
  input = input.toLowerCase();

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      if (input.includes(pattern)) {
        const response =
          intent.responses[Math.floor(Math.random() * intent.responses.length)];
        return response;
      }
    }
  }

  return "Sorry, I didn’t understand that. Can you rephrase?";
};

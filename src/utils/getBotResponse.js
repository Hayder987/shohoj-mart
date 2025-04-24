// src/utils/getBotResponse.js
export const intents = [
  {
    tag: "greeting",
    patterns: ["hi", "hello", "hey", "good morning", "good evening"],
    responses: [
      "Hello! Welcome to ShohojMart+",
      "Hi there! How can I assist you today?",
    ],
  },
  {
    tag: "how are you",
    patterns: ["how are you", "how do you do", "what happened"],
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
    patterns: ["how to order",'how to buy product', 'how to buy', "place an order", "order guide"],
    responses: [
      "To place an order, browse products and click 'Add to Cart', then checkout.",
    ],
  },
  {
    tag: "payment",
    patterns: ["payment method", "how to pay", "pay options"],
    responses: ["We accept credit card, mobile banking, and cash on delivery."],
  },
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

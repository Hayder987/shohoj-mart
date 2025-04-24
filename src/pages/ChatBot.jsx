import { useState, useRef, useEffect } from "react";
import PageMargin from "../components/common/PageMargin";
import { getBotResponse } from "../utils/getBotResponse";
import useAuth from "../hooks/useAuth";
import AiBanner from "../assets/images/ai-banner.png";
import { BsFillSendArrowUpFill } from "react-icons/bs";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { user } = useAuth();

  // Reference to the message container and scroll handling
  const messagesContainerRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      role: user?.displayName || "User",
      content: input,
      avatar: user?.photoURL || "/default-user.jpg",
    };

    const botReply = {
      role: "Elisha",
      content: getBotResponse(input),
      avatar: "/bot-avatar.jpg",
    };

    setMessages([...messages, userMsg, botReply]);
    setInput("");
  };

  // Scroll to the bottom when messages update
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AiBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[90vh]"
    >
      <PageMargin />
      <h1 className="text-xl md:text-2xl py-6 font-semibold text-center text-gray-300">
        Welcome To ChatBot
      </h1>

      <div className="px-4 max-w-[900px] mx-auto">
        <div
          ref={messagesContainerRef}
          className="bg-transparent backdrop-blur-md border border-gray-600 p-4 rounded shadow space-y-4 h-[500px] lg:h-[550px] overflow-y-auto"
        >
          {messages.length > 0 ? (
            <>
              {messages.map((msg, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img
                    src={msg.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover border"
                  />
                  <div>
                    <strong className="text-sm text-gray-300">{msg.role}</strong>
                    <div className="text-green-400">{msg.content}</div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="p-12">
              <p className="text-2xl text-gray-200 font-medium text-center mt-12 px-6 py-4 rounded-lg shadow-lg">
                🤖 <span className="font-extrabold">Oops!</span> It looks like
                we haven’t started 💬 chatting yet. Ask me about this site, and I’ll be
                here to assist you! 😊
              </p>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="mt-4 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border px-2 py-1 text-gray-100 rounded w-full"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-green-600 cursor-pointer text-white px-4 py-1 text-3xl rounded"
          >
            <BsFillSendArrowUpFill />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;

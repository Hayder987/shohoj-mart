import { useState, useRef, useEffect } from "react";
import PageMargin from "../components/common/PageMargin";
import { getBotResponse } from "../utils/getBotResponse";
import useAuth from "../hooks/useAuth";
import AiBanner from "../assets/images/aiBg-2.jpg";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { motion } from "framer-motion";

const ChatBot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { user } = useAuth();
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

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
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

      <div className="px-4 max-w-[850px] mx-auto">
        <div
          ref={messagesContainerRef}
          className="bg-transparent backdrop-blur-md border py-8 border-blue-600 p-4 rounded shadow space-y-6 h-[500px] lg:h-[550px] overflow-y-auto"
        >
          {messages.length > 0 ? (
            <>
              {messages.map((msg, idx) => {
                const isUser = msg.role !== "Elisha";
                return (
                  <motion.div
                    key={idx}
                    className={`flex items-start gap-3 ${
                      isUser
                        ? "justify-end text-right"
                        : "justify-start text-left"
                    }`}
                    initial={{ opacity: 0, x: isUser ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {!isUser && (
                      <img
                        src={msg.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover border"
                      />
                    )}
                    <div className="max-w-10/12">
                      <strong className="text-sm text-gray-300">{msg.role}</strong>
                      <div className="text-blue-200">{msg.content}</div>
                    </div>
                    {isUser && (
                      <img
                        src={msg.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover border"
                      />
                    )}
                  </motion.div>
                );
              })}
            </>
          ) : (
            <div className="p-12">
              <p className="text-xl text-center text-gray-300">
                Hi {user?.displayName || "Guest"} ❤️
              </p>
              <p className="text-2xl text-gray-200 font-lg text-center mt-12 px-6 py-4 rounded-lg shadow-lg">
                🤖 <span className="font-extrabold">Oops!</span> It looks like we
                haven’t started 💬 chatting yet. Ask me about this site, and I’ll
                be here to assist you! 😊
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
            className="border px-2 py-1 text-gray-100 bg-transparent border-blue-600 rounded w-full"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-700 cursor-pointer text-white px-4 py-1 text-3xl rounded"
          >
            <BsFillSendArrowUpFill />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;

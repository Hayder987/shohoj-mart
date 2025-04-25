import { useState, useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth";
import botImage from "../assets/images/chat-2.jpg";
import userImageFallback from "../assets/images/chat-2.jpg"; // fallback in case no user image
import bgBanner from "../assets/images/ai-banner.png";
import PageMargin from "../components/common/PageMargin";

const DeepSeekChat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();
  const userName = user?.displayName || "You";
  const userImage = user?.photoURL || userImageFallback;

  const messagesContainerRef = useRef(null);

  const askBot = async () => {
    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
    ]);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "ShohojMart+ DeepSeek Bot",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.2-3b-instruct:free",
          messages: [{ role: "user", content: input }],
        }),
      });

      const data = await res.json();
      const botMessage = data?.choices?.[0]?.message?.content || "No response";

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: botMessage },
      ]);

      setResponse(botMessage);
    } catch (err) {
      console.error("Error fetching from DeepSeek:", err);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: "❌ Error fetching response from DeepSeek",
        },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[100vh] overflow-y-scroll"
    >
      <PageMargin />
      <div className="py-8 px-4 bg-transparent relative lg:max-w-[1100px] mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-4">
          Ask Elisha for Any Question
        </h2>

        {/* Chat Window */}
        <div className="bg-transparent backdrop-blur-lg p-4 rounded-lg shadow-lg min-h-[500px] lg:min-h-[550px] overflow-y-scroll">
          {/* Messages */}
          {messages.length > 0 ? (
            <div ref={messagesContainerRef} className="space-y-4 flex flex-col">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-end gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Bot Avatar */}
                  {message.role !== "user" && (
                    <img
                      src={botImage}
                      alt="Bot"
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                  )}

                  <div className="max-w-[75%]">
                    <p
                      className={`mb-1 text-xs ${
                        message.role === "user"
                          ? "text-right text-blue-200"
                          : "text-left text-gray-500"
                      }`}
                    >
                      {message.role === "user" ? userName : "Elisa"}
                    </p>

                    <div
                      className={`p-3 rounded-xl text-sm whitespace-pre-line shadow-md ${
                        message.role === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white text-gray-900 rounded-bl-none"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>

                  {/* User Avatar */}
                  {message.role === "user" && (
                    <img
                      src={userImage}
                      alt="User"
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12">
              <p className="text-xl text-center text-gray-300">
                Hi {user?.displayName} ❤️
              </p>
              <p className="text-2xl text-gray-200 font-lg text-center mt-12 px-6 py-4 rounded-lg shadow-lg">
                🤖 <span className="font-extrabold">Oops!</span> It looks like
                we haven’t started 💬 chatting yet. Ask me about Anything, and
                I’ll be here to assist you! 😊
              </p>
            </div>
          )}
        </div>

        {/* Input Section */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            askBot(); // trigger bot
          }}
          className="mt-4 flex items-center"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="border border-gray-300 text-white p-3 rounded-lg flex-grow bg-transparent placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 ml-4 rounded-lg"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeepSeekChat;

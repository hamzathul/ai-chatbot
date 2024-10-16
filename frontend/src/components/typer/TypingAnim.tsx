import { TypeAnimation } from 'react-type-animation';

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Chat with Your Own AI: Where Every Conversation Matters 🤖",
        2000,
        "Powered by OpenAI: Elevating Conversations with Cutting-Edge Technology 🚀",
        1500,
        "Experience the Future of Interaction with Your Custom AI 🌟",
        2000,
        "Your AI, Your Way: Personalized Conversations Await 🗣️",
        1500,
      ]}
      speed={50}
      style={{ fontSize: "30px", color:'white', display:'inline-block', textShadow:'1px 1px 20px #000' }}
      repeat={Infinity}
    />
  );
}

export default TypingAnim
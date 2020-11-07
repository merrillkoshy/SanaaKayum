import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function SKChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
    botAvatar: "/assets/pwa/icons/icon-152x152.png",
    headerTitle: "Let's Talk!"
  };
  // all available props
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#000000",
    headerFontColor: "#ddbb74",
    headerFontSize: "15px",
    botBubbleColor: "#000000",
    botFontColor: "#fff",
    userBubbleColor: "#ddbb74",
    userFontColor: "#4a4a4a"
  };

  const steps = [
    {
      id: "1",
      message: "Ahlan wa Sahlan!",
      trigger: "2"
    },
    {
      id: "2",
      message: "Please enter your name",
      trigger: "3"
    },
    {
      id: "3",
      user: true,
      trigger: "4"
    },
    {
      id: "4",
      message: "Hi {previousValue}, how can we help you today?",
      end: true
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default SKChatbot;

export const scrollToBottom = (chatContainerRef) => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

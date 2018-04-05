import React from "react";

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();
    const { userReceiverId, userSenderId } = this.props;
    this.props
      .createMessage(this.state.content, userSenderId, userReceiverId)
      .then(() => {
        this.setState({ content: "" });
      });
  }

  updateMessage(e) {
    e.preventDefault();
    const lastChar = e.target.value[e.target.value.length - 1];
    if (lastChar === "\n") {
      this.sendMessage(e);
    } else {
      const content = e.target.value;
      this.setState({ content });
    }
  }

  render() {
    const sendButton = this.state.content ? (
      <button type="submit">Send</button>
    ) : null;
    return (
      <div className="message-form-container">
        <form onSubmit={this.sendMessage}>
          <textarea
            type="text"
            value={this.state.content}
            onChange={this.updateMessage}
            placeholder="Type a message..."
          />
          {sendButton}
        </form>
      </div>
    );
  }
}

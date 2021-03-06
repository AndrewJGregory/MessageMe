import PropTypes from "prop-types";
import React from "react";

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.input = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedUserIdx === -1) this.input.focus();
  }

  sendMessage(e) {
    e.preventDefault();
    const { userReceiverId, userSenderId } = this.props;
    this.props
      .createMessage(this.state.content.trim(), userSenderId, userReceiverId)
      .then(() => {
        this.setState({ content: "" });
      });
  }

  updateMessage(e) {
    e.preventDefault();
    const lastChar = e.target.value[e.target.value.length - 1];
    if (lastChar === "\n" && this.state.content.trim()) {
      this.sendMessage(e);
    } else {
      const content = e.target.value;
      this.setState({ content });
    }
  }

  render() {
    const sendButton = this.state.content ? (
      <button
        className="send-btn clickable"
        type="submit"
        onClick={this.sendMessage}
      >
        Send
      </button>
    ) : null;

    return (
      <div className="lower-container">
        <div className="btn-and-input-container">
          <textarea
            type="text"
            value={this.state.content}
            onChange={this.updateMessage}
            placeholder="Type a message..."
            ref={input => {
              this.input = input;
            }}
          />
          {sendButton}
        </div>
      </div>
    );
  }
}

MessageInput.propTypes = {
  userReceiverId: PropTypes.number.isRequired,
  userSenderId: PropTypes.number.isRequired,
  selectedUserIdx: PropTypes.number.isRequired,
  createMessage: PropTypes.func.isRequired,
};

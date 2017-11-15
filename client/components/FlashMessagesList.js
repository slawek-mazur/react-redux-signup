import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FlashMessage from './FlashMessage';

class FlashMessagesList extends React.Component {

  render() {
    const messages = this.props.messages
      .map(message =>
        <FlashMessage key={message.id} message={message}/>
      );

    return (
      <div className="messagesWrapper">{messages}</div>
    )
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps)(FlashMessagesList);
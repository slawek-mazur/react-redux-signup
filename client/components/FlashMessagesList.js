import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FlashMessage from './FlashMessage';
import {removeFlashMessage} from '../actions/flashMessages';

class FlashMessagesList extends React.Component {

  render() {
    const {removeFlashMessage} = this.props;

    const messages = this.props.messages
      .map(message =>
        <FlashMessage key={message.id} message={message} removeFlashMessage={removeFlashMessage}/>
      );

    return (
      <div className="messagesWrapper">{messages}</div>
    )
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  removeFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps, {removeFlashMessage})(FlashMessagesList);
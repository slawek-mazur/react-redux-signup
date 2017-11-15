import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.removeFlashMessage(this.props.message.id);
  }

  render() {

    const {id, type, text} = this.props.message;

    return (
      <div id={id} className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  removeFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
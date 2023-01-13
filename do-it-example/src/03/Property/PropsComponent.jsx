import React from 'react'
import PropsTypes from 'prop-types';

export default class PropsComponent extends React.Component {
  render() {
    return (
      <div className="message-container">
        {this.props.name}
      </div>
    );
  }
}
/*
PropsComponent.propTypes {
    name : PropTypes.string,
};
*/

import React, { Component } from 'react'
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';
import {StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props}/>
      </div>
    );
  }
}

const bodyStyles = StyleSheet.create({
        marginBottom: {
          marginBottom: '40px'
        }
});

BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default BodySectionWithMarginBottom;

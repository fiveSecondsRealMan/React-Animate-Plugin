/**
  slider 动画查看
**/

import React, { Component, PropTypes } from 'react';
import { replaceTemplate } from '../../utils/index';
import './slide.less';

function getStyles (props) {
  return {
    transitionProperty: 'height',
    transitionDuration: replaceTemplate('${transitionDuration}s', props);
    transitionTimingFunction: replaceTemplate('${}')
  };
}

class SlideAnimate extends Component {
  constructor() {

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {

  }
}

SlideAnimate.propTypes = {
  /**
   * class name
  */
  className: PropTypes.string,

  /**
   * 插件包裹的组件显、隐状态
  */
  isShowComponent: PropTypes.bool,

  /**
   * slideUp 动作对应在css中的animation name
  */
  slideUpName: PropTypes.string,

  /**
   * slideDown 动作对应在css中的animation name
  */
  slideDownName: PropTypes.string
};

SlideAnimate.defaultProps = {
  className: 'slide-animate',
  isShowComponent: true,
  slideUpName: 'slideUp',
  slideDownName: 'slideDown'
};

export default SlideAnimate;

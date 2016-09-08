/**
  slider 动画查看
**/

import React, { Component, PropTypes } from 'react';
import { replaceTemplate } from '../../utils/index';
import './slide.less';

function getTransitionStyles (props) {
  return {
    transitionProperty: 'height',
    transitionDuration: replaceTemplate('${transitionDuration}s', props),
    transitionTimingFunction: replaceTemplate('${transitionTimingFunction}', props)
  };
}

function getEnvirTransitionEvent () {
  const prefixTransitionStyles = {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd'
  };
  const node = document.createElement('div');

  for (const key in prefixTransitionStyles) {
    if (node.style[key] !== undefined) {
      return prefixTransitionStyles[key];
    }
  }
}

function formatData (arr) {
  Array.isArray(arr) || (arr = arr.split(','));

}

class Slide extends Component {
  constructor() {
    super();
    this.isAnimating = false;
  }

  formatChildData() {
    let { children } = this.props;

    if (!children) {
      return;
    }

    Array.isArray(children) || (children = children.split(','));
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    let { className, children } = this.props;

    if (children) {
      children = children.map((spreadItem, index) => {

      });
    }

    return (
      <div className={ className } style={ getTransitionStyles(this.props) }>
        { children }
      </div>
    );
  }
}

Slide.propTypes = {
  /**
   * class name
  */
  className: PropTypes.string,

  /**
   * 初始展开项的索引
  */
  spreadItemIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

  /**
   * 展开项的子级dom选择器
  */
  spreadItemChildSelector: PropTypes.string,

  /**
   * 动画持续的秒数
  */
  transitionDuration: PropTypes.number,

  /**
   * 动画运行轨迹类型
  */
  transitionTimingFunction: PropTypes.string
};

Slide.defaultProps = {
  className: 'slide-animate',
  spreadItemCount: 1,
  transitionDuration: 0.5,
  transitionTimingFunction: 'linear'
};

export default Slide;

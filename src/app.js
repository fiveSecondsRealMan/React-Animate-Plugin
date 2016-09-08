/**
  入口文件
**/

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './transition.less';
import Slide from './plugins/Slide';

// 定义action
const actionCreator = {
  updateItem(data) {
    return {
      type: 'UPDATE_ITEM',
      data
    };
  }
};

// 定义reducer
const reducer = (state = [], action) => {
  if (action.type === 'UPDATE_ITEM')  {
    return action.data;
  }

  return state;
}

// 定义store
const store = createStore(reducer, [
  {
    id: 0,
    name: '玩掘机'
  }, {
    id: 1,
    name: '哈哈'
  }, {
    id: 2,
    name: 'xxoo'
  }
]);

const action = bindActionCreators(actionCreator, store.dispatch);

class Transition extends Component {
  handleRemove(index) {
    const { updateItem, data } = this.props;

    updateItem([...data.slice(0, index), Object.assign({}, data[index]), ...data.slice(index + 1)]);
  }

  componentWillMount() {
    console.log('willMount');
  }

  componentDidMount() {
    console.log('didMount');
  }

  /*
   redux最大区别就是react 组件的数据一旦有了变化，react组件就是重渲
   所以在redux支持的react中，组件生命周期只有创建和删除mount unMount
  */

  render() {
    const { data } = this.props;
    /*
      简化了大量的动作操作的setState代码
    */
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="xx"
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 300 }>
          {
            data.map((item, index) => {
              return (
                <div
                  key={ item.id }
                  onClick={ this.handleRemove.bind(this, index) }>
                  { item.name }
                </div>
              );
            })
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


function render () {
  ReactDOM.render(
    <Slide className="aa">
      <div className="spread">
        <div className="header">AAAAAAAAAAAAA</div>
        <div className="main">
          <span>a</span>
        </div>
      </div>
      <div className="spread">
        <div className="header">BBBBBBBBBBBB</div>
        <div className="main">
          <span>b</span>
        </div>
      </div>
      <div className="spread">
        <div className="header">CCCCCCCCCCCC</div>
        <div className="main">
          <span>c</span>
        </div>
      </div>
    </Slide>,
    document.getElementById('app')
  )
}

render();


/*function render () {
  ReactDOM.render(
    <Transition
      data={ store.getState() }
      updateItem={ action.updateItem }>
    </Transition>,
    document.getElementById('app')
  );
}

render();

store.subscribe(render);*/

/*class Transition extends Component {
  updateDataBy1(item) {
    const { updateItem, data } = this.props;
    const updatedData = data.reduce((result, entry) => {
      return entry.id === item.id
        ? [ ...result, Object.assign({}, item, { isRemoving: true }) ]
        : [ ...result, entry ];
    }, []);

    updateItem(updatedData);
  }

  updateDataBy2(item) {
    const { updateItem, data } = this.props;
    const updatedData = data.reduce((result, entry) => {
      return entry.id === item.id
        ? result
        : [ ...result, entry ];
    }, []);

    updateItem(updatedData);
  }

  handleClick(item) {
    const { updateItem, data } = this.props;

    this.updateDataBy1(item);

    setTimeout(() => {
      this.updateDataBy2(item);
    }, 1500);
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {
          data.map((item, index) => {
            return (
              <div
                className={ item.isRemoving ? 'xx-enter' : ''  }
                key={ index }
                onClick={ this.handleClick.bind(this, item) }>
                { item.name }
              </div>
            );
          })
        }
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <Transition
      data={ store.getState() }
      updateItem={ action.updateItem }>
    </Transition>,
    document.getElementById('app')
  );
};*/

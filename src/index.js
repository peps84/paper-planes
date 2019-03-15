import _ from 'lodash';
import paper from 'paper';
import './style.css';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());

  console.log(paper);
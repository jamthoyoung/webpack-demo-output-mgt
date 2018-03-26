import _ from 'lodash';
import './style.css';
import smile from './smile.png';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // add image to our existin div
  var myIcon = new Image();
  myIcon.src = smile;
  element.appendChild(myIcon);
  
  return element;
}

document.body.appendChild(component());

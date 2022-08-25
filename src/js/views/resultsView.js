import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import View from './view';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'The recipes you searched for does not exist! Please try again ; ';
  _message = '';

  _generateMarkup() {
    return this._data.map(results => previewView.render(results, false)).join();
  }
}

export default new ResultsView();

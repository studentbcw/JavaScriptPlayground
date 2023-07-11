// view tracker
// HOW to use
// *projectName* would be a unique project name, this is used to save to local storage data about this project
// *views* is an array of how many activities there are
// *currentView* indicates the starting page
var _projectName = 'introToJS' // must be unique between all projects

var _views = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var _currentView = 1

// buttons
var _nextButton = document.getElementById('next-button')
var _previousButton = document.getElementById('previous-button')
var _scriptAnchor = document.getElementById('script-anchor')
var _routerView = document.getElementById('router-view')

_loadState()
_loadView(_currentView) //loads page one
//runs when next or previous are clicked
// loads last page from local storage, loads that view and associated script
// takes in how many pages to advance
async function _changeView(move) {
  _currentView += move
  if (_currentView > _views[_views.length - 1] || _currentView < 1) {
    _currentView += (move * -1)
  }
  _saveState('currentView', _currentView)
  window.location.reload()
}

async function _loadView(view) {
  _updateButtons()
  _drawPageDots()

  // keeps the scripts from double loading
  if (window.loading == true) { return }
  window.loading = true


  // gets html from template file
  let page = await fetch(`./views/template-${view}.html`);
  let content = await page.text();

  _routerView.innerHTML = content


  // loads script to page
  // console.log(`%c 💾 loaded step-${_currentView}.js`, 'color: #bada55')
  const script = document.createElement('script')
  script.classList.add('script')
  script.src = `step-${view}.js`
  _scriptAnchor.appendChild(script)
  // save current page location
  setTimeout(() => {
    window.loading == false
  }, 500)
}


// removes old scripts to they re-run when page is loaded
function _clearScripts() {
  let scripts = document.querySelectorAll('.script')
  scripts.forEach(s => _scriptAnchor.removeChild(s))
}

// enables and disables buttons
function _updateButtons() {
  let prev = _views.includes(_currentView - 1)
  let next = _views.includes(_currentView + 1)
  _previousButton.disabled = !prev
  _nextButton.disabled = !next
}

// draws the dots in the top of the screen
function _drawPageDots() {
  let dots = ''
  _views.forEach(v => {
    if (v == _currentView) {
      dots += '<i class="mdi mdi-circle"></i>'
    } else {
      dots += '<i class="mdi mdi-circle-outline"></i>'
    }
  })
  document.getElementById('page-dots').innerHTML = dots
}

function _loadState() {
  let raw = localStorage.getItem(_projectName)
  if (raw) {
    let data = JSON.parse(raw)
    // pull data out of storage
    _currentView = data.currentView
    return data
  }
  return {}
}

function _saveState(key, value) {
  let data = _loadState()
  data[key] = value
  localStorage.setItem(_projectName, JSON.stringify(data))
}


// functions accessible from all code goes here
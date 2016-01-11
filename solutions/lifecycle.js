var React = require('react');
var ReactDOM = require('react-dom');

var Lifecycle = React.createClass({
  getInitialState: function() {
    alert('getInitialState!');
    return {};
  },
  componentDidMount: function() {
    alert('componentDidMount!');
  }, 
  componentWillMount: function() {
    alert('componentWillMount!');
  },
  render: function() {
    alert('render!');
    return (
      <div>
        Lifecycle component
      </div>
    )
  }
});

ReactDOM.render(
  <Lifecycle />,
  document.getElementById('lifecycle')
);
var React = require('react');
var ReactDOM = require('react-dom');

/* create your ClickCounter React Component here */
var ClickCounter = React.createClass({
  getInitialState: function () {
    return { clicks: 0 };
  },
  handleBtnClick: function (e) {
    e.preventDefault();
    this.setState({ clicks: this.state.clicks + 1 });
  },
  render: function () {
    return (
      <div>
        <button className="btn btn-primary" onClick={ this.handleBtnClick }>
          { this.props.text } <span className="badge">{ this.state.clicks }</span>
        </button>

        <ClickCounterCaption number={ this.state.clicks } />
      </div>
    );
  }
});

var ClickCounterCaption = React.createClass({
  render: function () {
    return (
      <div>
        Number of Clicks: { this.props.number }
      </div>
    );
  }
});

/* render your ClickCounter React Component here */
ReactDOM.render(
  <ClickCounter text="Clicks" />,
  document.getElementById('click-counter')
);

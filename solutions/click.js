/* define styles for your ClickCounter React Component here */
var styles = {
  text: {
    fontSize: '32px', 
    fontWeight: '600'
  }, 
  clickCount: {
    color: 'mediumaquamarine',
    fontSize: '24px'
  }
};

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
        <button className="btn btn-primary" style={ styles.text } onClick={ this.handleBtnClick }>
          { this.props.text } <span className="badge" style={ styles.clickCount } >{ this.state.clicks }</span>
        </button>

        <ClickedNums number={ this.state.clicks } />
      </div>
    );
  }
});

var ClickedNums = React.createClass({
  render: function () {
    var array = [];

    for (var i = 1; i <= this.props.number; i++) {
      array.push(i);
    }

    return (
      <div className="container">
        { array.toString() }
      </div>
    );
  }
});

/* render your ClickCounter React Component here */
React.render(
  <ClickCounter text="Clicks" />,
  document.getElementById('click-counter')
);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./hello.js');
require('./click.js');
require('./tweet.js');

},{"./click.js":2,"./hello.js":3,"./tweet.js":4}],2:[function(require,module,exports){
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
var ClickCounter = React.createClass({displayName: "ClickCounter",
  getInitialState: function () {
    return { clicks: 0 };
  },
  handleBtnClick: function (e) {
    e.preventDefault();
    this.setState({ clicks: this.state.clicks + 1 });
  },
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("button", {className: "btn btn-primary", style:  styles.text, onClick:  this.handleBtnClick}, 
           this.props.text, " ", React.createElement("span", {className: "badge", style:  styles.clickCount},  this.state.clicks)
        ), 

        React.createElement(ClickCounterCaption, {number:  this.state.clicks})
      )
    );
  }
});

var ClickCounterCaption = React.createClass({displayName: "ClickCounterCaption",
  render: function () {
    return (
      React.createElement("div", null, 
        "Number of Clicks: ",  this.props.number
      )
    );
  }
});

/* render your ClickCounter React Component here */
React.render(
  React.createElement(ClickCounter, {text: "Clicks"}),
  document.getElementById('click-counter')
);

},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
var data = [
  {
      "author": "Michael Scott",
      "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
  },
  {
      "author": "Jeff Bezos",
      "text": "In the end, we are our choices."
  }
];

var Twitter = React.createClass({displayName: "Twitter",
  // loadTweetsFromServer: function () {
  //   // GET updated set of tweets from database
  //   $.get(this.props.url, function (data) {
  //       // Set state in step 3 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // handleTweetSubmit: function (tweet) {
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, function (data) {
  //       // Set state in step 6 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // componentDidMount: function () {
  //   // Set this.state.data to most recent set of tweets from database
  //   this.loadTweetsFromServer();
  // },
  render: function () {
    return (
      React.createElement("div", {className: "twitter"}, 
        React.createElement("h1", null, "Tweets")
        /* Render TweetForm component here */
        /* Render TweetList component here */
      )
    );
  }
});

var TweetForm = React.createClass({displayName: "TweetForm",
  render: function () {
    return (
      React.createElement("form", {className: "tweetForm"}
        /* Render some text here */
      )
    );
  }
});

var TweetList = React.createClass({displayName: "TweetList",
  render: function () {
    return (
      React.createElement("div", {className: "tweetList"}
        /* Render some text here */
      )
    );
  }
});

var Tweet = React.createClass({displayName: "Tweet",
  render: function () {
    return (
      React.createElement("div", {className: "tweet"}
        /* Render some text here */
      )
    );
  }
});

React.render(
  React.createElement(Twitter, null),
  document.getElementById('tweets')
);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXN0aGVyd2Vvbi9EZXNrdG9wL3JlYWN0LXdvcmtzaG9wL3NyYy9hcHAuanMiLCIvVXNlcnMvZXN0aGVyd2Vvbi9EZXNrdG9wL3JlYWN0LXdvcmtzaG9wL3NyYy9jbGljay5qcyIsInNyYy9oZWxsby5qcyIsIi9Vc2Vycy9lc3RoZXJ3ZW9uL0Rlc2t0b3AvcmVhY3Qtd29ya3Nob3Avc3JjL3R3ZWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7OztBQ0Z0Qiw4REFBOEQ7QUFDOUQsSUFBSSxNQUFNLEdBQUc7RUFDWCxJQUFJLEVBQUU7SUFDSixRQUFRLEVBQUUsTUFBTTtJQUNoQixVQUFVLEVBQUUsS0FBSztHQUNsQjtFQUNELFVBQVUsRUFBRTtJQUNWLEtBQUssRUFBRSxrQkFBa0I7SUFDekIsUUFBUSxFQUFFLE1BQU07R0FDakI7QUFDSCxDQUFDLENBQUM7O0FBRUYsbURBQW1EO0FBQ25ELElBQUksa0NBQWtDLDRCQUFBO0VBQ3BDLGVBQWUsRUFBRSxZQUFZO0lBQzNCLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7R0FDdEI7RUFDRCxjQUFjLEVBQUUsVUFBVSxDQUFDLEVBQUU7SUFDM0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztHQUNsRDtFQUNELE1BQU0sRUFBRSxZQUFZO0lBQ2xCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtRQUNILG9CQUFBLFFB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SyxDQUFDLE1BQU07RUFDVixvQkFBQyxPQUFPLEVBQUEsSUFBQSxDQUFHLENBQUE7RUFDWCxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztDQUNsQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUoJy4vaGVsbG8uanMnKTtcbnJlcXVpcmUoJy4vY2xpY2suanMnKTtcbnJlcXVpcmUoJy4vdHdlZXQuanMnKTtcbiIsIi8qIGRlZmluZSBzdHlsZXMgZm9yIHlvdXIgQ2xpY2tDb3VudGVyIFJlYWN0IENvbXBvbmVudCBoZXJlICovXG52YXIgc3R5bGVzID0ge1xuICB0ZXh0OiB7XG4gICAgZm9udFNpemU6ICczMnB4JywgXG4gICAgZm9udFdlaWdodDogJzYwMCdcbiAgfSwgXG4gIGNsaWNrQ291bnQ6IHtcbiAgICBjb2xvcjogJ21lZGl1bWFxdWFtYXJpbmUnLFxuICAgIGZvbnRTaXplOiAnMjRweCdcbiAgfVxufTtcblxuLyogY3JlYXRlIHlvdXIgQ2xpY2tDb3VudGVyIFJlYWN0IENvbXBvbmVudCBoZXJlICovXG52YXIgQ2xpY2tDb3VudGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4geyBjbGlja3M6IDAgfTtcbiAgfSxcbiAgaGFuZGxlQnRuQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGlja3M6IHRoaXMuc3RhdGUuY2xpY2tzICsgMSB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9eyBzdHlsZXMudGV4dCB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUJ0bkNsaWNrIH0+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLnRleHQgfSA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiIHN0eWxlPXsgc3R5bGVzLmNsaWNrQ291bnQgfSA+eyB0aGlzLnN0YXRlLmNsaWNrcyB9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8Q2xpY2tDb3VudGVyQ2FwdGlvbiBudW1iZXI9eyB0aGlzLnN0YXRlLmNsaWNrcyB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIENsaWNrQ291bnRlckNhcHRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBOdW1iZXIgb2YgQ2xpY2tzOiB7IHRoaXMucHJvcHMubnVtYmVyIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG4vKiByZW5kZXIgeW91ciBDbGlja0NvdW50ZXIgUmVhY3QgQ29tcG9uZW50IGhlcmUgKi9cblJlYWN0LnJlbmRlcihcbiAgPENsaWNrQ291bnRlciB0ZXh0PVwiQ2xpY2tzXCIgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGljay1jb3VudGVyJylcbik7XG4iLCJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUwxVnpaWEp6TDJWemRHaGxjbmRsYjI0dlJHVnphM1J2Y0M5eVpXRmpkQzEzYjNKcmMyaHZjQzl6Y21NdmFHVnNiRzh1YW5NaUxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OWxjM1JvWlhKM1pXOXVMMFJsYzJ0MGIzQXZjbVZoWTNRdGQyOXlhM05vYjNBdmMzSmpMMmhsYkd4dkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlpWFgwPSIsInZhciBkYXRhID0gW1xuICB7XG4gICAgICBcImF1dGhvclwiOiBcIk1pY2hhZWwgU2NvdHRcIixcbiAgICAgIFwidGV4dFwiOiBcIldvdWxkIEkgcmF0aGVyIGJlIGZlYXJlZCBvciBsb3ZlZD8gRWFzeSwgYm90aC4gSSB3YW50IHBlb3BsZSB0byBiZSBhZnJhaWQgb2YgaG93IG11Y2ggdGhleSBsb3ZlIG1lLlwiXG4gIH0sXG4gIHtcbiAgICAgIFwiYXV0aG9yXCI6IFwiSmVmZiBCZXpvc1wiLFxuICAgICAgXCJ0ZXh0XCI6IFwiSW4gdGhlIGVuZCwgd2UgYXJlIG91ciBjaG9pY2VzLlwiXG4gIH1cbl07XG5cbnZhciBUd2l0dGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAvLyBsb2FkVHdlZXRzRnJvbVNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAvLyAgIC8vIEdFVCB1cGRhdGVkIHNldCBvZiB0d2VldHMgZnJvbSBkYXRhYmFzZVxuICAvLyAgICQuZ2V0KHRoaXMucHJvcHMudXJsLCBmdW5jdGlvbiAoZGF0YSkge1xuICAvLyAgICAgICAvLyBTZXQgc3RhdGUgaW4gc3RlcCAzIG9mIHRoZSBleGVyY2lzZSFcbiAgLy8gICAgIH0uYmluZCh0aGlzKVxuICAvLyAgICk7XG4gIC8vIH0sXG4gIC8vIGhhbmRsZVR3ZWV0U3VibWl0OiBmdW5jdGlvbiAodHdlZXQpIHtcbiAgLy8gICAvLyBQT1NUIHRvIGFkZCB0d2VldCB0byBkYXRhYmFzZVxuICAvLyAgICQucG9zdCh0aGlzLnByb3BzLnVybCwgdHdlZXQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gIC8vICAgICAgIC8vIFNldCBzdGF0ZSBpbiBzdGVwIDYgb2YgdGhlIGV4ZXJjaXNlIVxuICAvLyAgICAgfS5iaW5kKHRoaXMpXG4gIC8vICAgKTtcbiAgLy8gfSxcbiAgLy8gY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgLy8gICAvLyBTZXQgdGhpcy5zdGF0ZS5kYXRhIHRvIG1vc3QgcmVjZW50IHNldCBvZiB0d2VldHMgZnJvbSBkYXRhYmFzZVxuICAvLyAgIHRoaXMubG9hZFR3ZWV0c0Zyb21TZXJ2ZXIoKTtcbiAgLy8gfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICA8aDE+VHdlZXRzPC9oMT5cbiAgICAgICAgey8qIFJlbmRlciBUd2VldEZvcm0gY29tcG9uZW50IGhlcmUgKi99XG4gICAgICAgIHsvKiBSZW5kZXIgVHdlZXRMaXN0IGNvbXBvbmVudCBoZXJlICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBUd2VldEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ0d2VldEZvcm1cIj5cbiAgICAgICAgey8qIFJlbmRlciBzb21lIHRleHQgaGVyZSAqL31cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59KTtcblxudmFyIFR3ZWV0TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdlZXRMaXN0XCI+XG4gICAgICAgIHsvKiBSZW5kZXIgc29tZSB0ZXh0IGhlcmUgKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIFR3ZWV0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VldFwiPlxuICAgICAgICB7LyogUmVuZGVyIHNvbWUgdGV4dCBoZXJlICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblJlYWN0LnJlbmRlcihcbiAgPFR3aXR0ZXIgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d2VldHMnKVxuKTtcbiJdfQ==

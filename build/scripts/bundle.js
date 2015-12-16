(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./hello.js');
require('./click.js');
require('./tweet.js');

},{"./click.js":2,"./hello.js":3,"./tweet.js":4}],2:[function(require,module,exports){

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXN0aGVyd2Vvbi9EZXNrdG9wL3JlYWN0LXdvcmtzaG9wL3NyYy9hcHAuanMiLCJzcmMvY2xpY2suanMiLCJzcmMvaGVsbG8uanMiLCIvVXNlcnMvZXN0aGVyd2Vvbi9EZXNrdG9wL3JlYWN0LXdvcmtzaG9wL3NyYy90d2VldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7QUNGdEI7QUFDQTtBQ0RBO0FBQ0E7QUNEQSxJQUFJLElBQUksR0FBRztFQUNUO01BQ0ksUUFBUSxFQUFFLGVBQWU7TUFDekIsTUFBTSxFQUFFLHFHQUFxRztHQUNoSDtFQUNEO01BQ0ksUUFBUSxFQUFFLFlBQVk7TUFDdEIsTUFBTSxFQUFFLGlDQUFpQztHQUM1QztBQUNILENBQUMsQ0FBQzs7QUFFRixJQUFJLDZCQUE2Qix1QkFBQTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFLE1BQU0sRUFBRSxZQUFZO0lBQ2xCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxTQUFVLENBQUEsRUFBQTtRQUN2QixvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLFFBQVcsQ0FBQTtRQUNkLHFDQUFzQztRQUN0QyxxQ0FBc0M7TUFDbkMsQ0FBQTtNQUNOO0dBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxJQUFJLCtCQUErQix5QkFBQTtFQUNqQyxNQUFNLEVBQUUsWUFBWTtJQUNsQjtNQUNFLG9CQUFBLE1BQUssRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsV0FBWSxDQUFBO1FBQ3pCLDJCQUE0QjtNQUN4QixDQUFBO01BQ1A7R0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILElBQUksK0JBQStCLHlCQUFBO0VBQ2pDLE1BQU0sRUFBRSxZQUFZO0lBQ2xCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxXQUFZLENBQUE7UUFDeEIsMkJBQTRCO01BQ3pCLENBQUE7TUFDTjtHQUNIO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsSUFBSSwyQkFBMkIscUJBQUE7RUFDN0IsTUFBTSxFQUFFLFlBQVk7SUFDbEI7TUFDRSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLE9BQVEsQ0FBQTtRQUNwQiwyQkFBNEI7TUFDekIsQ0FBQTtNQUNOO0dBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxLQUFLLENBQUMsTUFBTTtFQUNWLG9CQUFDLE9BQU8sRUFBQSxJQUFBLENBQUcsQ0FBQTtFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO0NBQ2xDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZSgnLi9oZWxsby5qcycpO1xucmVxdWlyZSgnLi9jbGljay5qcycpO1xucmVxdWlyZSgnLi90d2VldC5qcycpO1xuIiwiXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lMMVZ6WlhKekwyVnpkR2hsY25kbGIyNHZSR1Z6YTNSdmNDOXlaV0ZqZEMxM2IzSnJjMmh2Y0M5emNtTXZZMnhwWTJzdWFuTWlMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTlsYzNSb1pYSjNaVzl1TDBSbGMydDBiM0F2Y21WaFkzUXRkMjl5YTNOb2IzQXZjM0pqTDJOc2FXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJaVhYMD0iLCJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUwxVnpaWEp6TDJWemRHaGxjbmRsYjI0dlJHVnphM1J2Y0M5eVpXRmpkQzEzYjNKcmMyaHZjQzl6Y21NdmFHVnNiRzh1YW5NaUxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OWxjM1JvWlhKM1pXOXVMMFJsYzJ0MGIzQXZjbVZoWTNRdGQyOXlhM05vYjNBdmMzSmpMMmhsYkd4dkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlpWFgwPSIsInZhciBkYXRhID0gW1xuICB7XG4gICAgICBcImF1dGhvclwiOiBcIk1pY2hhZWwgU2NvdHRcIixcbiAgICAgIFwidGV4dFwiOiBcIldvdWxkIEkgcmF0aGVyIGJlIGZlYXJlZCBvciBsb3ZlZD8gRWFzeSwgYm90aC4gSSB3YW50IHBlb3BsZSB0byBiZSBhZnJhaWQgb2YgaG93IG11Y2ggdGhleSBsb3ZlIG1lLlwiXG4gIH0sXG4gIHtcbiAgICAgIFwiYXV0aG9yXCI6IFwiSmVmZiBCZXpvc1wiLFxuICAgICAgXCJ0ZXh0XCI6IFwiSW4gdGhlIGVuZCwgd2UgYXJlIG91ciBjaG9pY2VzLlwiXG4gIH1cbl07XG5cbnZhciBUd2l0dGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAvLyBsb2FkVHdlZXRzRnJvbVNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAvLyAgIC8vIEdFVCB1cGRhdGVkIHNldCBvZiB0d2VldHMgZnJvbSBkYXRhYmFzZVxuICAvLyAgICQuZ2V0KHRoaXMucHJvcHMudXJsLCBmdW5jdGlvbiAoZGF0YSkge1xuICAvLyAgICAgICAvLyBTZXQgc3RhdGUgaW4gc3RlcCAzIG9mIHRoZSBleGVyY2lzZSFcbiAgLy8gICAgIH0uYmluZCh0aGlzKVxuICAvLyAgICk7XG4gIC8vIH0sXG4gIC8vIGhhbmRsZVR3ZWV0U3VibWl0OiBmdW5jdGlvbiAodHdlZXQpIHtcbiAgLy8gICAvLyBQT1NUIHRvIGFkZCB0d2VldCB0byBkYXRhYmFzZVxuICAvLyAgICQucG9zdCh0aGlzLnByb3BzLnVybCwgdHdlZXQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gIC8vICAgICAgIC8vIFNldCBzdGF0ZSBpbiBzdGVwIDYgb2YgdGhlIGV4ZXJjaXNlIVxuICAvLyAgICAgfS5iaW5kKHRoaXMpXG4gIC8vICAgKTtcbiAgLy8gfSxcbiAgLy8gY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgLy8gICAvLyBTZXQgdGhpcy5zdGF0ZS5kYXRhIHRvIG1vc3QgcmVjZW50IHNldCBvZiB0d2VldHMgZnJvbSBkYXRhYmFzZVxuICAvLyAgIHRoaXMubG9hZFR3ZWV0c0Zyb21TZXJ2ZXIoKTtcbiAgLy8gfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICA8aDE+VHdlZXRzPC9oMT5cbiAgICAgICAgey8qIFJlbmRlciBUd2VldEZvcm0gY29tcG9uZW50IGhlcmUgKi99XG4gICAgICAgIHsvKiBSZW5kZXIgVHdlZXRMaXN0IGNvbXBvbmVudCBoZXJlICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBUd2VldEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ0d2VldEZvcm1cIj5cbiAgICAgICAgey8qIFJlbmRlciBzb21lIHRleHQgaGVyZSAqL31cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59KTtcblxudmFyIFR3ZWV0TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdlZXRMaXN0XCI+XG4gICAgICAgIHsvKiBSZW5kZXIgc29tZSB0ZXh0IGhlcmUgKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIFR3ZWV0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VldFwiPlxuICAgICAgICB7LyogUmVuZGVyIHNvbWUgdGV4dCBoZXJlICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblJlYWN0LnJlbmRlcihcbiAgPFR3aXR0ZXIgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d2VldHMnKVxuKTtcbiJdfQ==

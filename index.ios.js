/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var murmur = React.createClass({
  getInitialState: function(){
    return {
      messages : ['first', 'second', 'third' ]
    };
  },
  render: function() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.ios.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Press Cmd+R to reload,{'\n'}
    //       Cmd+D or shake for dev menu
    //     </Text>
    //   </View>
    // );
    return (
      <View>
        <ViewAllMessages 
        messages = { this.state.messages }/>
      </View>
    );
  }
});

var ViewAllMessages = React.createClass({
  render: function(){
    var messagesObject = this.props.messages;
    // var messageRows = [];
    // for( var key in messagesObject ){
    //   var message = messagesObject[key];
    //   messageRows.push(
    //     <Message 
    //     message = { message } />
    //   );
    // }

    return (
      <View>
        {
          messagesObject.map(function(message){
            return <Text>{message}</Text>;
          })
        }
      </View>
    );
  }
});

// var Message = React.createClass({
//   render: function(){
//     <Text>
//       { this.props.message }
//     </Text>
//   }
// });


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('murmur', () => murmur);

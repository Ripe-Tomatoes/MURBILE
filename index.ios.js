/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var GLOBAL_MESSAGES = {
  messOne : { message: 'Test message' , comment : "this is first"},
  messTwo : { message: 'test message 2', comment : "no comment" },
  messThree : { message: 'number 3', comment : "hello world"}
};
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} = React;

var murmur = React.createClass({
  getInitialState: function(){
    return {
      messages : GLOBAL_MESSAGES,
      text : ''
    };
  },
  componentWillMount: function(){
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
        <Text style={ styles.welcome }>MURBILE</Text>
        <View>
          <ViewAllMessages 
          messages = { this.state.messages }/>
        </View>
      </View>
    );
  }
});

var ViewAllMessages = React.createClass({
  render: function(){
    var messagesObject = this.props.messages;
    var messageRows = [];
    for( var key in messagesObject ){
      var message = messagesObject[key];
      messageRows.push(message);
    }

    return (
      <View>
        {
          messageRows.map(function(message){
            return <Message message={message}/>;
          })
        }
      </View>
    );
  }
});

var Message = React.createClass({
  render: function(){
    return (
      <View>
        <Text>
          { this.props.message.message }
        </Text>
        <Text>
          { this.props.message.comment }
        </Text>
      </View>
    );
  }
});


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


// import React, { useState } from "react";
// import { View, Text, TextInput,Button, StyleSheet, Switch } from "react-native";

// export default function HelloWorldApp() {
//   const [value, onChangeText] = 	React.useState('Enter anything');  
//   const [isDarkMode, setDarkMode] = React.useState(false);


//   // Function to toggle the background color between white and dark
//   const toggleBackgroundColorChange = () => {
//     setDarkMode((prevIsDarkMode) => !prevIsDarkMode);
//   };

//   // Task 1 and Task 2
//   return (  
//   <View style={[styles.container,{ backgroundColor: isDarkMode ? "black" : "white" }]}>
//     <TextInput style={styles.edit}
// 	    onChangeText={text => onChangeText(text)}
//       clearTextOnFocus={true}
//       value={value}
//     />
//     <Text style={styles.edit}>{value}</Text>
//     <Button style={styles.button}
//        onPress={() => onChangeText('')}
//  	      title="Clear" 
//        />
//        <Switch>
//        value={isDarkMode} onValueChange={toggleBackgroundColorChange}
//        </Switch>
//    </View> 
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//        flex: 1,
//        justifyContent: 'center',
//        alignItems: 'center'
//       },
//   edit: {
    
//        fontSize : 30,
//        color: "black",
//   },
//   button: {
//     marginTop: 20,
//   }
// });



import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Switch } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function HelloWorldApp() {
  // use 'useState' for state management
  const [value, onChangeText] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);

  // Function to toggle the background color between white and dark
  const toggleBackgroundColorChange = () => {
    setDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  // Task 1 and Task 2
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "black" : "white" }]}>
      <TextInput
        style={[styles.edit,{color: isDarkMode ? "white" : "black"}]}
        onChangeText={text => onChangeText(text)}
        placeholder="Enter Your Name"
        placeholderTextColor={isDarkMode ? "white" : "black"}
        clearTextOnFocus={true}
        value={value}
      />
      <Text style={[styles.edit,{color: isDarkMode ? "white" : "black"}]}>{value}</Text>
      <Button
        style={styles.button}
        onPress={() => onChangeText('')}
        title="Clear"
      />
      <Text style={{color: isDarkMode ? "white" : "black",marginBottom: 20,marginTop:20}}>Please press below switch button to enable and diable dark mode</Text>
      
      {/* Task 3 add Switch to navigate between light and dark mode */}
      <Switch 
        value={isDarkMode}
        onValueChange={toggleBackgroundColorChange}
      />
    </View>
  );
}

// css design part 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  edit: {
    fontSize: 30,
   
  },
  button: {
    marginTop: 20,
  }
});

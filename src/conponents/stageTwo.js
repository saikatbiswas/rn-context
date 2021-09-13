import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { MainText } from "../utils/tools";

import { MyContext } from "../context";

const StageTwo = ()=>{
  const context = useContext(MyContext);
  return(
    <>
      <MainText title="Who pays the bill ?" />
      <Text>Looser is</Text>
      <Text style={styles.loserTitle}>{context.state.result}</Text>
      <Button
          buttonStyle={styles.buttonTry}
          title="Try again"
          onPress={()=> context.getNewLooser()}
      />
        <Button
          buttonStyle={styles.button}
          title="Start over"
          onPress={()=> context.resetGame()}
      />
    </>
  )
}

const styles = StyleSheet.create({
  loserTitle:{
    fontSize:30,
    marginTop:30
  },
  buttonTry: {
    backgroundColor:'#41b6e6',
    marginTop:20
  },
  button: {
    backgroundColor:'#DB3EB1',
    marginTop:20
  },
});

export default StageTwo;

import React, {useContext} from "react";
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Input, Button, ListItem, Text } from "react-native-elements";

import { MyContext } from "../context";
import { MainText } from "../utils/tools";

const StageOne = ()=>{
  const context = useContext(MyContext);
  // console.log(context.state.players)
  const renderPlayers = () =>(
    context.state.players.map((item, i)=>(
      <ListItem
        key={i}
        bottomDivider
        onLongPress={()=>context.removePlayer(i)}
      >
        <ListItem.Chevron />
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>

      </ListItem>
    ))
  )


  return(
    <>
      <Formik
        initialValues={{player:''}}
        validationSchema={Yup.object({
          player:Yup.string()
          .min(3, 'Must be more than 3 characters')
          .max(15, 'Must be more than 15 characters')
          .required('Name is required')
        })}
        onSubmit={(vlaue, { resetForm })=>{
          Keyboard.dismiss();
          context.addPlayer(vlaue.player);
          // console.log(vlaue.player)
          resetForm();
        }}
      >
        { ({ handleChange,handleBlur,handleSubmit,values,touched,errors})=>(
          <>
            <MainText title="Who pays the bill ?" />
              <Input
                  placeholder="Add name here"
                  leftIcon={{type:'antdesign',name:'adduser'}}
                  inputContainerStyle={{
                      marginHorizontal:30,
                      marginTop:50
                  }}
                  renderErrorMessage={errors.player && touched.player}
                  errorMessage={errors.player}
                  errorStyle={{
                      marginHorizontal:30
                  }}
                  
                  onChangeText={handleChange('player')}
                  onBlur={handleBlur('player')}
                  value={values.player}
              />
              <Button
                  buttonStyle={styles.button}
                  title="Add player"
                  onPress={handleSubmit}
              />
          </>
      )}
      </Formik>

      <View style={styles.playerWrapper}>
          { context.state.players && context.state.players.length > 0 ?
            <>
              <Text>List of players</Text>

              {renderPlayers()}

              <Button
                  buttonStyle={styles.button}
                  title="Get the looser"
                  onPress={ ()=> context.next() }
              />
            </>
          :null}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  
  button: {
    backgroundColor:'#DB3EB1',
    marginTop:20
   },
   playerWrapper:{
     padding: 20,
     width:'100%'
   }
});

export default StageOne;

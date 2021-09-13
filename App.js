import React, {Component} from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { MyContext } from "./src/context";
import StageOne from "./src/conponents/stageOne";
import StageTwo from "./src/conponents/stageTwo";


class App extends Component {
  static contextType = MyContext;

  render(){
    // alert(`${this.context.state.stage}`)
    return(
      
      <ScrollView keyboardShouldPersistTaps="handled" style={{height:'100%', backgroundColor:'#fff'}}>
        <View style={styles.container}>
          { this.context.state.stage === 1 ?
            <StageOne />
          :
            <StageTwo />
          }
        </View>
      </ScrollView>
    )
  }
}

// const App = ()=>{
//   // const [product, setProduct] = useState([]);

//   // useEffect(()=>{
//   //   fetch("http://192.168.43.252:3001/api/products/all")
//   //     .then(res => res.json())
//   //     .then((result) => {
//   //         // console.log(result)
//   //         setProduct(result);
          
//   //       },
//   //       // Note: it's important to handle errors here
//   //       // instead of a catch() block so that we don't swallow
//   //       // exceptions from actual bugs in components.
//   //       (error) => {
//   //         console.log(error)
//   //       }
//   //     )
//   // });

//   return(
//     <View>
//       <Text>Hello</Text>
//       {/* {product?
//         product.map((item)=>(
//           <View key={item._id}>
//             <Text>{item.name}</Text>
//           </View>
//         ))
//       :null} */}
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios'? 80 : 30,
  },
});

export default App;

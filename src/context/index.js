import React, { Component } from 'react';
import Toast from 'react-native-toast-message';

const MyContext = React.createContext();
const defaultState = {
    stage:1,
    players:["Saikat", "Ankita", "Rio"],
    result:''
}

class MyProvider extends Component {
    state = defaultState;

    addPlayerHandler = (name) => {
        this.setState((prevState, props)=>({
            players:[
                ...prevState.players,
                name
            ]
        }))
    }
    removePlayerHandler = (i) => {
        let newPlayersArray = this.state.players;
        newPlayersArray.splice(i,1);
        this.setState({players:newPlayersArray});
    }
    nextHanlar = () =>{
        const {players} = this.state;

        if(players.length < 2){
            Toast.show({
                type: 'error',
                position:'bottom',
                text1: 'Sorry',
                text2: 'You need to add atlist two players'
            });

        }else{
            this.setState({
                stage:2
            }, () => {
                this.generateLooser()
            })
        }
    }

    generateLooser = () => {
        const {players} = this.state;
        this.setState({
            result: players[Math.floor(Math.random()*players.length)]
        });
    }
    resetGameHandler = () => {
        this.setState(defaultState)
    }


    render(){
        return(
            <>
                <MyContext.Provider
                    value={{
                        state: this.state,
                        addPlayer: this.addPlayerHandler,
                        removePlayer: this.removePlayerHandler,
                        next: this.nextHanlar,
                        getNewLooser: this.generateLooser,
                        resetGame: this.resetGameHandler
                    }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}

export {
    MyContext,
    MyProvider
}
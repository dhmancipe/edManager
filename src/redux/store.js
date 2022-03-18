import {createStore} from 'redux'

    const initState={
        players : [{
          nombre:'coco varela',
          id:1,
          foto:'https://cdn.pixabay.com/photo/2020/11/10/15/46/man-5730206_960_720.png'
        },
        {
          nombre:'caco varela',
          id:2,
          foto:'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png'
        },
        {
          nombre:'kico varela',
          id:3,
          foto:'https://cdn.pixabay.com/photo/2016/08/18/11/00/man-1602633__340.png'
        }
      ],
        headlines : [],
        substitutes :[],

    }
    const reducer =(state=initState, action)=>{

        if(action.type ==="ADD_HEADLINE"){
          return{
            ...state,
            headlines:state.headlines.concat(action.player),
            players:state.players.filter(j=> j.id !== action.player.id)
          }
        }

        if(action.type ==="ADD_SUBSTITUTE"){
          return{
            ...state,
            substitutes:state.substitutes.concat(action.player),
            players:state.players.filter(j=> j.id !== action.player.id)
          }
        }

        if(action.type ==="TAKE_OUT_PLAYER"){
          return{
            ...state,
            headlines:state.headlines.filter(j=> j.id !== action.player.id),
            players:state.players.concat(action.player)
          }
        }

        if(action.type ==="TAKE_IN_PLAYER"){
          return{
            ...state,
            substitutes:state.substitutes.filter(j=> j.id !== action.player.id),
            players:state.players.concat(action.player)
          }
        }

        return state;


    }

export default createStore(reducer)

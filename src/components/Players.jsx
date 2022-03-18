import React from 'react';
import {connect} from 'react-redux'

const Players =({players, addHeadline, addSubstitute})=>(
    <section>
        <h2>Players</h2>
        <div className="contenedor-jugadores">
            {
              players.map(j=>(
                <article className="player" key={j.id}>
                    <img src={j.foto} alt={j.nombre}/>
                    <h3>{j.nombre}</h3>
                    <div>
                        <button onClick={()=>addHeadline(j)}>Titular</button>
                        <button onClick={()=>addSubstitute(j)}>Suplente</button>
                    </div>
                </article>

              ))
            }

        </div>
    </section>
)

const mapStateToProps=state=>({
    players:state.players
  })

  const mapDispatchToProps=dispatch=>({
        addHeadline(player){
            dispatch({
                type:"ADD_HEADLINE",
                player:player
            })
        },

        addSubstitute(player){
            dispatch({
                type:"ADD_SUBSTITUTE",
                player:player
            })
        }
    })


export default connect (mapStateToProps, mapDispatchToProps )(Players)

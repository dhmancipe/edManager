import React from 'react'
import {connect} from 'react-redux'

const Substitutes =({substitutes, takeInPlayer})=>(
    <section>
        <h2>Suplentes</h2>
        <div>
            {
                substitutes.map(j=>(
                    <article className="substitute" key={j.id}>
                        <img src={j.foto} alt={j.nombre} />
                        <button onClick={()=>takeInPlayer(j)}>X</button>
                        <p>{j.nombre}</p>
                    </article>

                ))
            }
        </div>

    </section>
)

const mapStateToProps=state=>({
    substitutes:state.substitutes
  })

  const mapDispatchToProps=dispatch=>({

    takeInPlayer(player){
        dispatch({
            type:"TAKE_IN_PLAYER",
            player:player
        })
      }

    })

export default connect(mapStateToProps,mapDispatchToProps)(Substitutes)

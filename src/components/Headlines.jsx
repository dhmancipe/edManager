import React from 'react'
import {connect} from 'react-redux'
import cancha from '../cancha.svg'

const Headlines =({headlines, takeOutPlayer})=>(
    <section>
        <h2>Titulares</h2>
        <div className='field'>
            {
                headlines.map(j=>(
                    <article className="headline" key={j.id}>
                        <img src={j.foto} alt={j.nombre} />
                        <button onClick={()=>takeOutPlayer(j)}>X</button>
                        <p>{j.nombre}</p>
                    </article>

                ))
            }
            <img src={cancha} alt="football field"/>  
        </div>

    </section>
)

const mapStateToProps=state=>({
    headlines:state.headlines
  })

  const mapDispatchToProps=dispatch=>({

    takeOutPlayer(player){
        dispatch({
            type:"TAKE_OUT_PLAYER",
            player:player
        })
    }

    })

export default connect(mapStateToProps,mapDispatchToProps)(Headlines)

import React from 'react'
import ExplorerForm from '../../components/ExplorerForm/ExplorerForm'
export default function ExplorerPage(props){
    console.log(props.match.path)
    return(
        <div>
            <ExplorerForm expPage={props.match.path}/>
        </div>
    )
}
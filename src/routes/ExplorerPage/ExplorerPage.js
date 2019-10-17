import React from 'react'
import ExplorerForm from '../../components/ExplorerForm/ExplorerForm'
export default function ExplorerPage(props){
    console.log(props.match.path)
    return(
        <div>
            <ExplorerForm path={props.match.path}/>
        </div>
    )
}
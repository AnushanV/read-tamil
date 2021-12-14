import '../styles/CharacterSelection.css'
import {Grid, Checkbox, Typography} from '@mui/material'
import * as React from 'react'

function CharacterSelection(props) {

    let numRows = props.characters.length / 12;
    let rows = []

    for(let i = 0; i < numRows; i++){
        rows.push(
            <div className="characterRow" key={i}> 
                <Grid 
                container
                justify="center"
                alignItems="center"
                direction="row"
                >
                {props.characters.slice(i*12,i*12+12).map((character) => (
                    <Grid item xs={1} key={character}>
                        {character[0]}
                    </Grid>
                ))}
                {props.characters.slice(i*12,i*12+12).map((character) => (
                    <Grid item xs={1} key={character}>
                        <Typography color="text.secondary">{character[1]}</Typography>
                    </Grid>
                ))}
                </Grid>
                <Checkbox checked={props.checked[i]} onChange={() => props.handleToggle(i)}/>
            </div>
        )
        
    }

    return (
       rows
    )
}

export default CharacterSelection

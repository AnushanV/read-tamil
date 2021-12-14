import React from 'react'
import CharacterSelection from './CharacterSelection';
import {Grid, Card, CardContent, Typography, Button} from '@mui/material';


function IntroContent(props) {
    return (
        <React.Fragment>
            <Grid>
                <Card style={{maxWidth:"95vw"}}>
                    {/*<CardHeader title="Introduction"/>*/}
                    <CardContent>
                        <Typography>
                            This website allows you to study the tamil alphabet. 
                            Select which rows of characters you would like to study below. 
                            Once you have selected the characters, press the Start button to continue.
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <CharacterSelection checked={props.checked} handleToggle={props.handleToggle} characters={props.characters}/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid>
                <Button id="button" variant="contained" onClick={props.startButtonClicked}>Start</Button>
            </Grid>
        </React.Fragment>
    )
}

export default IntroContent

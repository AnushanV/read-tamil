import React from 'react'
import CurrentCharacter from './CurrentCharacter';
import {Grid, Card, CardContent, Typography, Button, TextField} from '@mui/material';



function PracticeContent(props) {

    function createCharacterSet(a) {

        let characterSet = [];
        for(let i = 0; i < props.checked.length; i++){
            if(props.checked[i]){
                characterSet = characterSet.concat(a.slice(i*12, i*12+12));
            }
        }

        let j, x, i;
        for (i = characterSet.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = characterSet[i];
            characterSet[i] = characterSet[j];
            characterSet[j] = x;
        }

        console.log(characterSet);
        return characterSet;
    }
    

    const [characterSet, setCharacterSet] = React.useState(createCharacterSet(props.characters));
    const [currentCharacter, setCurrentCharacter] = React.useState(characterSet[0]);
    const [showTextField, setShowTextField] = React.useState(true)

    const completeMessage = "Practice Complete!"
    const handleKeyPress = (e) => {

        if(e.key === "Enter" || e.key === " "){
            e.preventDefault();
            
            console.log("userInput: ", e.target.value);
            console.log("expectedInput: ", currentCharacter[1])
            
            if(e.target.value === currentCharacter[1]){

                if(characterSet.length > 1){
                    setCurrentCharacter(characterSet[1]);
                    setCharacterSet(characterSet.slice(1))
                }
                else{
                    setShowTextField(false);
                }
            }
            e.target.value = "";
        }
    }

    return (
        <React.Fragment>
            <Grid>
                <Card style={{maxWidth:"95vw"}}>
                    {showTextField &&
                    <CardContent>
                        <Typography>
                            Enter the sound of the current letter using the English alphabet.
                            Press "Enter" or "Space" to submit your answer.
                        </Typography>
                    </CardContent>
                    }
                    <CardContent className="currentCharacter">
                        <CurrentCharacter currentCharacter={(showTextField) ? currentCharacter[0] : completeMessage}/>
                    </CardContent>
                    <CardContent className="textInput">
                        {showTextField && <TextField id="outlined-basic" label="Enter Sound" variant="outlined" onKeyPress={handleKeyPress}/>}
                    </CardContent>
                </Card>
            </Grid>
            <Grid>
                <Button id="button" variant="contained" onClick={props.exitButtonClicked}>Back</Button>
            </Grid>
        </React.Fragment>
    )
}


export default PracticeContent

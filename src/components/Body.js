import IntroContent from './IntroContent';
import {Grid} from '@mui/material';
import * as React from 'react';
import PracticeContent from './PracticeContent';


function Body() {

    const [checked, setChecked] = React.useState([false, false]);
    const [showPractice, setShowPractice] = React.useState(false);

    const handleToggle = (position) => {
        const updatedChecked = checked.map((item, index) =>
            index === position ? !item : item
        )
        setChecked(updatedChecked);
    }

    const vowels = [["அ", "a"],
                    ["ஆ", "aa"],
                    ["இ", "i"], 
                    ["ஈ", "ii"], 
                    ["உ", "u"], 
                    ["ஊ", "uu"], 
                    ["எ", "e"], 
                    ["ஏ", "ee"], 
                    ["ஐ", "ai"], 
                    ["ஒ", "o"], 
                    ["ஓ", "oo"], 
                    ["ஔ", "au"],
                    ["க", "ka"],
                    ["கா", "kaa"], 
                    ["கி", "ki"], 
                    ["கீ", "kii"],
                    ["கு", "ku"],
                    ["கூ", "kuu"],
                    ["கெ", "ke"],
                    ["கே", "kee"],
                    ["கை", "kai"],
                    ["கொ", "ko"],
                    ["கோ", "koo"],
                    ["கௌ", "kau"],
                    ]                    


    function startButtonClicked(){
        if(!checked.includes(true)){
            window.alert("Please check at least one box.");
        }
        else{
            setShowPractice(true);
        }
    }

    function exitButtonClicked(){
        setShowPractice(false);
    }

    return(
        <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
        >
            {!showPractice &&       
                <IntroContent checked={checked} handleToggle={handleToggle} startButtonClicked={startButtonClicked} characters={vowels}/>
            }
            {showPractice &&
                <PracticeContent exitButtonClicked={exitButtonClicked} characters={vowels} checked={checked}/>
            }
        </Grid>
    )
}

export default Body

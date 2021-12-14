import {Typography} from "@mui/material"

function CurrentCharacter(props) {
    return (
        <Typography variant="h2">
            {props.currentCharacter}
        </Typography>
    )
}

export default CurrentCharacter

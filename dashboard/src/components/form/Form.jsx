import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'


function Form() {
    return (
        <section className="wrapper">
            {/* <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
            > </Box>
            <div className="area">

                <TextField
                    required
                    label="required"
                    id="outlined-required"
                    defaultValue="First name"
                />

            </div> */}

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </section>

    );
}
export default Form;
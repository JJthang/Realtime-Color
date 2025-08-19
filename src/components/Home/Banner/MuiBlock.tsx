import React from "react";
import { Grid, Box } from "@mui/material";

export default function MuiBlock() {
    return (
        <Grid container spacing={2}>
            {/* Top left small bar */}
            <Grid xs={2}>
                <Box sx={{ height: 40, bgcolor: "grey.100", borderRadius: 2 }} />
            </Grid>

            {/* Top right small bar */}
            <Grid xs={2} sx={{ ml: "auto" }}>
                <Box sx={{ height: 40, bgcolor: "indigo.100", borderRadius: 2 }} />
            </Grid>

            {/* Big blue block */}
            <Grid xs={6}>
                <Box sx={{ height: 300, bgcolor: "blue.700", borderRadius: 2 }} />
            </Grid>

            {/* Right tall block */}
            <Grid xs={2} container direction="column" spacing={2}>
                <Grid>
                    <Box sx={{ height: 120, bgcolor: "indigo.100", borderRadius: 2 }} />
                </Grid>
                <Grid>
                    <Box sx={{ height: 180, bgcolor: "indigo.100", borderRadius: 2 }} />
                </Grid>
            </Grid>

            {/* Left vertical block */}
            <Grid xs={2}>
                <Box sx={{ height: 200, bgcolor: "grey.100", borderRadius: 2 }} />
            </Grid>

            {/* Bottom black block */}
            <Grid xs={2}>
                <Box sx={{ height: 120, bgcolor: "black", borderRadius: 2 }} />
            </Grid>

            {/* Middle small blocks */}
            <Grid xs={2}>
                <Box sx={{ height: 60, bgcolor: "grey.100", borderRadius: 2 }} />
            </Grid>
            <Grid xs={2}>
                <Box sx={{ height: 60, bgcolor: "indigo.100", borderRadius: 2 }} />
            </Grid>
            <Grid xs={2}>
                <Box sx={{ height: 100, bgcolor: "blue.600", borderRadius: 2 }} />
            </Grid>

            {/* Very bottom center small black bar */}
            <Grid xs={2}>
                <Box sx={{ height: 30, bgcolor: "black", borderRadius: 2 }} />
            </Grid>
        </Grid>
    );
}

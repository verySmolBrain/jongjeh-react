import { Box } from "@mui/material";
import React from "react";

const YoutubeEmbed = ({ embedId } : { embedId: string }) => (
    <Box
        display = "flex"
        justifyContent = "center"
        width = "100%"
        maxWidth = "600px"
        mx = "auto"
    >
        <div style = {{ width: "100%", aspectRatio: "16 / 9" }}>
            <iframe
                src = { `https://www.youtube.com/embed/${embedId}` }
                title = "One Piece"
                style = {{
                    width: "100%",
                    height: "100%",
                    border: 0
                }}
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    </Box>
);

export default YoutubeEmbed;
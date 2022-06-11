import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { IconButton } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { FormatUnderlined } from "@mui/icons-material";
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
import { stateToHTML } from "draft-js-export-html";

var stateFromHTML = require('draft-js-import-html').stateFromHTML;

function RichTextEditor(props) {
    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(props.initialValue)))

    const onChange = newState => {
        setEditorState(newState);
        handleChange(stateToHTML(newState.getCurrentContent()));
    };

    const handleKeyCommand = React.useCallback((command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            onChange(newState);

            return "handled";
        }
        return "not-handled";
    })

    const onUnderlineClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
    };

    const onBoldClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    };

    const onItalicClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
    };

    const handleChange = (rawHTML) => {
        props.onChange(rawHTML);
    }

    return (
        <div
            style={{
                padding: '1em',
                margin: "1em",
            }}
        >
            <div>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        color: 'text.secondary',
                        '& svg': {
                            m: 0.25,
                        },
                        '& hr': {
                            mx: 0.25,
                        },
                    }}
                >
                    <IconButton onClick={onBoldClick}>
                        <FormatBoldIcon />
                    </IconButton>
                    <IconButton onClick={onItalicClick}>
                        <FormatItalicIcon />
                    </IconButton>
                    <IconButton onClick={onUnderlineClick}>
                        <FormatUnderlined />
                    </IconButton>
                    {/* <Divider orientation="vertical" flexItem /> */}
                </Box>
            </div>
            <div
                style={{
                    border: '1px #e0e0e0 solid',
                    padding: '1em',
                    marginTop: 10,
                    fontSize: '90%',
                    borderRadius: 1,
                }}
            >
                <Editor
                    name={"text"}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default RichTextEditor;

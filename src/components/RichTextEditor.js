import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { IconButton } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { FormatUnderlined } from "@mui/icons-material";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    onChange = editorState => {
        this.setState({
            editorState
        });
    };

    handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(
            this.state.editorState,
            command
        );
        if (newState) {
            this.onChange(newState);
            return "handled";
        }
        return "not-handled";
    };

    onUnderlineClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
        );
    };

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
    };

    onItalicClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
        );
    };
    render() {
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
                        <IconButton onClick={this.onBoldClick}>
                            <FormatBoldIcon />
                        </IconButton>
                        <IconButton onClick={this.onItalicClick}>
                            <FormatItalicIcon />
                        </IconButton>
                        <IconButton onClick={this.onUnderlineClick}>
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
                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
}

export default RichTextEditor;

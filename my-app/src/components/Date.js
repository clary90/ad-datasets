import React from 'react';
import Typography from "@material-ui/core/Typography";

/**
 * This is the commit message of the last commit before building or running this project
 * @see ./package.json git-info for how to generate this commit
 */

export class LastUpdate extends React.Component {
    render() {
        return (
        <div style={{
            position: "absolute",
            top: window.innerHeight*0.02,
//            width: window.innerHeight*0.2,
            minWidth: "125px",
            border: "1px solid white",
            borderRadius: "5px",
            fontSize: 0.01*window.innerHeight,
            left: "0.5%",
//            height: window.innerHeight*0.015,
            backgroundColor: "white",
            paddingLeft: "0.25%",
            paddingRight: "0.25%"

        }}>
            <Typography
                  style={{
                      color: "#3f51b5",
                      fontSize: 0.015*window.innerHeight,
                      textAlign: "center"
                  }}>
                Last Update {process.env.REACT_APP_GIT_SHA}
            </Typography>
        </div>
        )
    }
}
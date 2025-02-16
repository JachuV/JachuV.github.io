import React from "react";
import ReactPlayer from "react-player";

const ColumnReactPlayer = (props)=> {
	return (
		<ReactPlayer url= {props.url} />
	)
}

export default ColumnReactPlayer;
import React, {useEffect, useState} from "react";
import {doesCanvasExist, isNumberOfPropsCorrect} from "../../utils/utils";
import global from "../../store/global";
import {InvalidCommand} from "./InvalidCommand";
import {CommandType} from "../../types/component";
import {Fill} from "../shapes/Fill";
import { envVar } from "../../utils/utils";


export const FillCommand = (props: CommandType): JSX.Element => {
    const [error, setError] = useState("");
    const [coordinates, setCoordinates] = useState();
    useEffect(() => {
        setError("");

        if (!isNumberOfPropsCorrect(props.command, 3)) {
            setError("Invalid Command : ( Try: B x y)");
        }
        if (!doesCanvasExist(global.canvas)) {
            setError("Canvas Doesnt exist");
        } else {
            console.log(envVar.color)
            setCoordinates({
                fromX: Number(props.command[1]),
                fromY: Number(props.command[2]),
                color: envVar.color.toString().toLowerCase(),
            });
        }
    }, [props]);

    return (error === "") ? (<Fill {...coordinates}/>) :
        <InvalidCommand error={error}/>;
}

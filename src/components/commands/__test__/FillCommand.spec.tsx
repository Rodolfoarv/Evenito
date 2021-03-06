
import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {CanvasBoard} from "../../../screens/CanvasBoard";
import {FillCommand} from "../FillCommand";
import '@testing-library/jest-dom';

let documentBody: RenderResult;
describe("Rectangle", () => {

    it('Should render a Invalid Command if canvas doesnt exist', () => {

        documentBody = render(
            <FillCommand command={["f","1", "1", "."]}/>
        );
        var linkElement = documentBody.getByLabelText("error");
        expect(linkElement).toBeInTheDocument();
    });


    it('Should render a Invalid Command for wrong parameters', () => {
        render(
            <CanvasBoard command={"N 20 4"}/>
        );

        documentBody = render(
            <FillCommand command={["b","1"]}/>
        );
        var linkElement = documentBody.getByText("ERROR: Invalid Command : ( Try: B x y)");
        expect(linkElement).toBeInTheDocument();
    });
})






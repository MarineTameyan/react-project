import React from "react";
import { PageHeader } from "../../../../../components/page-header/pageheader";
import { ColorContent } from "./components/color/colorsettings";
import { SizeContent } from "./components/size/sizesettings";

export const Settings = () =>{
    return <div>
        <PageHeader title={"Settings"} />
        <div className="settings-components G-flex">
            <ColorContent/>
            <SizeContent/>
        </div>
    </div>
}

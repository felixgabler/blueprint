/* Copyright 2021 Palantir Technologies, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/

import * as React from "react";

import { Classes, Tooltip2 } from "@blueprintjs/popover2";

import { ExampleCard } from "./ExampleCard";

const WIDTH = 200;
export class TooltipExample extends React.PureComponent {
    public render() {
        return (
            <ExampleCard width={WIDTH}>
                <Tooltip2 className={Classes.TOOLTIP2_INDICATOR} content={<span>Tooltip</span>} isOpen={true}>
                    <div>Target</div>
                </Tooltip2>
            </ExampleCard>
        );
    }
}

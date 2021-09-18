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

import classNames from "classnames";
import * as React from "react";

import { Card } from "@blueprintjs/core";

export interface ExampleCardProps {
    width?: number;
    horizontal?: boolean;
}

const DEFAULT_WIDTH = 500;

export class ExampleCard extends React.PureComponent<ExampleCardProps> {
    public render() {
        const width = this.props.width ?? DEFAULT_WIDTH;
        return (
            <Card
                className={classNames("example-card", { ["horizontal"]: this.props.horizontal })}
                elevation={0}
                style={{ width: `${width}px` }}
            >
                {this.props.children}
            </Card>
        );
    }
}

/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.                                                                              *
 ******************************************************************************************************************** */

import React from 'react';
import { Scatter as ScatterComponent, ScatterProps as ScatterComponentProps } from 'recharts';
import getFillColor from '../../../utils/getFillColor';
import getStrokeColor from '../../../utils/getStrokeColor';

class Scatter extends ScatterComponent {
    constructor(props: ScatterComponentProps) {
        super(props);
    }

    render() {
        const overrideFill = getFillColor(this.props.fill);
        const overrideStroke = getStrokeColor(this.props.stroke);
        return (
            <ScatterComponent {...this.props} fill={overrideFill} stroke={overrideStroke}>
                {this.props.children}
            </ScatterComponent>
        );
    }
}

export default Scatter;

import * as React from 'react';

import PageInterface from '../PageInterface';
import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {Fabric} from "office-ui-fabric-react";


export default class App extends React.Component<PageInterface, {}> {

    render() {
        return <Fabric>
            <DefaultButton onClick={(e) => {console.log('Click button')}}>Click</DefaultButton>


        </Fabric>
    }
}




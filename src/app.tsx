import * as React from 'react';
import Nav from './nav';

const App = (props: any): JSX.Element => {

    return (
        <div>
            <Nav />
            {props.children}
        </div>
    )
}

export default App;
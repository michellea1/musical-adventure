import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { StoreProvider } from './store';
import { Router, RouteComponentProps } from '@reach/router';
import App from './app';
import Home from './home';
import Artists from './artists';
import Favorites from './favorites';

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
    <div>
        <StoreProvider>
            <Router>
                <App path='/'>
                    <RouterPage pageComponent={<Home />} path='/' />
                    <RouterPage pageComponent={<Artists />} path='/artists' />
                    <RouterPage pageComponent={<Favorites />} path='/favorites' />
                </App>
            </Router>
        </StoreProvider>
    </div>,
    document.querySelector('#root')
);
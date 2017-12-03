import React from 'react'
import { render } from 'react-dom'
import Root from './root'

render(<Root />, document.getElementById('app'));
if (module.hot) {
    module.hot.accept('./root', () => {
        const Root = require('./root').default;
        render(
            <AppContainer>
                <Root />
            </AppContainer>,
            document.getElementById('app')
        );
    })
}
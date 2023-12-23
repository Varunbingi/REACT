import React from 'react';
import ReactDOM from 'react-dom/client';

const parent=React.createElement('div',{id:"parent"},[
    React.createElement('h1',{id:'heading1'},'Inside h1'),
    React.createElement('h2',{id:"heading2"},'Inside h2')
]);
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
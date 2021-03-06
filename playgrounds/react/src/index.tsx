import React from 'react';

import  ReactDOM  from 'react-dom';

import  { Margin, Select } from '@mds.e/react';
import '@mds.e/scss/lib/Utilities.css';
import '@mds.e/scss/lib/Margin.css';
import '@mds.e/scss/lib/Select.css';

ReactDOM.render(
    <Margin>
        <Select 
        renderOption={(props) => <div {...props.getOptionRecommendedProps()}>{props.option.label}</div>}
        options={[
            {label: 'Test 1', value: '1'},
            {label: 'Test 2', value: '2'},
            {label: 'Test 3', value: '2'},
            {label: 'Test 4', value: '2'},
            {label: 'Test 5', value: '2'},
        ]} />
     </Margin>,
    document.querySelector('#root')
)
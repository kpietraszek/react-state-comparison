import React from 'react';

import { initialState } from '../../common/mocks';
import { TasksProvider } from '../state/store';

import Name from './name';
import Tasks from './tasks';
import CreateTask from './create-task';

const ReactApp = () => (
    <>
        <h2>React with useReducer + Context</h2>
        <TasksProvider>
            <Name />
            <Tasks />
            <CreateTask />
        </TasksProvider>
    </>
);

export default ReactApp;

import React from 'react';
import CreateTaskView from '../../../common/components/create-task';
import { useUpdate } from '../../state/store';

const CreateTask = () => {
    const dispatch = useUpdate();

    const onCreate = (id, name) =>
        dispatch({ type: 'createTask', payload: { id, name } });

    return <CreateTaskView onCreate={onCreate} />;
};

export default CreateTask;

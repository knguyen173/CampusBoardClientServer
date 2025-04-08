import axiosInstance from './axiosInstance';

export const getAllTasks = async () => {
    try {
        const response = await axiosInstance.get('/tasks');
        console.log("Tasks from backend:", response.data); // Debugging line
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }
};

export const createTask = async (taskData) => {
    const response = await axiosInstance.post('/tasks', taskData);
    return response.data;
};

export const updateTask = async (id, taskData) => {
    const response = await axiosInstance.put(`/tasks/${id}`, taskData);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await axiosInstance.delete(`/tasks/${id}`);
    return response.data;
};

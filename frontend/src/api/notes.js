import axiosInstance from './axiosInstance';

export const getAllNotes = async () => {
    const response = await axiosInstance.get('/api/notes');
    return response.data;
};

export const createNote = async (noteData) => {
    const response = await axiosInstance.post('/api/notes', noteData);
};

export const updateNote = async (id, noteData) => {
    const response = await axiosInstance.put(`/api/notes/${id}`, noteData);
    return response.data;
};

export const deleteNote = async (id) => {
    const response = await axiosInstance.delete(`/api/notes/${id}`);
    return response.data;
};

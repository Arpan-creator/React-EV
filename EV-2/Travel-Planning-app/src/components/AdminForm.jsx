import React, { useEffect, useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AdminForm = () => {
    const { id } = useParams(); 
    const { destinations } = useAppContext();
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        avgBudget: '',
        profileImage: '',
        additionalImage: [],
        description: '',
    });

    const isEditing = Boolean(id);
    const destination = isEditing ? destinations.find((d) => d.id === id) : null;

    useEffect(() => {
        if (destination) {
            setFormData({ ...destination });
        }
    }, [destination]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://fir-mk-1-52b42-default-rtdb.asia-southeast1.firebasedatabase.app/destinations/${isEditing ? destination.id : ''}.json`;
        try {
            await axios[isEditing ? 'put' : 'post'](url, formData);
            alert('Destination saved successfully');
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Destination Name' />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder='Country' />
            <input type="number" name="avgBudget" value={formData.avgBudget} onChange={handleChange} placeholder='Average Budget' />
            <input type="text" name="profileImage" value={formData.profileImage} onChange={handleChange} placeholder='Profile Image URL' />
            <input type="text" name="additionalImage" value={formData.additionalImage} onChange={handleChange} placeholder='Additional Image' />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder='Description'></textarea>
            <button type='submit'>Save Destination</button>
        </form>
    );
};

export default AdminForm;

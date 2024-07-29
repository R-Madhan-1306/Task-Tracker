import React from 'react';
import ApiRequest from './ApiRequest';
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, setItems }) => {
    const update = async (id) => {
        // Find the item by id
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });

        // Update state with the updated items
        setItems(updatedItems);

        // Find the updated item
        const updatedItem = updatedItems.find((item) => item.id === id);

        // Prepare the update options
        const updateOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ checked: updatedItem.checked })
        };

        // Send the request to update the item
        const reqUrl = `http://localhost:3500/items/${id}`;
        await ApiRequest(reqUrl, updateOptions);
    };

    const deleteItem = async (id) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);

        const deleteOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        };
        const reqUrl = `http://localhost:3500/items/${id}`;
        try {
            const result = await ApiRequest(reqUrl, deleteOptions);
            if (result) throw new Error(result);
        } catch (err) {
            console.error(`Failed to delete item: ${err.message}`);
        }
    };

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => update(item.id)}
                                checked={item.checked}
                            />
                            <label>{item.item}</label>
                            <button onClick={() => deleteItem(item.id)}>
                                <FaTrashAlt />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty</p>
            )}
        </main>
    );
};

export default Content;

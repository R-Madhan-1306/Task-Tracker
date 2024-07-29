import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [nextId, setNextId] = useState(1); // Initialize the ID counter

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('could not fetch the data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
        setNextId(listItems.length ? Math.max(...listItems.map(item => item.id)) + 1 : 1); // Set the next ID based on the existing items
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []); // Add an empty dependency array to ensure it only runs once

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem) {
      alert('Please add an item');
      return;
    }
    const item = {
      id: nextId, // Use the next ID
      checked: false,
      item: newItem
    };
    setItems([...items, item]);
    setNewItem('');
    setNextId(nextId + 1); // Increment the next ID

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    };

    try {
      const result = await fetch(API_URL, postOptions);
      if (!result.ok) {
        throw Error('could not post new item');
      }
    } catch (err) {
      setFetchError(err.message);
    }
  };

  return (
    <div>
      <Header title="Task Tracker" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && !fetchError && (
          <Content
            items={items.filter(item => (
              item.item.toLowerCase().includes(search.toLowerCase())
            ))}
            setItems={setItems}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;

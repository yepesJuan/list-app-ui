import { useState } from 'react'
import { Input } from 'antd'
const { Search } = Input

export default function Hero({ uid, setLoading, setListItems }) {
  const [inputValue, setInputValue] = useState('')
  const handleNewItem = (value) => {
    setLoading(true)
    const newItem = { name: value, uid }
    fetch('https://honeydo-api-bc.web.app/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem),
    })
      .then(() => {
        // now clear the search and then update the todo list
        fetch(`https://honeydo-api-bc.web.app/items/${uid}`)
        .then(response => response.json())
        .then(data => {
          setInputValue('')
          setListItems(data)
          setLoading(false)
        })
        .catch(err => alert(err))
      })
      .catch(err => alert(err))
  }
  return (
    <section style={{ padding: 50, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
      <h1>Honey Do List</h1>
      <Search
        enterButton="Add"
        size="large"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onSearch={handleNewItem}
        placeholder="Add todo item" />
    </section>
  )
}
import { useEffect } from 'react'
import { List } from 'antd'

export default function ItemList({ user, listItems, setListItems, loading, setLoading }) {
  useEffect(() => {
    setLoading(true)
    if(!user) {
      setListItems([])
      setLoading(false)
    } else {
      fetch(`https://honeydo-api-bc.web.app/items/${user.uid}`)
        .then(response => response.json())
        .then(data => {
          setListItems(data)
          setLoading(false)
        })
        .catch(err => alert(err))
    }
  }, [user])
  return (
    <List
      size="large"
      bordered
      dataSource={listItems}
      loading={loading}
      renderItem={item => <List.Item>{item.name}</List.Item>}
     />
  )
}

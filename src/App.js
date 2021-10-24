import { useState } from 'react'
import { Layout, Modal } from 'antd'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import Hero from './components/Hero'
import ItemList from './components/ItemList'
import Copyright from './components/Copyright'
const { Content } = Layout

function App() {
  const uid = 1
  const [listItems, setListItems] = useState()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()
  return (
    <Layout>
      <Navbar />
      <Content className="site-layout" style={{ marginTop: 64, padding: '0 50px' }}>
        {!user
          ? <Modal title="Login" visible={true} footer={null}>
              <LoginForm setUser={setUser} />
            </Modal>
          : <Hero
              uid={user.uid}
              setLoading={setLoading}
              setListItems={setListItems} />}
        <ItemList
          user={user}
          listItems={listItems}
          setListItems={setListItems}
          setLoading={setLoading}
          loading={loading} />
      </Content>
      <Copyright />
    </Layout>
  )
}

export default App
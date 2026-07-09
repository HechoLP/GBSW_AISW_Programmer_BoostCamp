import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter'
import MainLayout from './components/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {
  const [name, setname] = useState("이랑")
  return (
    <>
      {/* <Header></Header> */}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/test" element={<>test</>} />
            <Route path="/test2" element={<>test2</>} />
          </Route>
          <Route path="/" element={<Counter name={name} />} />
          <Route path="/login" element={<>로그인</>} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App

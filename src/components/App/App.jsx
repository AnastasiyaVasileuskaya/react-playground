import './App.css'
import React from 'react'
import Card from '../Card'
import Header from '../Header'

export default function App() {
  return (
    <>
      <Header title="React App" />
      <Card question="Lala?" answer="Baba" />
      <Card question="Foo?" answer="Bar" />
      <Card question="Foo?" answer="Bar" />
    </>
  )
}

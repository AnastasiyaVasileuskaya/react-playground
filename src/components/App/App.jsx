import './App.css'
import React from 'react'
import Card from '../Card'
import Header from '../Header'

export default function App() {
  return (
    <>
      <Header colortext="lightgrey" color="blue" title="React App" />
      <Card
        color="pink"
        radius="20"
        question="Lala?"
        answer="Baba"
        showAnswer
      />
      <Card color="cornflowerblue" radius="20" question="Foo?" answer="Bar" />
      <Card color="red" radius="20" question="Foo?" answer="Bar" showAnswer />
    </>
  )
}

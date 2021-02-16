import './Card.css'
import React from 'react'

export default function Card({ question, answer, radius, color, showAnswer }) {
  return (
    <section
      style={{ borderRadius: radius + 'px', backgroundColor: color }}
      className="Card"
    >
      <h2>{question}</h2>
      {showAnswer && <p>{answer}</p>}
    </section>
  )
}

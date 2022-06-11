import * as React from "react"
import { Link } from "gatsby"
import { Button } from "./ui"
import "./header.css"
import { Graph } from "./icons"
import { MdAutoGraph } from "react-icons/md"

export default function Header() {
  return (
    <header className="header">
      <div className="flex-container">
        <Link to="/" className="logo-container">
          <span className="logo">Voicetrainer</span>
          <MdAutoGraph className="logo-icon" />
        </Link>
        <div>
          <Button to="mailto:operations@voicetrainer.io">Get in Touch!</Button>
        </div>
      </div>
    </header>
  )
}

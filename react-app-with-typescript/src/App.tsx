import axios from "axios";
import React from "react"
import {useEffect, useRef, useState} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { getAllSubs } from "./services/getAllSubs";
import { Sub } from './types';

interface AppState {
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs ] = useState<AppState["subs"]>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getAllSubs().then(setSubs)
  }, [])  

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }


  return (
    <div className="App" ref={divRef}>
      <h1>My Subscribers</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;

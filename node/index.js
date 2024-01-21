#!/usr/bin/env node
import { count } from "./utils.js"

const note = process.argv[2]
const newNote = {
  note,
  date: new Date(),
  count: count(12)
}
console.log(newNote)
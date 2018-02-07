import db from '../db'

export default function signUp(name, last, email) {
  return db.oneOrNone(`
    INSERT INTO users(name, last, email)
         VALUES ($1, $2, $3)
      RETURNING *
  `, [name, last, email])
}

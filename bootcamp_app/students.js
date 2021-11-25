const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const limit = process.argv[2];

pool.query(`
  SELECT students.id, students.name as student, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = students.cohort_id
  LIMIT ${limit || 5};`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.student} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));
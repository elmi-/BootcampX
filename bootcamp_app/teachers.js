const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];

pool.query(" SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort FROM teachers JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id JOIN students ON students.id = assistance_requests.student_id JOIN cohorts ON cohorts.id = students.cohort_id WHERE cohorts.name = $1 ORDER BY teacher;", [cohortName])
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));
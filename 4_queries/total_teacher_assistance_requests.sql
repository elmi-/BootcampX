SELECT teachers.name, COUNT(assistance_requests.*) as total_assistance
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;
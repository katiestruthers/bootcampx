SELECT SUM(duration) AS total_duration
FROM students
JOIN assignment_submissions ON student_id = students.id
WHERE name = 'Ibrahim Schimmel';
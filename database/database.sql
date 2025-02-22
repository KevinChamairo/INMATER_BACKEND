-- Paso 1: Vamos a crear la base de datos llamada inmater para Postgres
CREATE DATABASE inmater;
\c inmater;

-- Paso 2 : Vamos a crear la tabla de estados
CREATE TABLE statuses (
    id SERIAL PRIMARY KEY,      -- Tendrá un ID autoincremental
    name VARCHAR(15) NOT NULL   -- Guardará el Nombre del Estado, según las especificaciones del documento de la prueba técnica (pendiente, en progreso, completada)
);

-- Paso 3: Vamos a insertar los valores de estado según las especficaciones del documento de la prueba técnica
INSERT INTO statuses (name) VALUES ('pendiente'), ('en progreso'), ('completada');

-- Paso 4: Vamos a crear la tabla de tareas
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,       -- Tendrá un ID autoincremental
    title VARCHAR(255) NOT NULL, -- Guardará el título de la tarea (dato obligatorio según documento)
    due_date DATE,               -- Guardará la fecha de vencimiento (dato opcional según documento)
    status_id INT REFERENCES statuses(id) DEFAULT 1 -- Clave foránea (por defecto o inicialmente debe estar en estado 'pendiente' según documento)
);

-- Paso 5: Vamos a insertar algunas tareas con respecto a INMATER
INSERT INTO tasks (title, due_date, status_id) 
VALUES 
    ('Evaluación inicial de la pareja Chamairo Riveros', '2025-03-05', 3), 
    ('Análisis hormonal de la paciente Riveros Haydee', '2025-03-08', 3), 
    ('Revisión de resultados de exámenes Riveros Haydee', NULL, 2), 
    ('Consulta de planificación del tratamiento', '2025-03-10', 2), 
    ('Aplicación de medicación de estimulación ovárica', '2025-03-15', 1), 
    ('Seguimiento ecográfico', NULL, 1),
    ('Prueba de embarazo y evaluación de resultados de la paciente Riveros Haydee', '2025-04-05', 1);

-- Paso 6: Vamos a consultar las tareas con su estado correspondiente
SELECT tasks.id, tasks.title, tasks.due_date, statuses.name AS estado 
FROM tasks
JOIN statuses ON tasks.status_id = statuses.id;
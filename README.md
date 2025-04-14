# CampusBoardClientServer
CS 5319 - Campus Board implemented in the Client-Server Architecture

Install PostgreSQL

Start PostgreSQL server
pg_ctl -D "C:\Program Files\PostgreSQL\17\data" status

Access PostgresSQL
psql -U postgres

In psql shell run:
CREATE DATABASE campus_board_client;
\c campus_board_client

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Create notes table
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(100),
    content TEXT
);

-- Create tasks table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(100),
    description TEXT,
    priority VARCHAR(50),
    due_date TIMESTAMP
);

Install Node Dependencies
cd backend
npm install
cd ../frontend
npm install

Run Backend Server
cd backend
npm start

Create a new terminal and run Frontend Server
cd frontend
npm start
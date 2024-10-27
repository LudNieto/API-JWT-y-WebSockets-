CREATE DATABASE IF NOT EXISTS api_jwt_websockets;

USE api_jwt_websockets;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
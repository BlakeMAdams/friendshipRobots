CREATE TABLE friends (
    id SERIAL PRIMARY KEY,
    friend_id INTEGER 
    REFERENCES users(id)
    );
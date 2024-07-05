
# Auth Service API Documentation

## Overview
This document provides an overview and detailed information about the Auth Service API, which allows users to register, log in, and retrieve profile information.

## Base URL
```
{{base_url}}
```

## Endpoints

### 1. Register User

- **URL**: `{{base_url}}/api/auth/register`
- **Method**: `POST`
- **Description**: This endpoint allows for the registration of a new user. The request should be sent using the `POST` method with a JSON body containing `name`, `email`, and `password`. Upon successful registration, the API returns a JWT token that can be used for authentication in subsequent calls.

#### Request Body
```json
{
  "name": "",
  "email": "",
  "password": ""
}
```

#### Successful Response (200)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4ODRiODZmODVlNmJkNTY2MDYzYzUzIn0sImlhdCI6MTcyMDIwODI2MiwiZXhwIjoxNzIwMjExODYyfQ.9IZ-UncpXQ7hy3FEweCaVFE-sRWlOU21bMwRJsR4fm0"
}
```

#### Error Responses
- **Email already in use (400)**
  ```json
  {
    "msg": "User already exists"
  }
  ```

### 2. Login User

- **URL**: `{{base_url}}/api/auth/login`
- **Method**: `POST`
- **Description**: This endpoint allows for the authentication of an existing user. The request should be sent using the `POST` method with a JSON body containing `email` and `password`. Upon successful authentication, the API returns a JWT token that can be used for authentication in subsequent calls.

#### Request Body
```json
{
  "email": "",
  "password": ""
}
```

#### Successful Response (200)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4ODMyNDFmODVlNmJkNTY2MDYzYzNmIn0sImlhdCI6MTcyMDIwOTIwNiwiZXhwIjoxNzIwMjEyODA2fQ.NwCfbxA5QNWHOE3lmj9sImioqxsZhpe6pVGkgTLEC-Y"
}
```

#### Error Responses
- **Invalid Password (400)**
  ```json
  {
    "msg": "Invalid Password"
  }
  ```
- **Invalid Email (400)**
  ```json
  {
    "msg": "Invalid Email"
  }
  ```

### 3. Get Profile

- **URL**: `{{base_url}}/api/auth/profile`
- **Method**: `GET`
- **Description**: This endpoint allows for the retrieval of the authenticated user's profile information. The request should be sent using the `GET` method with a header that includes a valid JWT token.

#### Headers
- `Content-Type`: `application/json`
- `x-auth-token`: `{{authToken}}`

#### Successful Response (200)
```json
{
  "_id": "66883241f85e6bd566063c3f",
  "name": "Test User 6",
  "email": "test6@example.com",
  "__v": 0
}
```

#### Error Response
- **Unauthorized (401)**
  ```json
  {
    "msg": "Token is not valid"
  }
  ```
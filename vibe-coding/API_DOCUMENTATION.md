# API Documentation

This document describes the API endpoints for the Vibe Coding landing page.

## Base URL

All API endpoints are relative to your domain:

- Development: `http://localhost:3000`
- Production: `https://your-domain.com`

## Endpoints

### 1. Submit Interest

**POST** `/api/submit-interest`

Submit a new interest form entry.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subscribed": false
}
```

#### Request Parameters

| Parameter    | Type    | Required | Description                                         |
| ------------ | ------- | -------- | --------------------------------------------------- |
| `name`       | string  | Yes      | User's full name (2-100 characters)                 |
| `email`      | string  | Yes      | Valid email address                                 |
| `subscribed` | boolean | No       | Newsletter subscription preference (default: false) |

#### Response

**Success (201 Created)**

```json
{
  "success": true,
  "data": {
    "message": "Interest submitted successfully",
    "submission": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "subscribed": false,
      "created_at": "2024-01-01T00:00:00Z"
    }
  }
}
```

**Error Responses**

**400 Bad Request** - Validation Error

```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Please enter a valid email address"
    }
  ]
}
```

**409 Conflict** - Email Already Exists

```json
{
  "success": false,
  "error": "Email already registered"
}
```

**500 Internal Server Error**

```json
{
  "success": false,
  "error": "Failed to submit interest"
}
```

### 2. Get Interest Count

**GET** `/api/interest-count`

Get the total number of interest submissions.

#### Request

No parameters required.

#### Response

**Success (200 OK)**

```json
{
  "success": true,
  "data": {
    "count": 42
  }
}
```

**Error (500 Internal Server Error)**

```json
{
  "success": false,
  "error": "Failed to get interest count"
}
```

## Validation Rules

### Name Validation

- Required field
- Minimum 2 characters
- Maximum 100 characters
- Trimmed of whitespace

### Email Validation

- Required field
- Must be a valid email format
- Converted to lowercase
- Trimmed of whitespace
- Must be unique (no duplicates allowed)

### Subscribed Field

- Optional boolean field
- Defaults to `false` if not provided

## Error Handling

All endpoints return consistent error responses with the following structure:

```json
{
  "success": false,
  "error": "Human-readable error message",
  "details": [] // Optional array of validation errors
}
```

## HTTP Status Codes

| Code | Description                                    |
| ---- | ---------------------------------------------- |
| 200  | OK - Request successful                        |
| 201  | Created - Resource created successfully        |
| 400  | Bad Request - Validation error                 |
| 405  | Method Not Allowed - HTTP method not supported |
| 409  | Conflict - Email already exists                |
| 500  | Internal Server Error - Server error           |

## Rate Limiting

Basic rate limiting is implemented to prevent abuse:

- Maximum 5 requests per minute per IP address
- Rate limiting is applied to the submit-interest endpoint

## CORS

The API endpoints support CORS for cross-origin requests:

- Allowed origins: Same origin only
- Allowed methods: GET, POST
- Allowed headers: Content-Type

## Testing

You can test the API endpoints using the test page at `/test-api` or with tools like:

### cURL Examples

**Submit Interest:**

```bash
curl -X POST http://localhost:3000/api/submit-interest \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subscribed": true
  }'
```

**Get Count:**

```bash
curl http://localhost:3000/api/interest-count
```

### JavaScript Examples

```javascript
// Submit interest
const response = await fetch('/api/submit-interest', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subscribed: true,
  }),
});

const result = await response.json();
console.log(result);

// Get count
const countResponse = await fetch('/api/interest-count');
const countResult = await countResponse.json();
console.log(countResult.data.count);
```

## Security Considerations

1. **Input Validation**: All inputs are validated server-side
2. **SQL Injection Protection**: Using Supabase's parameterized queries
3. **Rate Limiting**: Basic rate limiting to prevent abuse
4. **CORS**: Configured to prevent unauthorized cross-origin requests
5. **Error Handling**: Generic error messages to avoid information leakage

## Environment Variables Required

Make sure these environment variables are set:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

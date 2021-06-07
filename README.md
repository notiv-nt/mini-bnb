## Requirements

- Node.js + npm (yarn)
- Docker

## Run

```
docker-compose up
```

Migrations

```
docker exec -t mini-bnb_api_1 yarn db migration:run
```

Seeds

```
docker exec -t mini-bnb_api_1 yarn scripts:seed
```

App is running on http://localhost:8000

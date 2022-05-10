## Endpoints :

List of available endpoints:

- `GET /search`

&nbsp;

## 1. GET /search

Request:

-params: name (track or playlist name in English) (required)

_Response (200 - 0K)_

```json
{
    "tracks": {
        "href": "String",
        "items": [
            {
                "album": {
                    "album_type":"String",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "String"
                            },
                            "href": "String",
                            "id": "String",
                            "name": "String",
                            "type": "String",
                            "uri": "String"
                        }
                    ],
                    "available_markets": ,
                    "external_urls": {
                        "spotify": "String"
                    },
                    "href": "String",
                    "id": "String",
                    "images": [
                        {
                            "height": "Number",
                            "url": "String",
                            "width": "Number"
                        },
                        ...
                    ],
                    "name": "String",
                    "release_date": "String",
                    "release_date_precision": "String",
                    "total_tracks": "Number",
                    "type": "String",
                    "uri": "String"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "String"
                        },
                        "href": "String",
                        "id": "String",
                        "name": "String",
                        "type": "String",
                        "uri": "String"
                    }
                ],
                "available_markets": "Array<String>",
                "disc_number": "Number",
                "duration_ms": "Number",
                "explicit": "Boolean",
                "external_ids": {
                    "isrc": "String"
                },
                "external_urls": {
                    "spotify": "String"
                },
                "href": "String",
                "id": "String",
                "is_local": "Boolean",
                "name": "String",
                "popularity": "Number",
                "preview_url": "String",
                "track_number": "Number",
                "type": "String",
                "uri": "String"
          },
            ....
        ],
        "limit": "Number",
        "next": "String",
        "offset": "Number",
        "previous": "String",
        "total": "Number"
    },
    "playlists": {
        "href": "String",
        "items": [
            {
                "collaborative": "Boolean",
                "description": "String",
                "external_urls": {
                    "spotify": "String"
                },
                "href": "String",
                "id": "String",
                "images": [
                    {
                        "height": "Number",
                        "url": "String",
                        "width": "Number"
                    }
                ],
                "name": "String",
                "owner": {
                    "display_name": "String",
                    "external_urls": {
                        "spotify": "String"
                    },
                    "href": "String",
                    "id": "String",
                    "type": "String",
                    "uri": "String"
                },
                "primary_color": "String",
                "public": "String",
                "snapshot_id": "String",
                "tracks": {
                    "href": "String",
                    "total": "Number"
                },
                "type": "String",
                "uri": "String"
            }
        ],
        "limit": "Number",
        "next": "String",
        "offset": "Number",
        "previous": "String",
        "total": "Number"
    }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Please enter an English word"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

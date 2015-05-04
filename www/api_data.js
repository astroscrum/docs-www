define({ "api": [
  {
    "type": "post",
    "url": "/entries",
    "title": "Create a scrum entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>Astroscrum auth token</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>A uuid for this resource</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category for scrum key, e.g. today, yesterday, or blocker</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>The task related to the category</p> "
          },
          {
            "group": "Response",
            "type": "Points",
            "optional": false,
            "field": "points",
            "description": "<p>How many points earned by the Player for this task</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"entry\": {\n    \"id\": \"ecb72023-12ae-4f98-8996-326df9b8b2c7\",\n    \"category\": \"today\",\n    \"body\": \"I'm working on payment processing\",\n    \"points\": 5\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "CreateEntry",
    "group": "Entry",
    "version": "0.0.0",
    "filename": "../api/app/controllers/api/v1/entries_controller.rb",
    "groupTitle": "Entry"
  },
  {
    "type": "post",
    "url": "/players",
    "title": "Create a player",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>Astroscrum auth token</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Short name or chat mention name</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address for player</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slack_id",
            "description": "<p>Optional the <code>slack_id</code> of the user, <strong>required</strong> if using Astroscrum Hubot client</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "real_name",
            "description": "<p>Optional real name of the Player</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>A uuid for this resource</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "slack_id",
            "description": "<p>The <code>slack_id</code> for this player (a uuid for slack)</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The players chat mention name and shortname</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "real_name",
            "description": "<p>The full name for this player</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The players email address</p> "
          },
          {
            "group": "200 Response",
            "type": "Integer",
            "optional": false,
            "field": "points",
            "description": "<p>The total point earnings for this player for the current season</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"player\": {\n    \"email\": \"neckbeard@example.com\",\n    \"id\": \"ecb72023-12ae-4f98-8996-326df9b8b2c7\",\n    \"name\": \"neckbeard\",\n    \"points\": 0,\n    \"real_name\": \"Neck Beard\",\n    \"slack_id\": \"U0485M91U\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errors\": {\n    \"email\": [\n      \"can't be blank\"\n    ],\n    \"password\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "CreatePlayer",
    "group": "Player",
    "version": "0.0.0",
    "filename": "../api/app/controllers/api/v1/players_controller.rb",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "/players/:id",
    "title": "Get a player",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>Astroscrum auth token</p> "
          }
        ]
      }
    },
    "description": "<p>This will return a specific player on your team. You can only see players that are on your team (in the same account)</p> ",
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>A uuid for this resource</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "slack_id",
            "description": "<p>The <code>slack_id</code> for this player (a uuid for slack)</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The players chat mention name and shortname</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "real_name",
            "description": "<p>The full name for this player</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The players email address</p> "
          },
          {
            "group": "200 Response",
            "type": "Integer",
            "optional": false,
            "field": "points",
            "description": "<p>The total point earnings for this player for the current season</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"player\": {\n    \"email\": \"neckbeard@example.com\",\n    \"id\": \"ecb72023-12ae-4f98-8996-326df9b8b2c7\",\n    \"name\": \"neckbeard\",\n    \"points\": 0,\n    \"real_name\": \"Neck Beard\",\n    \"slack_id\": \"U0485M91U\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "GetPlayer",
    "group": "Player",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>String unique ID.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../api/app/controllers/api/v1/players_controller.rb",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "/players",
    "title": "Get all players",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>Astroscrum auth token</p> "
          }
        ]
      }
    },
    "description": "<p>This will return an array of the players on your team. You can only see players that are on your team (in the same account)</p> ",
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "Array",
            "optional": false,
            "field": "players",
            "description": "<p>An array of player resources</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"players\": [\n    {\n      \"email\": \"jpsilvashy@gmail.com\",\n      \"id\": \"ac91ae0f-ce75-4d62-b7ae-3a03b187b54e\",\n      \"name\": \"jpsilvashy\",\n      \"points\": 0,\n      \"real_name\": \"JP Silvashy\",\n      \"slack_id\": \"U0480481U\"\n    },\n    {\n      \"email\": \"neckbeard@example.com\",\n      \"id\": \"ecb72023-12ae-4f98-8996-326df9b8b2c7\",\n      \"name\": \"neckbeard\",\n      \"points\": 0,\n      \"real_name\": \"Neck Beard\",\n      \"slack_id\": \"U0485M91U\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "name": "GetPlayers",
    "group": "Player",
    "version": "0.0.0",
    "filename": "../api/app/controllers/api/v1/players_controller.rb",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "/scrum",
    "title": "Get todays scrum",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>Astroscrum auth token</p> "
          }
        ]
      }
    },
    "description": "<p>This will return all the details about your scrum</p> ",
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>A uuid for this resource</p> "
          },
          {
            "group": "200 Response",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>The date of the scrum (ISO 8601 format)</p> "
          },
          {
            "group": "200 Response",
            "type": "Integer",
            "optional": false,
            "field": "points",
            "description": "<p>the amount of points earned for this scrum</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"scrum\": {\n    \"id\": \"ecb72023-12ae-4f98-8996-326df9b8b2c7\",\n    \"date\": \"2015-04-12\",\n    \"points\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "GetScrum",
    "group": "Scrum",
    "version": "0.0.0",
    "filename": "../api/app/controllers/api/v1/scrums_controller.rb",
    "groupTitle": "Scrum"
  },
  {
    "type": "post",
    "url": "/teams",
    "title": "Create a team",
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>The <code>auth_token</code>, you&#39;ll be required to send with all other requests</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"team\": {\n    \"auth_token\": \"c25a1f20b3af295280024c991a205482\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The team name in Slack</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slack_id",
            "description": "<p>The <code>slack_id</code> of the team</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example-Request:",
        "content": "POST /v1/team HTTP/1.1\n{\n  \"team\": {\n     \"name\": \"Astroscrum\"\n  }\n}",
        "type": "json"
      }
    ],
    "name": "CreateTeam",
    "group": "Team",
    "version": "0.0.0",
    "filename": "../api/app/controllers/api/v1/teams_controller.rb",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/team",
    "title": "Get your team",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "X-Auth-Token",
            "description": "<p>Astroscrum auth token</p> "
          }
        ]
      }
    },
    "description": "<p>This will return all the details about your team</p> ",
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>A uuid for this resource</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "slack_id",
            "description": "<p>The <code>slack_id</code> for this team (a uuid for slack)</p> "
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The team name in Slack</p> "
          },
          {
            "group": "200 Response",
            "type": "Integer",
            "optional": false,
            "field": "points",
            "description": "<p>The total point earnings for this team for the current season</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"team\": {\n    \"id\": \"ecb72023-12ae-4f98-8996-326df9b8b2c7\",\n    \"name\": \"companyname\",\n    \"points\": 0,\n    \"slack_id\": \"U0485M91U\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "name": "GetTeam",
    "group": "Team",
    "version": "0.0.0",
    "filename": "../api/app/controllers/api/v1/teams_controller.rb",
    "groupTitle": "Team"
  },
  {
    "type": "delete",
    "url": "/entries",
    "title": "Delete entries by player or category",
    "version": "0.0.0",
    "filename": "../api/app/controllers/api/v1/entries_controller.rb",
    "group": "_Users_jpsilvashy_Projects_astroscrum_api_api_app_controllers_api_v1_entries_controller_rb",
    "groupTitle": "_Users_jpsilvashy_Projects_astroscrum_api_api_app_controllers_api_v1_entries_controller_rb",
    "name": "DeleteEntries"
  }
] });
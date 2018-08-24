---
id: apiUsers
title: Users, roles and case team
sidebar_label: Users, roles and case team
---

Using `post/users` you can add a user. The body of this call should look like:

```ssh
{ 
  "username": "string",
  "password": "string",
  "name": "string",
  "roles": [
    "string"
  ] 
}
```

As you see, you have to add a role. This role is not necessarly a role designed in one of the case models in your organisation. 

As your case models evolves, more roles can be added. Also, your employees can fulfill other roles. To implement this, you can change the users profile by using `put/user` with the same body. Note, that you must mention in the roles section of the body all roles that the user fulfills.

## Set a case team for a case instance

Roles are designed in a case model and therefore part of each case that is instantiated from that model. A user fulfilling a role designed in the model –implemented with `post/users` – is therefore authorized to each case that is instantiated from this model.

If you want to restrict an instance of a case to just one or two users that fullfil the case role, you can set a case team for that instance using `.../cases/{caseinstanceID}/caseteam`. There are three methods: `post` for setting  a new case team, `put` for updating the team and `delete` for deleting a case team member. These methods uses the same body as `post/users`.
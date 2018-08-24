---
id: apiAuthentication
title: Introducing the API
sidebar_label: Introducing the API
---

In this section we explain the working of the API more thoroughly. 

## Build your application using the API

In short, the architecture of your case management application will compromise:

* a website for your user interaction
* a storage for documents, maybe a document management system
* a storage for structured data, maybe a RDBMS or a NoSQL store
* Cafienne for execution of the case plan logic
* a backend application server for logic that is not a part of Cafienne
* a gateway that glues all together

> You can of course Cafienne UI helping you to build an application. However, we recommend to build and architecture your own.

## Authentication

> Note that using the API needs Authentication

Use `post/identity` to log in. This log in will respond with X-AUT-CAFIENNE (if not in response, look into your header). You can use `admin, cafienne` as username and password. See also `src/conf/local.conf` in which you can define users.

X-AUTH-CAFIENNE is to be included in each method calls. In this section, we refrain further from mentioning X-AUTH_CAFIENNE. 

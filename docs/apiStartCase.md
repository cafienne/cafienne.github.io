---
id: apiStartCase
title: Start a Case
sidebar_label: Start a Case
---

## Retrieve the model
Starting a case, you have to know what case models are available. As we know, the models are deployed at  `/.../target/definitions/....xml`. You can look there.

You can also call on the API. In the API you can call on the method `get/repository/list`. This retrieves a list of models, like:

```ssh
{ 
  "models": [ 
    {
      "definitions": "<modelName>.xml"
      ....
    }
  ]
}
```

## Use the model name to start the case

Using `post/cases` you can start the Case. This call only needs a body, being a JSON structure. This body uses the modelName retrieved with `get/repository/list` and next reflects the Case File Items that are modeled as the input parameters. 

```ssh
{
  "definition":"<modelName>.xml", 
  "name":"<modelName>", 
  "inputs":{
      ... 
      }
    }
}
```
`post/cases` will respond with a body including the caseInstanceID and the name of the case model:

```ssh
{
  "caseInstanceId": "2fdfba88_3331_4fe0_a3cf_83e4f6cc5b55",
  "name": "<modelName>"
}
```
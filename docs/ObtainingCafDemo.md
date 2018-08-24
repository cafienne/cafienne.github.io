---
id: ObtainingCafDemo
title: Obtaining Cafienne Demo
sidebar_label: Obtaining Cafienne Demo
---

Here we explain how you can obtain the binaries for Cafienne-demo to get started. There is currently one way: clone the github repository from https://github.com/cafienne/cafienne-demo. For that you have to ask us authorization. Contact us using info@cafienne.io. Note that Cafienne runs in dockers, so Docker has to be installed too. You need at least version Docker 17.03-ce / Docker for Mac/Win 17.03-ce +.

## Clone the repository and get started
When authorized, you can clone the repository from Github by running the following command in a terminal: `git clone https://github.com/cafienne/cafienne-demo.git`. Note that the clone is in an folder cafienne-demo on your Home directory. 

Now, you can pull the latest Cafienne docker images by running `docker-compose -f cafienne-demo.yml pull`  and bringing it up by running  `docker-compose -f cafienne-demo.yml up`. You can now start working with Cafienne.

There are  two methods to stop and/or remove the environment.  

* `docker-compose -f cafienne-demo.yml down`   will stop the running environment and remove all created containers. Only use this method if you want to rebuild all containers and start with a clean environment, because everything is completely removed.

* `docker-compose -f cafienne-demo.yml stop`   only stops the running containers. All data is preserved. Use this method if you want to preserve all your running cases.Once stopped, you can start the containers by running docker-compose -f cafienne-demo.yml start 

## Exposed URLs of the Cafienne Demo environment
After starting up de Cafienne Demo environment, the following URL allow you to access the various parts of the environment:

* Cafienne modeler environment: http://localhost:3001
* Cafienne task user interface: http://localhost:8081
* Cafienne API (exposed through Swagger): http://localhost:18082
* MailCatcher web UI: http://localhost:1080

You can logon to these parts by using `admin` for the username and `cafienne` for the password. Next to the admin there are four predefined users: Lara `lara/lara`, Hank `hank/hank`, Gerald `gerald/gerald` and Suzy `suzy/suzy`.

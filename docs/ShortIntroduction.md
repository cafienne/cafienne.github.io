---
id: ShortIntroduction
title: A short introduction
sidebar_label: A short introduction
---

## When to use Cafienne
You can use Cafienne when you work with Cases, building Case Files and cooperating in a team. 

You can use Cafienne when your User Interface in a glance should give you an overview of the whole case. Of what has been done, what can be done and what must be done. Of all the information that is in the Case File and that is related to the work that you are doing. 

You should use Cafienne if you want to build up your case team, and –as a case manager– want to keep all of them involved in the proceeding of the case.

You want to use Cafienne if you want to build up an auditable track of what case workers contributed to solving the case.


## Cafienne is a case engine
Cafienne is a case engine. Cafienne interprets a case model that is designed according to the [CMMN](https://www.omg.org/spec/CMMN/About-CMMN/) specifications. Doing this, it offers the user tasks he must perform, tasks he may perform and tasks he may choose to perform. And, the case engine keeps track of all the information that is added to the Case File during its lifecycle.

Also, you can create a team of case workers, specific to the specific case. To this team, you can add people from within your own organisation but also from outside it.

## Cafienne is open source
Cafienne is fully open source and has an active community. This way we can ensure that we have a continuous development for the product and a good focus on quality and interoperability.

## Cafienne Background
We think Cafienne has a two-fold background. First, there is a background in business process modelling, and next, Cafienne has learned of the evolution of the ways we deploy business applications on IT-infrastructure.

### Business Processes
Ten companies responded to a 2009 OMG (Object Management Group) call to standardize a Data Centric Business Process Management, or Emerging Case Management Standard to be published in 2012. The OMG call draws on several influences, among them the Case Management literature (van der Aalst, 2008), Business Artifacts (Nigam and Caswell, 2003), Guard-Stage-Milestone (GSM, Hull et al 2011), and Dynamic planning for Case Management (de Man, 2009).

As stated in CMMN 1.1, there had been, for some time, a discussion amongst (business) process modellers of the need to model activities that are not so predefined and repeatable, but instead depend on  evolving circumstances and ad hoc decisions by knowledge workers regarding a particular situation, a case. 

In this sense, a Case is a proceeding that involves actions taken regarding a subject in a particular situations to achieve a desired outcome, whereas a Business Process focuses on executing predefined tasks. The proceeding of a Case is primarily driven by its Case File and Data, the Business Process is mainly driven by the sequence in which people in the organization execute their assigned tasks. Note  that in a Business Process Model there is no place for data.

In Business Process is predefined which roles must execute tasks. In a Case there is much freedom to assign roles to a tasks. Tasks can also be planned at the discretion of a Case Worker and assigned to another Case Worker or role, and tasks can be repeated many times. Even, Case Workers can skip and redo tasks. In Business Processes only executing a task is possible.


### Building and deploying business applications
In earlier days, software companies that offered Business Process Management Solutions supplied a platform. As a customer, you needed to build your business aplications using that platform and all its capabilites and next you deployed these business applications on the infrastructure offered. This way of working has many setbacks and nowadays there are other strategies that allow for a more agile and evolutionary approach.

We adher to microservices. Cafienne is a framework that is deployed as a Docker container that can be orchestrated in a Docker swarm or on Kubernetes. Through the implementation on top of the Akka framework, Cafienne provides an extremely open architecture, with a simple and powerful REST API, along with a clear and public Cassandra based event stream that enables you to deal with the ins and outs of all case handling. 
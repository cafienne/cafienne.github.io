---
id: modelCaseFile
title: Modelling the Case File
sidebar_label: Modelling the Case File
---

In CMMN, each case instance contains a single Case File (also called a case folder, or just the case), and case workers have access to all the data in that Case File. Case workers can add, remove, and modify data in the Case File even if they are not executing any task in the case, as long as they have sufficient privileges. The Case File contains Case File Items that can be any type of data structure.

Information in the Case File serves as context for raising events and evaluating Expressions as well as point of reference for Case Parameters, such as inputs and outputs of Tasks. CaseFile also serves as container for data that is accessible by other systems and people outside of the Case, through CaseParameters. 

In Cafienne, once you have created a Case, the Case File is a given and is shown in the modeller in a separate section, named Case  File Items. Cafienne allows you to organise Case File Items in hierarchies by containment, so you can add childs or siblings. 

## Case File Item

In CMMN, Case File Items are used to represent all kinds of data, including a data value in a database, a row in a database, a document, a spreadsheet, a picture, a video, a voice recording, etc. Case File is meant as logical model. It does not imply any assumptions about physical storage of information. A Case File Item must have a Case File Item Definition that defines the structure, as well as the “language” (or format) to define the structure. This may include the definitions of Properties (“metadata”) of a Case File Item. In CMMN, Case File Item Properties have a name and a type.

In Cafienne, you explicitly can use a Case File Item, its Definition and its Properties to design a JSON object structure. In the Case File Item Section, you choose as Definition Type “Unspecified”. Then you are allowed to add Properties, being a name and a “datatype”. These properties are then not “metadata” but “attributes” of the Case File Item that by this definition is an “objct”.

In Cafienne you can use these properties to store values. The JSON structure looks like

```sh
{
 "object": "...", --the case file item
 "properties": {
   "...": "...",
   "...": "..."
 },
....
}
```
​​
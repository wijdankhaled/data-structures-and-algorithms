# Singly Linked List
<!-- Short summary or background information -->
- linked list : sequance of node that connect to each other 
each node refer to next node 

- singly : has one refrence and the refrence point to the next point of the LL

## Challenge
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

- Linked List
Create a Linked List class
Within your Linked List class, include a head property.
Upon instantiation, an empty Linked List should be created.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
insert to the first using linkedlist take time O(1)

seacrh inside linked list take time O(n)

retrive take time O(n)

Methods in LinkedList Class

insertmethod take one paramter to insert the node in the first linkedlist

includes take one paramter to find that inside linkedlist

tostring with no paramter to rerutn all item in linked list


**insert**
Arguments: value
Returns: nothing
Adds a new node with that value to the head of the list with an O(1) Time performance.

**includes**
Arguments: value
Returns: Boolean
Indicates whether that value exists as a Node’s value somewhere within the list.

**to string**
Arguments: none
Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Whiteboard Process
![](ll.png)
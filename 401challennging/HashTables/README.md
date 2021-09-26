# Hashtables
<!-- Short summary or background information -->
hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

![hashtable](https://modeling-languages.com/wp-content/uploads/2018/10/hash.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
best memory efficiency is simply the one with the highest load factor, (it can even exceed 100% memory efficiency by using key compression with compact hashing ). A hash table like that does still provide **O(1)** lookups

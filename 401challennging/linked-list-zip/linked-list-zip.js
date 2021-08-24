'use strict'
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        try {
            let node = new Node(value);
            if (!this.head) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
        } catch {
            console.log('Enter a valid input');
        }
    };

    includes(value) {
        try {
            let ptr = this.head;
            if (!this.head) {
                return false;
            } else {
                while (ptr.next) {
                    if (ptr.value == value) {
                        return true;
                    }
                    ptr = ptr.next;
                    if (ptr.next == null && value == ptr.value) {
                        return true;
                    }
                }
                return false;
            }
        } catch {
            console.log('Enter a valid input');
        };
    };

    toString() {
        try {
            let ptr = this.head;
            let string = '';

            while (ptr.next) {
                if (ptr.value == null || ptr.value == undefined) {
                    string = string + `NULL -> `;
                } else {
                    string = string + `{${ptr.value}} -> `
                }
                ptr = ptr.next;
                if (ptr.next == null) {
                    string = string + `{${ptr.value}}`
                }
            }
            return string;
        } catch {
            console.log('Error');
        }

    };

    append(value) {
        try {
            let node = new Node(value);
            if (!this.head) {
                this.head = node;
            } else {
                let ptr = this.head;
                while (ptr.next) {
                    ptr = ptr.next;
                }
                ptr.next = node;
            };
        } catch {
            console.log('Error');
        };

    };

    insertBefore(value, ref) {
        try {
            let node = new Node(value);
            if (!this.head) {
                this.head = node;
            } else {
                let ptr = this.head;
                if (this.head.value == ref) {
                    node.next = this.head;
                    this.head = node;
                };
                while (ptr) {
                    if (ptr.next.value == ref) {
                        node.next = ptr.next;
                        ptr.next = node;
                        break;
                    }
                    ptr = ptr.next;
                };
            };
        } catch {
            console.log('Error');
        };
    };

    insertAfter(value, ref) {
        try {
            let node = new Node(value);
            let ptr = this.head;
            while (ptr) {
                if (ptr.next.value == ref) {
                    node.next = ptr.next;
                    ptr.next = node;
                    break;
                }
                ptr = ptr.next;
            };
        } catch {
            console.log('Error');
        };
    };

    kthFromEnd(k) {
        let array = [];
        let ptr = this.head;

        while (ptr) {
            array.push(ptr.value);
            ptr = ptr.next;
        }
        if (k >= array.length) {
            return ("Exception, Index provided is greater than the elements count");
        }
        else if (k < 0) {
            return ("Exception, negative index doesn't exist");
        } else {
            return array[array.length - 1 - k]
        }
    }
};
// code challenge08
function zipLists(list1, list2) {
    let ptr1 = list1.head;
    let ptr2 = list2.head;
    let list3 = new LinkedList();

    while (ptr1 || ptr2) {
        if (ptr1 != null) {
            list3.append(ptr1.value);
            ptr1 = ptr1.next;
        }
        if (ptr2 != null) {
            list3.append(ptr2.value);
            ptr2 = ptr2.next;
        }
    }
    return list3.toString();
}
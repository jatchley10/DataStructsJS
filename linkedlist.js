class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }  
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    //insert last node
    insertLast(data){
        let last = new Node(data);
        let current;
        
        if(this.head == null){
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = last;
        }
    }
    //insert at index
    //   1 -> 2 -> 3 -> 4
    //Sample index = 2;
    //   1 -> 2 -> 5 -> 3 -> 4
    insertAtIndex(data, index){
        let current = this.head;
        var temp;
        var prev;
        let count = 0;

        if(index ===0){
            temp = this.head;
            this.head = new Node(data);
            this.head.next = temp;
        }
        else{
            //Todo: insert linked list at a given index. not just at the beggining
        }
    }



    //get an index
    getAtIndex(index){
        let count = 0;
        let current = this. head;
        while(count != index){
            current = current.next;
            count += 1;
        }
        return current.data;
    }
    //remove at an index


    //clear list

    //print list data
    printListData(){
        var current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(300);
ll.insertLast(400);
ll.insertAtIndex(0,0);
ll.insertAtIndex(350,4);
ll.printListData();
console.log("There was the full list. This is the specified index")
console.log(ll.getAtIndex(3));

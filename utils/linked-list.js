
export class ListNode {
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.child = null;
    }
}

export function printLL(node, prefix){
    let temp = node;
    let ans = [];
    while(temp){
        ans.push(temp.val);
        temp = temp.next;
    }
    if(ans.length){
        console.log(`${prefix ? prefix: 'LL'}: ${ans.join(" -> ")}`)
    }else{
        console.log("EMPTY");
    }

}

export function makeLL(arr){
    let head = new ListNode();
    let temp = head;
    arr.forEach(item => {
        const node = new ListNode(item);
        temp.next = node;
        temp = temp.next;
    })
    return head.next;
}

export function lengthOfLL(node){
    let count = 0;
    while(node){
        node = node.next;
        count++;
    }
    return count;
}
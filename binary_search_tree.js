var tree; // global

function setup(){
    tree = new Tree();
    for (var i = 0 ; i < 10; i++ ){
        tree.addValue(Math.floor(Math.random() * 101));
    }

    console.log(tree);
    tree.traverse();
}

/******************************
*       TREE 
*******************************/
function Tree(){
    this.root = null;
}

Tree.prototype.traverse = function() {
    this.root.visit();  // root.visit()
}

Tree.prototype.search = function(val){
    var found = this.root.search(val);
    return found;
}

Tree.prototype.addValue = function(val) {
    var n = new Node(val);
    if (this.root == null){
        this.root = n;
    } else {
        this.root.addNode(n);
    }

}

/******************************
*       NODE
*******************************/
function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

Node.prototype.search = function(val){
    if(this.value == val){
        //console.log("found " + val);
        return this;
    } else if (val < this.value && this.left != null){
         return this.left.search(val);
    }else if (val > this.value && this.right != null){
        return this.right.search(val);
    }
}

Node.prototype.visit = function(){
    if (this.left != null){
        this.left.visit();
    }
    console.log(this.value);
    if (this.right != null){
        this.right.visit();
    }
}

Node.prototype.addNode = function(n){
    if (n.value < this.value){
        if(this.left == null){
            this.left = n; 
        } else {
            this.left.addNode(n); 
        }
    } else if (n.value > this.value) { // equal values fall through the tree
        if(this.right == null){
            this.right = n; 
        } else {
            this.right.addNode(n); 
        }
    }
}

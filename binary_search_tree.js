var tree; // global

function setup(){
    tree = new Tree();
    for (var i = 0 ; i < 10; i++ ){
        tree.addValue(Math.floor(Math.random() * 101));
    }

    console.log(tree);
    tree.traverse();
}


function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

function Tree(){
    this.root = null;
}

Tree.prototype.addValue = function(val) {
    var n = new Node(val);
    if (this.root == null){
        this.root = n;
    } else {
        this.root.addNode(n);
    }

}

Tree.prototype.traverse = function() {
    this.root.visit();  // root.visit()
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

Node.prototype.visit = function(){
    if (this.left != null){
        this.left.visit();
    }
    console.log(this.value);
    if (this.right != null){
        this.right.visit();
    }
}
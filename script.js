class TreeNode {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST{
  

  BST(){
    this.root = null;
  }

  insert(data){
    if(!this.root){
      this.root = new TreeNode(data);
      return;
    }
    this.insertNode(this.root,data);
  }

  insertNode(parent, data){
    if(data<parent.data){
      if(parent.left){
        this.insertNode(parent.left, data);
      }else{
        parent.left = new TreeNode(data);
      }
    }else if(data>parent.data){
      if(parent.right){
        this.insertNode(parent.right, data);
      }else{
        parent.right = new TreeNode(data);
      }
    }else{
      console.warn("Node already exists in the BST");
    }
  }

  delete(data){
    if(!this.root){
      console.warn("No node to delete in the BST");
    }

  }

  traverse(){
    if(!this.root){
      console.log("BST is empty");
      return;
    }
    this.inorder(this.root);
  };

  inorder(node){
    if(!node){
      return;
    }
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
}

const bst = new BST();

bst.insert(50);
bst.insert(20);
bst.insert(25);
bst.insert(30);
bst.insert(55);
bst.insert(65);
bst.traverse();
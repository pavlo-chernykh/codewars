const binaryTree = {
  value: 6,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1
      }
    },
  },
  right: {
    value: 10,
    left: {
      value: 4,
    },
    right: {
      value: 5
    }
  }
}

// recurve
function sumTree(tree) {
  // let result = tree.value
  let result = 0;
  result += tree.value;
  if(tree.left) {
    result += sumTree(tree.left)
  }
  if(tree.right) {
    result += sumTree(tree.right)
  }
  return result
}
// console.log(sumTree(binaryTree));

// iterative 

function sumTreeIterative(tree) {
  let result = 0;
  const stack = [];
  const values = Object.values(tree);
  values.forEach(node => {
    if (typeof node === 'number') {
      result += node
    } else {
      stack.push(node)
    }
  });
  while(stack.length) {
    const node = stack.pop();
    result += node.value;
    if (node.left) {
      const values = Object.values(node.left)
      values.forEach(node => {
        if (typeof node === 'number') {
          result += node
        } else {
          stack.push(node)
        }
      });
    }
    if (node.right) {
      const values = Object.values(node.right)
      values.forEach(node => {
        if (typeof node === 'number') {
          result += node
        } else {
          stack.push(node)
        }
      });
    }
  }
  return result;
}

console.log(sumTreeIterative(binaryTree));
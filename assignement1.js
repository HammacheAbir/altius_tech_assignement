class SinglyLinkedListNode {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }

const getList=(arr,i)=>{
  if(i<arr.length){
    return new SinglyLinkedListNode(arr[i],getList(arr,i+1))
  }else{
    return null
  }
    
}

const compare_lists=(list1, list2)=>{

  if(list1?.next==null&&list2?.next==null){ //last node
    if(list1?.data==list2?.data)return 1
    else return 0
  }else{
    if(list1?.data==list2?.data && compare_lists(list1?.next,list2?.next)==1)return 1
    else return 0
  }
}

const fileToLists=async(path)=>{
  const fs = require('fs')
  
  await fs.readFile(path, (err, data) => {
      if (err) throw err;
      var result = data.toString().split("\n")
      
      var testCases = result[0]
      var index = 1
      for(i=0;i<testCases;i++){
        var lists = []
        for(j=0;j<2;j++){
          var length = parseInt(result[index])
          lists[j] = getList(result.slice(index+1,index+length+1),0)
          
          index = index+length+1
        }
        console.log(compare_lists(lists[0],lists[1]))
      }
  })
}

console.log("Testing assignment01-1")
fileToLists('assignment01-1.txt')

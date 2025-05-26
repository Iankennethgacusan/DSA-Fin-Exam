let queue = [];

function showFront() {
  if (queue.length === 0) {
    console.log("Queue is empty.");
  } else {
    console.log("First Item:", queue[0]);
  }
}

function enqueueItem(item) {
  queue.push(item);
  showFront();
  console.log("Queue Now:", queue);
}

function dequeueItem() {
  if (queue.length > 0) {
    queue.shift();
    showFront();
    console.log("Updated Queue:", queue);
  } else {
    console.log("Nothing to dequeue.");
  }
}

for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter task ${i + 1}:`);
  enqueueItem(item);
}

// Example dequeue
dequeueItem();

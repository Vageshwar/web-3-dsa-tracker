
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
  // Queue for busy rooms: store objects {end, room}
  const room_used = new MinPriorityQueue((item) => item.end * n + item.room);

  const count = Array(n).fill(0);
  meetings.sort((a, b) => a[0] - b[0]);

  // Queue for free rooms: store room numbers
  const room_free = new MinPriorityQueue(); // min-heap on room number
  for (let i = 0; i < n; i++) {
    room_free.enqueue(i);
  }

  for (const [start, end] of meetings) {
    // Free up rooms
    while (!room_used.isEmpty() && room_used.front().end <= start) {
      const freed = room_used.dequeue();
      room_free.enqueue(freed.room);
    }

    if (!room_free.isEmpty()) {
      const room = room_free.dequeue();
      room_used.enqueue({ end: end, room });
      count[room]++;
    } else {
      const earliest = room_used.dequeue();
      const newEnd = earliest.end + (end - start);
      room_used.enqueue({ end: newEnd, room: earliest.room });
      count[earliest.room]++;
    }
  }

  // Find the room with most meetings
  let max = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (count[i] > max) {
      max = count[i];
      result = i;
    }
  }

  return result;
};

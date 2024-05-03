function dijkstra(adjList, sourceNode) {
	let distances = {};
  	for (let node in adjList) { distances[node] = Infinity; }
  	distances[sourceNode] = 0;
  	let unvisited = new Set(Object.keys(adjList));
  	
	while (unvisited.size > 0) {
   		let closestNode = null;
  		let minDistance = Infinity;
		for (let node of unvisited) {
			if (distances[node] <= minDistance) {
				closestNode = node;
				minDistance = distances[node];
			}
		}
		unvisited.delete(closestNode);
		for (let neighbor in adjList[closestNode]) {
			let edgeWeight = adjList[closestNode][neighbor];
			let newDistance = distances[closestNode] + edgeWeight;
			if (newDistance < distances[neighbor]) {
				distances[neighbor] = newDistance;
			}
		}
	}
	return distances;
}
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

- First, the while loop iterates until unvisited is empty (maximum of v iterations), then the first for loop iterates across every vertex in unvisted to find the closest vertex (maximum of v iterations), after that we remove it from unvisited (constant time), then the second for loop iterates through all the edges of the closest node to find the smallest weight path (maximum of v-1 edges assuming no redundant edges) So the complexity can be represented as $v * (v + (v - 1)) = v * (2v - 1) = 2v^2 - v$ which can be bounded by $\Theta(v^2)$ since $v^2$ is the leading term in $2v^2 - v.$
<div align="center">

# PathVisor

</div> 

PathVisor is an interactive and educational tool designed to visualize popular pathfinding algorithms in action. Whether you're a student, educator, or simply curious about graph theory, PathVisor makes it easy to learn and explore pathfinding concepts in an engaging way.

---

## 🚀 Features  
- 🎯 Visualize algorithms like **Dijkstra's Algorithm**, **A\***, **Breadth-First Search (BFS)**, and **Depth-First Search (DFS)**.  
- 🌈 Fully interactive grid interface: Create walls, set start/end points, and experiment with custom scenarios.  
- 📊 Real-time animation of algorithms with step-by-step analysis, providing insight into their decision-making process.  
- 🛠️ Customizable speed to suit your learning preferences.  

---
## 🧠 Understanding the Algorithms  

V: The number of vertices (or nodes) in the graph. 

E: The number of edges (connections between the vertices) in the graph.

Note: BFS and DFS do not find the shortest path and are not weighted unlike Dijkstra and A*

| Algorithm    | Description                                                                 | Time Complexity         | Space Complexity      |
|--------------|-----------------------------------------------------------------------------|-------------------------|-----------------------|
| Dijkstra     | Finds the shortest path in a weighted graph (with priority queue).          | O(E + V log V)          | O(V)                  |
| A*           | Heuristic-based algorithm for finding the shortest path efficiently.        | O(E log V)              | O(V)                  |
| BFS          | Explores all neighbours at the current depth level before moving deeper.    | O(V + E)                | O(V)                  |
| DFS          | Explores as far as possible along a branch before backtracking.             | O(V + E)                | O(V)                  |

---

## 🖼️ Preview  
![PathVisor Demo](static/demo.gif)

---

## 🛠️ Installation

Click the [link](https://pathvisor.vercel.app) or follow these steps to run the project locally:

**Clone the Repository**

   ```bash
   git clone https://github.com/rajshah6/pathfinding-visualizer
   cd pathfinding-visualizer
   ```

**Install Dependencies**

Use the following command to install the required packages:
```bash
npm install
```

**Initiate the Server**

Start the development server with:
```bash
npm run dev
```

**Access the Application**

Open your browser and navigate to `http://localhost:5173` to view your application.

## 🚀 Building and Running for Production

To generate a full static production build, run the following command:

```bash
npm run build
```

Once the build is complete, you can preview the site as it will appear once deployed by using:

```bash
npm run deploy
```

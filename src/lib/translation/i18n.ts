export const locale = {
	en: {
		title: 'PATHFINDING VISUALIZER',
		pickAlgorithm: 'Pick an algorithm to start.',
		selectStartOrEnd: 'Click the Start (🟦) or End (🟧) node once to change its position.',
		usePlayer:
			'Use the Player to control the speed and execution of the algorithm. Click the right and left arrows for step-by-step analysis.',
		selectWallsWeights: 'Select Walls or Weights from the menu and draw them on the grid.',
		detailsTitle: 'Walls represent impassable obstacles that the algorithm cannot traverse,‎ ‎ forcing it to avoid them.',
		details1: 'Weights are nodes that the algorithm can pass through, but with additional costs.‎  ‎ A tile with a “2” has a low cost.‎  ‎ A tile with a “9” however has a higher cost, making it less desirable for the algorithm to choose, unless it’s the only optimal path.‎  ‎ The algorithm prefers to choose paths with lower costs.',
		details2:
			'Note: ‎‎ Only the Dijkstra and A-star algorithms work with weighted nodes; ‎  other algorithms treat them as regular nodes.',
		details3: "Visited nodes can't be modified.‎  ‎ To reset the grid, click the button on the bottom right.",
		details4: 'Created by Raj Shah',
		
	}
};

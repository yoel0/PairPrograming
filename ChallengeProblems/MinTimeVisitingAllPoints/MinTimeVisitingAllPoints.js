const minTimePts = points => {
	let acc = 0;
	for (let i = 0; i < points.length - 1; i++) {
		const [currentX, currentY] = [points[i][0], points[i][1]];
		const [nextX, nextY] = [points[i + 1][0], points[i + 1][1]];

		// max of x || y will be distance/time *** take into account
		let diffX = Math.abs(nextX - currentX);
		let diffY = Math.abs(nextY - currentY);
		acc += Math.max(diffX, diffY);
	}

	return acc;
};

console.log(minTimePts([[1, 1],[3, 4],[-1, 0],]));
// Will return - '7'.




// edge case
// if(!points || points.length === 0) { return null };

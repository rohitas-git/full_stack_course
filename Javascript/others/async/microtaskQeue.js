async function processAnalytics(data) {
    let analysis = "";

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(analysis);
        }, 100);

        setTimeout(() => {
            analysis += ` - Finished!`;
        }, 0);

        // don't touch above this line

        // We wrap the concatenation in a Promise.resolve().then() 
        // to put it in the Microtask queue.
        // Microtasks execute IMMEDIATELY after the current synchronous block,
        // and critically, BEFORE any Macrotasks (like the "Finished" setTimeout).
        Promise.resolve().then(() => {
            analysis += `- Processing: ${data}`;
        });

        // don't touch below this line

        analysis += "Analyzing...";
    });
}

export { processAnalytics };
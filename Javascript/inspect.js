/**
 * Improved prototype inspector that explicitly identifies .prototype objects.
 * Logic: Checks if current object matches its constructor's prototype.
 */
function inspectPrototypeChain(obj) {
    let current = obj;
    let level = 0;

    while (current) {
        const constructorName = current.constructor?.name || 'Anonymous';

        // Explicit labeling for clarity
        const label = `${constructorName}`

        console.log(`--- Level ${level}: ${label} ---`);

        const props = Object.getOwnPropertyNames(current);
        console.log("Properties:", props.length > 0 ? props.join(", ") : "None");

        // Move up the chain
        console.log(`Current Object: ${current?.constructor?.name}`);
        current = Object.getPrototypeOf(current);
        console.log(`Parent Prototype : ${current?.constructor?.name}`);
        level++;
    }
    console.log("--- End of Chain ---");
}

// Example Execution:
class Titan { constructor(name) { this.name = name; } }
class BeastTitan extends Titan { constructor(name, power) { super(name); this.power = power; } }

const zeke = new BeastTitan("Zeke", 9000);
inspectPrototypeChain(zeke);
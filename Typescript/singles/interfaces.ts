// TOC

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

// there are two ways to define object types:
// - the type keyword
// - interfaces

type Superhero = {
  name: string;
  powers: string[];
  isAvenger: boolean;
};

interface Superhero2 {
  name: string;
  powers: string[];
  isAvenger: boolean;
}

// Almost identical, but interfaces can be extended and implemented, while type aliases cannot.

// Types:
// - No delaration merging
// - Can represent more complex types (e.g., unions, intersections, tuples)

// Interfaces:
// - Support declaration merging (multiple declarations with the same name are merged)
// - Cannot represent complex types like unions or intersections
// - extendable and implementable

// 99% of the time - use type aliases for object types,
// 1% - interfaces for classes and when you need declaration merging.

/* -------------------------------------------------------------------------- */
/*                            Extending Interfaces                            */
/* -------------------------------------------------------------------------- */

//  Interfaces are a bit better when it comes to extending other interfaces (inheriting properties).

type Character2 = {
  name: string;
  level: number;
};

type Wizard2 = Character2 & {
  spellbook: string[];
  mana: number;
};

interface Character {
  name: string;
  level: number;
}

interface Wizard extends Character {
  spellbook: string[];
  mana: number;
}

// In both cases, a Wizard now has all four properties: name, level, spellbook, and mana.

// Why Is “Interface Extends” Usually Better?

// - Conflict Handling
//  extends: Creates a single flat object; detects and flags property conflicts for resolution.
//  &: Recursively merges properties; can occasionally produce never.

// - Tooling/Display
// extends: Displays consistently better in IDEs and error messages.
// &: Type aliases to intersections cannot be displayed as part of other intersections.

// - Performance
// extends: Type relationships are cached by the compiler.
// &: Relationships are not cached as a whole; every constituent is checked before the flattened type.

// --------------------------------------------------------------------------- */

interface Magical {
  mana: number;
  castSpell(spell: string): void;
}

interface Physical {
  strength: number;
  attack(): void;
}

interface BattleMage extends Character, Magical, Physical {
  combineAttacks(): void;
}

/* -------------------------------------------------------------------------- */
/*                       Overriding Interface Properties                      */
/* -------------------------------------------------------------------------- */

interface Character {
  rank: string | number;
  name: string;
  level: number;
}

interface Wizard extends Character {
  // Wizards only have a number rank
  // This is allowed because
  // `number` is assignable to `string | number`
  rank: number;
  mana: number;
}

// You can override properties from the base interface,
// but the new type must be compatible with the original:

// - If the original type is a union (e.g., `string | number`), the new type must be a subtype of that union (e.g., `number`).
// - If the original type is a specific type (e.g., `string`), the new type must be the same or a subtype of that type (e.g., `string` or a narrower string literal type).

/* -------------------------------------------------------------------------- */
/*                             Declaration Merging                            */
/* -------------------------------------------------------------------------- */

// Declaration merging is, in my experience, mostly a footgun. Sure, it's useful in certain niche cases (like modifying the global Window type in front-end code), but most of the time it leads to confusing bugs.

// In my experience, declaration merging is often used unintentionally when multiple files define
// the same interface name, leading to unexpected merged types and hard-to-debug errors.

interface Spaceship {
  name: string;
}

interface Spaceship {
  engines: number;
}

interface Spaceship {
  lightSpeed: boolean;
}

// Is the same as this: 
interface Spaceship {
  name: string;
  engines: number;
  lightSpeed: boolean;
}

// If you use the type keyword instead, you'll get an error that you can't redeclare the type

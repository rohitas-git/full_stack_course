// Explicit Return
// - Author-Intended return type
// - Prevents contract screw-up

// When to use? Code used by 'others'
function divide2(a: number, b: number): number {
  return a / b;
}

// Inferred Return
// - it is more accurate or narrow
// - Less typing

// When to use? Code used by 'me'
function divide1(a: number, b: number) {
  return a / b;
}

// The TS-specific void type represents
// the return value of functions that don't return a value.
function logMessage(message: string): void {
  console.log(message);
  // nothing is returned here!
}

/* -------------------------------------------------------------------------- */
/*                             Function Overloads                             */
/* -------------------------------------------------------------------------- */

// note: function overloads need to be declared above the implementation
function formatEmployeeMessage(employee: Employee): string;
function formatEmployeeMessage(
  employee: Employee,
  isNew: true,
  onBoardedDate: Date,
): string;


function formatEmployeeMessage(
  employee: Employee,
  isNew?: boolean,
  onBoardedDate?: Date,
): string {
  if (!isNew) {
    return `Employee: ${employee.name}, Dept: ${employee.dept}`;
  }
  return `Employee: ${employee.name}, New: Yes, Onboarded: ${onBoardedDate}`;
}

type Employee = {
  name: string;
  dept: string;
};

// Used as-is, this function can be called in 3 different ways:
// formatEmployeeMessage(employee)
// formatEmployeeMessage(employee, boolean)
// formatEmployeeMessage(employee, boolean, Date)

// But we can constrain the function to only allow certain combinations of parameters by using function overloads.


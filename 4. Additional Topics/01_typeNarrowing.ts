// 'typeof' Type-Guards/Narrowing

function myFunc(val: number | number[]): number {
  if (typeof val === "object") {
    return val.length;
  }
  return val;
}

function getUserDetails(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return { name: "kamlesh", email: "kamlesh@mail.com" };
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    }
    else if (typeof strs === "string" && strs != "") {
      console.log(strs);
    }
  }
}

/* ------------------------------------------------------ */

// 'instanceof' Narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
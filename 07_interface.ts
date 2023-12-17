interface TrialUser {
  readonly userId: number
  username: string
  email: string
  authToken?: number
  // startTrial: () => string
  startTrial?(): string
  getDiscount(couponName: string): number
}

// reopening interface -> adding new fields to an existing interface (not possible in type aliases)
interface TrialUser {
  creditCardNumber: number
}

const newUser: TrialUser = {
  userId: 148, username: "ram", email: "ram@gmail.com", creditCardNumber: 85452,
  startTrial: () => {
    return "trial started";
  },
  getDiscount: (name: "christmas-sale") => {
    return 10;
  }
}

/* -------------------------------------------------- */
// inheritance -> extending an interface
interface Customer extends TrialUser {
  subscribedPlan: "Starter" | "Agency" | "Organization"
}

const newCustomer: Customer = {
  userId: 452, username: "shivek", email: "shivek@gmail.com", creditCardNumber: 145287,
  subscribedPlan: "Agency",
  getDiscount: (name: "christmas-sale") => {
    return 20;
  }
}
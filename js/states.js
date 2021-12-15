// class IndividualState {
//   constructor() {
//     this.isContacted = false;
//     this.isIntroduced = false;
//     this.isConvinced = false;
//     this.isPissed = false;
//   }
// }

const baseState = {
  isContacted: false,
  isIntroduced: false,
  isConvinced: false,
  isPissed: false,
  bringsFriends: false,
  doubleTrouble: false,
};

let states = {
  josiane: { ...baseState },
  samira: { ...baseState },
  bernard: { ...baseState },
  jeanpierre: { ...baseState },
  karim: { ...baseState },
  alimatou: { ...baseState },
  william: { ...baseState },
};

export { states, baseState };

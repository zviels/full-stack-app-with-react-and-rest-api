// The 'Change' Function
// This Function Receives An Event & A Setter Function
// The Function Calls The Setter & Passes The Event To It

const change = (event, setter) => setter(event.target.value);

// Export Function

export default change;
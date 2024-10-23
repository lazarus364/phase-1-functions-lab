function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
}
function distanceFromHqInFeet(feet) {
    const hqFeet = 42;
    const blocks = Math.abs(feet - hqFeet)
    return blocks * 264;
}
function distanceTravelledInFeet(start, destination) {
    const feet = Math.abs(start - destination);
    return feet * 264
}
function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264; // Convert blocks to feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400) {
      return (distance - 400) * 0.02; 
    } else {
      return 0; 
    }
  }
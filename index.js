const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
const totalBatteries=assembledBatteries.reduce((sum ,battery)=>sum + battery, 0)
   
module.exports={totalBatteries};

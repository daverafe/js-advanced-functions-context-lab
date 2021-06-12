/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = function (array) {
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(array) {
    let arrayOfObj = array.map(arr => {
        return createEmployeeRecord(arr)
    })
    return arrayOfObj
 }

 function createTimeInEvent(date) {
    let dateArray = date.split(' ')
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }
   let updatedRecord = this.timeInEvents.push(timeIn)
   return this 
}

function createTimeOutEvent(date) {
    let dateArray = date.split(' ')
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }
   let updatedRecord = this.timeOutEvents.push(timeOut)
   return this  
}

function hoursWorkedOnDate(date) {
    let timeInDate = this.timeInEvents.filter(timeIn => {
        if(timeIn.date === date) {
            return timeIn 
        }
    })
    let timeOutDate = this.timeOutEvents.filter(timeOut => {
        if(timeOut.date === date) {
            return timeOut
        }
    })
    let startHour = timeInDate.reduce(function (memo, time) {
        return memo + time.hour 
    }, 0) 
    let endHour = timeOutDate.reduce(function (memo, time) {
        return memo + time.hour 
    }, 0) 
    return (endHour - startHour) / 100  
}

function wagesEarnedOnDate(date) {
    const payRate = this.payPerHour
    return hoursWorkedOnDate.call(this, date) * payRate 
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(records, firstName) {
    let matchingRecord = records.reduce(record => {
         if(record.firstName === firstName){
             return record 
         } 
      })
      return matchingRecord
  }

  function calculatePayroll(records) {
    let eachEmployeeTotal = records.map(record => {
      let dates = record.timeInEvents.map(function (time) {
          return time.date 
      })
      let uniqueDates = [...new Set(dates)]
      let pay = uniqueDates.reduce(function (memo, d) {
          console.log(record)
          return memo + wagesEarnedOnDate.call(record, d)
      }, 0)
      console.log(pay)
      return pay 
     })
     let calculatedTotal = eachEmployeeTotal.reduce(function (memo, recordTotal){
         return memo + recordTotal
     }, 0)
     return calculatedTotal
  }

//   let calculatePayroll = function(arrayOfEmployeeRecords){
//     return arrayOfEmployeeRecords.reduce(function(memo, rec){
//         return memo + allWagesFor.call(rec)
//     }, 0)
// }
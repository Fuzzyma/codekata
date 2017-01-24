var numbers = {
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000
}

module.exports = function (number) {

  if(!syntaxOK(number)){
    return false
  }
  
  var sum = 0
  
  for(var i = 0, len = number.length; i < len; ++i) {
    var c = number.charAt(i)

    if (i+1 < len) {
      var combination = c + number.charAt(i+1)
      
      if (numbers[combination]) {
        sum += numbers[combination]
        ++i
        continue
      }
    }
    sum += numbers[c]
  }
  
  return sum
}

function syntaxOK(number) {

  if(number.indexOf(' ') > -1) {
    return false
  }

  var num1 = ['I', 'X', 'C', 'M']

  for(var i in num1) {
    var reg = new RegExp(num1[i] + '{4}')

    
    if(reg.test(number)){
      return false
    }
  }
  
  var num2 = ['V', 'L', 'D']

  for(var i in num2) {
    var reg = new RegExp(num2[i] + '{2}')

    if(reg.test(number)){
      return false
    }
  }
  
  var num3 = ['VX', 'LC', 'DM', 'VL', 'LD', 'VD']
  
  for(var i in num3) {
    var reg = new RegExp(num3[i])
    
    if(reg.test(number)){
      return false
    }
  }
  
  var num4 = ['I', 'V', 'X', 'L', 'C','D', 'M']
  
  for(var i = 1, len = num4.length; i < len; ++i){
    for(var j = 0; j < i; ++j){
    
      var reg = new RegExp(num4[j] + num4[i])
      if(reg.test(number) && numbers[num4[j]]/numbers[num4[i]] < 0.1){
        return false
      }
    
      var reg = new RegExp(num4[j] + num4[j] + num4[i])
      if(reg.test(number)){
        return false
      }
    
    }
  }
  return true
}

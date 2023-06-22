export default function luhnAlgorithm(value) {
  value = value.replace(/\D/g, '');

  var nCheck = 0;
  var bEven = false;

  for (var n = value.length - 1; n >= 0; n--) {
      var nDigit = parseInt(value.charAt(n), 10);

      if (bEven && (nDigit *= 2) > 9) {
          nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
  }

  return (nCheck % 10) == 0;
}
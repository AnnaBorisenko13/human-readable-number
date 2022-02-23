module.exports = function toReadable (number) {
    var string = number.toString(); //переводим строку в пропись
    if (parseInt(string) === 0) { //проверка на ноль, если аргумерт строчный равен 0, то выводим ноль
        return 'zero';
        }
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];//маасив единиц и числа 11-19
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'and'];
    let exaptions = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'] //маасив десятков 20-90

    let stringLen = string.length;
    console.log('length of number is ', stringLen); //узнаем длинну числа
    let words = []; //созадем пустой массив, куда будем добавлять слова от десятков до сотен
    let arr = [0, 0, 0];
    let word;
    for (i = 0; i < stringLen; i++) {  //проходимся по строке начиная с нулевого символа т.е. с сотен
        let ints = string[i].split('').reverse().map(parseFloat);//разбиваем строку на значения, переворачивая ее и создавая массив
            if (stringLen === 3){
                arr[i]=ints;
            }
            if (stringLen === 1){
                arr[arr.length-1-i]=ints; 
            }
            if (stringLen === 2){
                arr[arr.length +i -2] = ints;
            }
            
        }
            console.log(arr);
             if (arr[0] != 0){
                word = units[arr[0]];
                words.push(word + ' hundred');

             }
             if (arr[1] != 0 && arr[1] != 1){
                word = tens[arr[1]];
                words.push(word);
             }
             else if (arr[1] == 1){
                //  let el = arr[2] + 10;
                console.log(arr[2]);
                 word = exaptions[arr[2]];
                 words.push(word);
             }

             if (arr[1] != 1 && arr[2] != 0 ){
                word = units[arr[2]];
                words.push(word);
             }
             return words.join(' ');   
        }
           
           
         






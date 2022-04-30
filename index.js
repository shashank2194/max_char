'use strict';

let char_length = 256;
function MaxOccurChar(input_str)
{    
  input_str= input_str.toLowerCase();
  let array_char = new Array(char_length);
  for (let i = 0; i < char_length; i++)
  {
    array_char[i] = 0;
  }
         
  let local_len = input_str.length;
  for (let i = 0; i < local_len; i++)
  {
    array_char[input_str[i].charCodeAt(0)] += 1;
  }
  
  let local_max_count = -1;
  let local_result = ' ';        
  
  for (let j = 0; j < local_len; j++)
  {
    if (local_max_count < array_char[input_str[j].charCodeAt(0)])
    {
      local_max_count = array_char[input_str[j].charCodeAt(0)];
      local_result = input_str[j];
    }
  }
  return local_result;
}

var readlineSync = require('readline-sync');
var answer = readlineSync.question('Max Character - Input: ');

console.log('Output: '+MaxOccurChar(answer)+'\n\n');


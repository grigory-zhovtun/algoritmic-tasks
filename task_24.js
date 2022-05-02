'use strict';

function convertHTML(str) {
    const entitiesHTML = {
        "&": '&amp;',
        "<": '&lt;',
        ">": '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }

    const newStr = str.split('')
        .map(symb => {
            return (symb in entitiesHTML)? symb.replace(symb, entitiesHTML[symb]) : symb;
        }).join('');
   
    return newStr;
  }
  
  console.log(convertHTML("<>"));

  /**
   * Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.

   */
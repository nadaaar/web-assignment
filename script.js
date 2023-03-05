
      document.addEventListener("DOMContentLoaded",()=>{


        btn = document.getElementById('btn');
        btn.addEventListener('click', ("click",(e)=> {
        e.preventDefault();
        add()}));
         

        function add(){
            var day = document.getElementById('day');
            var time = document.getElementById('time');
            var subject = document.getElementById('subject');
            if(day.value == 'monday'){
                
                if(time.value == '8'){
                    var mon = document.getElementById('mon-1');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '10'){
                    var mon = document.getElementById('mon-2');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '11'){
                    var mon = document.getElementById('mon-3');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '1'){
                    var mon = document.getElementById('mon-4');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '2'){
                    var mon = document.getElementById('mon-5');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '4'){
                    var mon = document.getElementById('mon-6');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }
            }

            if(day.value == 'tuesday'){
                
                if(time.value == '8'){
                    var mon = document.getElementById('tues-1');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '10'){
                    var mon = document.getElementById('tues-2');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '11'){
                    var mon = document.getElementById('tues-3');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '1'){
                    var mon = document.getElementById('tues-4');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '2'){
                    var mon = document.getElementById('tues-5');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '4'){
                    var mon = document.getElementById('tues-6');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }
            }

            if(day.value == 'wednesday'){
                
                if(time.value == '8'){
                    var mon = document.getElementById('wed-1');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '10'){
                    var mon = document.getElementById('wed-2');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '11'){
                    var mon = document.getElementById('wed-3');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '1'){
                    var mon = document.getElementById('wed-4');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '2'){
                    var mon = document.getElementById('wed-5');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '4'){
                    var mon = document.getElementById('wed-6');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }
            }

            if(day.value == 'thursday'){
                
                if(time.value == '8'){
                    var mon = document.getElementById('th-1');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '10'){
                    var mon = document.getElementById('th-2');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '11'){
                    var mon = document.getElementById('th-3');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '1'){
                    var mon = document.getElementById('th-4');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '2'){
                    var mon = document.getElementById('th-5');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }

                if(time.value == '4'){
                    var mon = document.getElementById('th-6');
                    if(mon.innerHTML == ''){
                        mon.innerHTML = subject.value;
                    }
                }
            }

            }

           
const tds = document.querySelectorAll("td");

tds.forEach(td => {
 
  td.addEventListener("click", () => {
   
    td.innerHTML='';
  });
});

        })


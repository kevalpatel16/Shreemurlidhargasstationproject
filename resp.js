burger = document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
     rightnav.classList.toggle('v-class-resp');
     navList.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');
     })


     document.getElementById('form').addEventListener('Submit', function(e) {
          e.preventDefault();
          const name = document.getElementById('name').value;
          const phone = document.getElementById('Phone Number').value;
          const address = document.getElementById('Email').value;
         
    
          if (!name || !phone || !address ) {
            alert('Please fill all required fields.');
            return;
          }
    
          alert("Thank you " + name + "! Your booking has been received.");
          this.reset();
        });
const year=document.querySelectorAll(".wrapper2 span")[0];
const month=document.querySelectorAll(".wrapper2 span")[1];
const day=document.querySelectorAll(".wrapper2 span")[2];
const iEle=document.querySelector("input");
const bEle=document.querySelector("button");


bEle.addEventListener("click",(e)=>{
    const dob=iEle.value;
    if(dob.length==0){
        year.innerText="NaN";
        month.innerText="NaN";
        day.innerText="NaN";
    }
    else{
        const today = new Date();
        const inputedDate = new Date(dob);

    const ageInYears = today.getFullYear() - inputedDate.getFullYear();

    const hasBirthdayPassed = (today.getMonth() > inputedDate.getMonth()) || 
                              (today.getMonth() === inputedDate.getMonth() && today.getDate() >= inputedDate.getDate());

    let ageMonths = 0;
    let ageDays = 0;

    if (!hasBirthdayPassed) {
        ageMonths = 12 - (inputedDate.getMonth() + 1) + today.getMonth();
        ageDays = today.getDate() - inputedDate.getDate();
    } else {
        ageMonths = today.getMonth() - inputedDate.getMonth();
        ageDays = today.getDate() - inputedDate.getDate();
    }

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageInYears--;
        ageMonths += 12;
    }

    
      
            year.innerText= ageInYears
            month.innerText=ageMonths
            day.innerText=ageDays
        };
    }
);

